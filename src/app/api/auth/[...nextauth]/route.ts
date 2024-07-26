import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { cookies } from 'next/headers';

const returnExpiresTimes = (minutes: number) => {
  const now = new Date();
  const time = now.getTime();
  const seconds = minutes * 60;
  const milliseconds = seconds * 1000;

  return now.setTime(now.getTime() + milliseconds);
};

const handler = NextAuth({
  pages: {
    signIn: '/auth',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        vendedor: { label: 'Vendedor', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        try {
          const resSistema = await fetch(
            `${process.env.EMSOFT_API}/ServiceSistema/Login`,
            {
              body: JSON.stringify({
                usuario: process.env.VENDA_LOGIN,
                senha: process.env.VENDA_PASSWORD,
              }),
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
            }
          );
          if (resSistema.status !== 200) return null;
          const internalToken = await resSistema.json();
          if (!internalToken.value) return null;
          cookies().set({
            name: 'token',
            value: internalToken.value,
            httpOnly: true,
            expires: returnExpiresTimes(120),
          });

          const vendaCredentials = JSON.stringify({
            codigo: Number(credentials.vendedor),
            senha: credentials.password,
          });

          const fetchVenda = await fetch(
            `${process.env.EMSOFT_API}/ServiceSistema/LoginVendedor`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `bearer ${internalToken.value}`,
              },
              body: vendaCredentials,
            }
          );

          if (fetchVenda.status !== 200) {
            cookies().delete('token');
            return null;
          }
          cookies().set({
            name: 'user',
            value: credentials.vendedor,
            httpOnly: true,
            expires: returnExpiresTimes(120),
          });
          return {
            id: credentials.vendedor,
          };
        } catch (error) {
          cookies().delete('token');
          return null;
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };


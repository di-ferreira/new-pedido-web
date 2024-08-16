import { deleteCookie, hasCookie } from 'cookies-next';
import { IncomingMessage, ServerResponse } from 'http';
import { GetServerSideProps } from 'next';
import { signOut } from 'next-auth/react';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react';
interface props {
  children: React.ReactNode;
}

const SessionWrapper: React.FC<props> = async ({ children }) => {
  async function removeCookies() {
    ('use server');
    // const userId = getCookie('user', { cookies });

    if (hasCookie('token', { cookies })) {
      deleteCookie('token', { cookies });
      deleteCookie('user', { cookies });
    }
    removeCookies();
    signOut({ redirect: true, callbackUrl: '/auth' });
    redirect('/auth');
  }

  // if (!userId) {
  //   console.log('has cookie', hasCookie('token', { cookies }));

  return (
    <main className='flex flex-col w-full overflow-x-hidden min-h-screen bg-light-surface'>
      {children}
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  req,
  res,
}: {
  req: IncomingMessage;
  res: ServerResponse;
}) => {
  // const userId = getCookie('user', { cookies });
  console.log('getServerSide', hasCookie('token', { cookies }));

  if (hasCookie('token', { cookies })) {
    deleteCookie('token', { cookies });
    deleteCookie('user', { cookies });
  }

  signOut({ redirect: true, callbackUrl: '/auth' });
  redirect('/auth');
};

export default SessionWrapper;


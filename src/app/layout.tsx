import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'EMSoft Pedido Web',
  description: 'Sistema de orçamentos e pedidos para auto-peças',
  applicationName: 'Pedido Web',
  appleWebApp: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-br'>
      <body className={openSans.className}>{children}</body>
    </html>
  );
}


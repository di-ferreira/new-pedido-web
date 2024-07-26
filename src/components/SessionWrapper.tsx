import { deleteCookie, getCookie, hasCookie } from 'cookies-next';
import { signOut } from 'next-auth/react';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react';
interface props {
  children: React.ReactNode;
}

const SessionWrapper: React.FC<props> = async ({ children }) => {
  const userId = getCookie('user', { cookies });

  async function removeCookies() {
    ('use server');

    if (hasCookie('token', { cookies })) {
      deleteCookie('token', { cookies });
      deleteCookie('user', { cookies });
    }
  }

  if (!userId) {
    console.log('has cookie', hasCookie('token', { cookies }));

    removeCookies();
    signOut({ redirect: true, callbackUrl: '/auth' });
    redirect('/auth');
  }

  return (
    <main className='flex flex-col w-full overflow-x-hidden min-h-screen bg-light-surface'>
      {children}
    </main>
  );
};

export default SessionWrapper;


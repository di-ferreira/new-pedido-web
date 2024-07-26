'use client';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteCookie } from 'cookies-next';
import { signOut } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { Button } from '../button';

const ButtonSingOut = () => {
  async function logOut() {
    deleteCookie('user');
    deleteCookie('token');
    await signOut({ redirect: true, callbackUrl: '/auth' });
    redirect('/auth');
  }

  return (
    <Button variant={'ghostSecondary'} title='Sair' onClick={logOut}>
      <FontAwesomeIcon icon={faPowerOff} className='h-full' />
    </Button>
  );
};

export default ButtonSingOut;


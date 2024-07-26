import Image from 'next/image';
import React from 'react';
import Logo from '../../../public/logo.png';
import ButtonSingOut from '../ui/ButtonLogout';
import UserNameText from './UserNameText';

const Header: React.FC = async () => {
  return (
    <header className='flex w-full px-6 py-3 items-center justify-between shadow-lg'>
      <Image src={Logo} alt='Logo da Emsoft' />
      <section className='flex px-1'>
        <UserNameText />
        <ButtonSingOut />
      </section>
    </header>
  );
};

export default Header;


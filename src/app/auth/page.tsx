import Image from 'next/image';
import Logo from '../../../public/logo.png';
import { AuthForm } from './_components/authForm';

export default function Page() {
  return (
    <main className='flex flex-col  min-h-screen items-center justify-center bg-emsoft_light-surface'>
      <section className='p-4 w-[400px] h-[500px] shadow-lg rounded-md bg-white'>
        <div className='flex flex-col items-center justify-center mt-5'>
          <Image src={Logo} alt='Logo da Emsoft' className='my-6' />
          <AuthForm />
        </div>
      </section>
    </main>
  );
}


import { InputCustom } from '@/components/InputCustom';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Logo from '../../public/logo.png';
export default function Home() {
  return (
    <main className='flex flex-col  min-h-screen items-center justify-center bg-light-surface'>
      <section className='p-4 w-[400px] h-[550px] shadow-lg rounded-md'>
        <div className='flex items-center justify-center mt-5'>
          <Image src={Logo} alt='Logo da Emsoft' />
          <InputCustom id={'name'} icon={faHouse} placeholder='House' required  />
        </div>
      </section>
    </main>
  );
}


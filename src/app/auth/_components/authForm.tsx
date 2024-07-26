'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  faLock,
  faRightToBracket,
  faSpinner,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signIn } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useFormStatus } from 'react-dom';

export function AuthForm() {
  const { pending } = useFormStatus();
  const [ErrorCode, setErrorCode] = useState<number>(0);
  const [ErrorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    if (ErrorCode === 200) {
      redirect('/app/dashboard');
    }

    if (ErrorCode === 401) {
      setErrorMessage('Usuário ou senha incorretos!');
    }

    if (ErrorCode === 500) {
      setErrorMessage('Erro interno do servidor');
    }
  }, [ErrorCode]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);

    const data = {
      vendedor: formData.get('vendedor'),
      password: formData.get('password'),
    };

    const login = await signIn('credentials', {
      ...data,
      callbackUrl: '/app/dashboard',
      redirect: false,
    });

    if (login) setErrorCode(login.status);
  }

  return (
    <form onSubmit={handleSubmit} method='POST' className='w-full mt-8'>
      <Input
        name='vendedor'
        placeholder='Insira o código do vendedor'
        labelText='Vendedor'
        labelPosition='top'
        required
        icon={faUser}
        className='mb-8'
      />

      <Input
        name='password'
        placeholder='digite sua senha'
        labelText='Password'
        labelPosition='top'
        type='password'
        required
        icon={faLock}
        className='mt-8'
      />

      <Button className='w-full mt-8' type='submit' disabled={pending}>
        <FontAwesomeIcon
          icon={pending ? faSpinner : faRightToBracket}
          spinPulse={pending}
          className='h-full mr-4'
        />
        Login
      </Button>
      <span className='text-red-700 w-full py-4 flex items-center justify-center'>
        {ErrorMessage}
      </span>
    </form>
  );
}


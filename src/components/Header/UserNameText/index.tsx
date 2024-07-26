import { fetchClient } from '@/lib/fetchClient';
import { cookies } from 'next/headers';
import React from 'react';

const UserNameText: React.FC = async () => {
  async function getUserInfo() {
    const userId = cookies().get('user')?.value;

    const response = await fetchClient(`/Colaboradores(${userId})`);
    if (response.status !== 200) return { error: response.statusText };
    return response.json();
  }

  const user = await getUserInfo();

  return (
    <div className='flex flex-1 items-center mr-4 justify-center'>
      <span>{user.NOME}</span>
    </div>
  );
};

export default UserNameText;


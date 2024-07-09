import React from 'react';

interface InputCustomRootProps {
  children: React.ReactNode;
  required?: boolean;
}

const InputCustomRoot: React.FC<InputCustomRootProps> = ({
  children,
  required,
}) => {
  return (
    <div className='flex flex-col h-9 bg-primary-light border border-solid border-dark-main'>
      {children}
    </div>
  );
};

export default InputCustomRoot;


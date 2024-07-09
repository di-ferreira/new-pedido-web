import React from 'react';

interface InputCustomMessageProps {
  message?: string;
}

const InputCustomMessage: React.FC<InputCustomMessageProps> = ({ message }) => {
  if (!message) return null;
  return <small className='form-text text-muted'>{message}</small>;
};

export default InputCustomMessage;


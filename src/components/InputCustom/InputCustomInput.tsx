import React from 'react';

interface InputCustomInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
}

const InputCustomInput: React.FC<InputCustomInputProps> = ({
  id,
  ...props
}) => {
  return <input id={id} {...props} />;
};

export default InputCustomInput;


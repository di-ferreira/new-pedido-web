import React from 'react';

interface InputCustomLabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

const InputCustomLabel: React.FC<InputCustomLabelProps> = ({
  htmlFor,
  children,
}) => {
  return <label htmlFor={htmlFor}>{children}</label>;
};

export default InputCustomLabel;


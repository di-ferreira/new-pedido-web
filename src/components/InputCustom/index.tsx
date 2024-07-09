
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import InputCustomIcon from './InputCustomIcon';
import InputCustomInput from './InputCustomInput';
import InputCustomLabel from './InputCustomLabel';
import InputCustomMessage from './InputCustomMessage';
import InputCustomRoot from './InputCustomRoot';

interface InputCustomProps {
  type?: React.HTMLInputTypeAttribute;
  required?: boolean;
  message?: string;
  id: string;
  label?: string;
  icon?: IconProp;
  iconSize?: SizeProp;
  placeholder?: string;
}

const InputCustom: React.FC<InputCustomProps> = ({
  type = 'text',
  required = false,
  message = '',
  placeholder = '',
  id,
  label,
  icon,
  iconSize,
  ...props
}) => {
  return (
    <InputCustomRoot required>
      {label && <InputCustomLabel htmlFor={id}>{label}</InputCustomLabel>}
      {icon && <InputCustomIcon Icon={icon} IconSize={iconSize} />}
      <InputCustomInput
        type={type}
        id={id}
        placeholder={placeholder}
        {...props}
      />
      {message && <InputCustomMessage message={message} />}
    </InputCustomRoot>
  );
};

export { InputCustom };
export type { InputCustomProps };


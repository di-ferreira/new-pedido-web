import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface InputCustomIconProps {
  Icon?: IconProp;
  IconSize?: SizeProp;
}

const InputCustomIcon: React.FC<InputCustomIconProps> = ({
Icon,IconSize
}) => {
  return Icon && <FontAwesomeIcon icon={Icon} size={IconSize}  />;
};

export default InputCustomIcon;


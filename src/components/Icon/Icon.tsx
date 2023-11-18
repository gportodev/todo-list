import React from 'react';

import * as IconExpo from '@expo/vector-icons';

import { type Props } from './types';

function Icon({ name, color, size, family, style }: Props): JSX.Element {
  const IconComponent = IconExpo[family] as unknown as React.FC<Props>;

  return (
    <IconComponent
      style={style}
      name={name}
      size={size}
      color={color}
      family={family}
    />
  );
}

export { Icon };

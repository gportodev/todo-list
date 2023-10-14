import React from 'react';
import { TouchableOpacity } from 'react-native';
import { type Props } from './types';
import { Icon } from '../Icon';

function Button({ iconProps, style }: Props): JSX.Element {
  const { name, color, size } = iconProps;

  return (
    <TouchableOpacity
      style={[
        style,
        {
          alignItems: 'center',
          justifyContent: 'center',
        },
      ]}
    >
      <Icon name={name} color={color} size={size} />
    </TouchableOpacity>
  );
}

export { Button };

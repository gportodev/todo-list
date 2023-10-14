import React from 'react';

import { Feather } from '@expo/vector-icons';
import { type Props } from './types';

function Icon({ name, color, size }: Props): JSX.Element {
  return <Feather name={name} size={size} color={color} />;
}

export { Icon };

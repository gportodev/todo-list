import React from 'react';
import { TouchableHighlight } from 'react-native';
import { type Props } from './types';
import { Icon } from '../Icon';
import Colors from '../../constants/Colors';

function Button({ iconProps, style, onPress }: Props): JSX.Element {
  const { name, color, size } = iconProps;

  return (
    <TouchableHighlight
      underlayColor={Colors.blue}
      style={[
        style,
        {
          alignItems: 'center',
          justifyContent: 'center',
        },
      ]}
      onPress={onPress}
    >
      <Icon name={name} color={color} size={size} />
    </TouchableHighlight>
  );
}

export { Button };

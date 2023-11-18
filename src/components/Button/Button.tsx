import React from 'react';
import { TouchableHighlight } from 'react-native';
import { type Props } from './types';
import { Icon } from '../Icon';

function Button({
  svgIcon,
  iconProps,
  style,
  onPress,
  ...rest
}: Props): JSX.Element {
  return (
    <>
      {svgIcon !== undefined ? (
        <TouchableHighlight
          {...rest}
          style={[
            style,
            {
              alignItems: 'center',
              justifyContent: 'center',
            },
          ]}
          onPress={onPress}
        >
          {svgIcon}
        </TouchableHighlight>
      ) : (
        <TouchableHighlight
          {...rest}
          style={[
            style,
            {
              alignItems: 'center',
              justifyContent: 'center',
            },
          ]}
          onPress={onPress}
        >
          <Icon
            family={iconProps?.family}
            name={iconProps?.name}
            color={iconProps?.color}
            size={iconProps?.size}
          />
        </TouchableHighlight>
      )}
    </>
  );
}

export { Button };

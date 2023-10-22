import React from 'react';
import { View } from 'react-native';
import { Logo } from '../Logo';
import styles from './styles';

function Header(): JSX.Element {
  return (
    <View style={styles.container}>
      <Logo />
    </View>
  );
}

export { Header };

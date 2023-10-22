import React from 'react';
import Rocket from '../../assets/images/rocket.svg';
import To from '../../assets/images/to.svg';
import Do from '../../assets/images/do.svg';
import { View } from 'react-native';
import { styles } from './styles';

function Logo(): JSX.Element {
  return (
    <View style={styles.container}>
      <Rocket
        style={{
          right: 11.18,
        }}
      />
      <To />
      <Do />
    </View>
  );
}

export { Logo };

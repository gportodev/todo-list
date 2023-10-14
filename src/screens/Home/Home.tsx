import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { Button } from '../../components/Button';
import { Fonts } from '../../constants/Fonts';
import Colors from '../../constants/Colors';
import { Input } from '../../components/Input';

function Home(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontFamily: Fonts.regular,
        }}
      >
        Open up App.tsx to start working on your app!
      </Text>
      <Button
        style={{
          backgroundColor: Colors.blueDark,
          width: 52,
          height: 52,
          borderRadius: 8,
        }}
        iconProps={{ name: 'plus-circle', color: 'white', size: 16 }}
      />
      <Button
        style={{
          backgroundColor: Colors.blue,
          width: 52,
          height: 52,
          borderRadius: 8,
        }}
        iconProps={{ name: 'plus-circle', color: 'white', size: 16 }}
      />
      <Button
        style={{
          backgroundColor: Colors.gray400,
          width: 32,
          height: 32,
          borderRadius: 4,
        }}
        iconProps={{ name: 'trash-2', color: Colors.danger, size: 14 }}
      />
      <Button
        style={{
          width: 32,
          height: 32,
          borderRadius: 4,
        }}
        iconProps={{ name: 'trash-2', color: Colors.gray300, size: 14 }}
      />
      <Input />
    </View>
  );
}

export { Home };

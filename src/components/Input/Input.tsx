import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';
import Colors from '../../constants/Colors';

function Input(): JSX.Element {
  return (
    <TextInput
      style={styles.container}
      keyboardType="default"
      placeholder="Adicione uma nova tarefa"
      placeholderTextColor={Colors.gray300}
      autoCapitalize="none"
      autoComplete="off"
    />
  );
}

export { Input };

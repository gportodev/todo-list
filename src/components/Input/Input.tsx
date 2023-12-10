import React from 'react';
import { TextInput, type TextInputProps } from 'react-native';
import styles from './styles';
import Colors from '../../constants/Colors';

function Input({ value, onChangeText }: TextInputProps): JSX.Element {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      style={styles.container}
      keyboardType="default"
      placeholder="Adicione uma nova tarefa"
      placeholderTextColor={Colors.gray300}
      autoCapitalize="none"
      autoComplete="off"
      maxLength={70}
    />
  );
}

export { Input };

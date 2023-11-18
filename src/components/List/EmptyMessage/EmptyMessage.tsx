import React from 'react';
import Note from '../../../assets/icons/svg/note.svg';

import { View, Text } from 'react-native';
import styles from './styles';
import { Fonts } from '../../../constants/Fonts';

function EmptyMessage(): JSX.Element {
  return (
    <View style={styles.container}>
      <Note />
      <Text
        style={[
          styles.text,
          {
            fontFamily: Fonts.bold,
          },
        ]}
      >
        Você ainda não tem tarefas cadastradas
        <Text style={styles.text}>
          {'\n'}Crie tarefas e organize seus itens a fazer
        </Text>
      </Text>
    </View>
  );
}

export { EmptyMessage };

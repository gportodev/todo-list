import React from 'react';
import { View, StatusBar } from 'react-native';
import styles from './styles';
import { Header } from '../../components/Header';
import { List } from '../../components/List';

function Home(): JSX.Element {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Header />

      <List />
    </View>
  );
}

export { Home };

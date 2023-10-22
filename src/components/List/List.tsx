import React from 'react';

import { FlatList, View, Text } from 'react-native';
import { styles } from './styles';
import Colors from '../../constants/Colors';
import { Button } from '../Button';
import { Input } from '../Input';

function List(): JSX.Element {
  const arr = [
    {
      description:
        'Integer urna interdum massa libero auctor neque turpis turpis semper.',
      finished: false,
    },
    {
      description:
        'Integer urna interdum massa libero auctor neque turpis turpis semper.',
      finished: false,
    },
    {
      description:
        'Integer urna interdum massa libero auctor neque turpis turpis semper.',
      finished: false,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.newTask}>
        <Input />
        <Button
          style={{
            backgroundColor: Colors.blueDark,
            width: 52,
            height: 52,
            borderRadius: 8,
          }}
          iconProps={{ name: 'plus-circle', color: 'white', size: 16 }}
          onPress={() => {
            console.log('batata');
          }}
        />
      </View>

      <FlatList
        data={arr}
        renderItem={({ item }) => (
          <View>
            <Text>{item.description}</Text>

            <Button
              style={{
                width: 32,
                height: 32,
                borderRadius: 4,
              }}
              iconProps={{ name: 'trash-2', color: Colors.gray300, size: 14 }}
            />
          </View>
        )}
      />

      {/* <Button
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
      /> */}
    </View>
  );
}

export { List };

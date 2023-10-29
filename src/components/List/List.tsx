import React, { useState } from 'react';

import { FlatList, View, Text } from 'react-native';
import { styles } from './styles';
import Colors from '../../constants/Colors';
import { Button } from '../Button';
import { Input } from '../Input';

function List(): JSX.Element {
  const [state, setState] = useState(0);

  const arr = [
    {
      id: 1,
      description:
        'Integer urna interdum massa libero auctor neque turpis turpis semper.',
      finished: false,
    },
    {
      id: 2,
      description:
        'Integer urna interdum massa libero auctor neque turpis turpis semper.',
      finished: false,
    },
    {
      id: 3,
      description:
        'Integer urna interdum massa libero auctor neque turpis turpis semper.',
      finished: false,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Input />
        <Button
          underlayColor={Colors.blue}
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
          <View style={styles.item}>
            <Button
              key={item.id}
              underlayColor={Colors.hoverColor.unchecked}
              onPress={() => {
                console.log('marcou ou desmarcou');
              }}
              style={{
                borderRadius: 9,
              }}
              iconProps={{ name: 'circle', color: Colors.blue, size: 17.45 }}
            />

            <Text style={styles.text}>{item.description}</Text>

            <Button
              id={item.id.toString()}
              underlayColor={Colors.hoverColor.delete}
              onShowUnderlay={() => {
                setState(item.id);
              }}
              onHideUnderlay={() => {
                setState(0);
              }}
              onPress={() => {
                console.log('deletou');
              }}
              style={{
                width: 32,
                height: 32,
                borderRadius: 4,
              }}
              iconProps={{
                name: 'trash-2',
                color: item.id === state ? Colors.danger : Colors.gray300,
                size: 14,
              }}
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

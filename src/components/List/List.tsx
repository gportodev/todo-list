import React, { useState } from 'react';

import { FlatList, View, Text } from 'react-native';
import { styles } from './styles';
import Colors from '../../constants/Colors';
import { Button } from '../Button';
import { Input } from '../Input';
import Unchecked from '../../assets/icons/svg/circle.svg';
import Checked from '../../assets/icons/svg/check.svg';
import CheckedHover from '../../assets/icons/svg/checkHover.svg';
import UncheckedHover from '../../assets/icons/svg/uncheckHover.svg';
import Trash from '../../assets/icons/svg/trash.svg';
import TrashHover from '../../assets/icons/svg/trashHover.svg';

import { type Item } from './types';
import { EmptyMessage } from './EmptyMessage';

function List(): JSX.Element {
  const [state, setState] = useState(0);
  const [itemUnderlay, setItemUnderlay] = useState(0);

  const [arr, setArr] = useState<Item[]>([
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
  ]);

  const checkTask = (id: number): void => {
    const newArr = arr.map(item => {
      if (item.id === id) {
        const newItem = {
          ...item,
          finished: !item.finished,
        };

        return newItem;
      }
      return item;
    });

    setArr(newArr);
  };

  const renderCheck = (item: Item): JSX.Element => {
    if (item.finished) {
      if (itemUnderlay === item.id) {
        return <CheckedHover width={21} height={21} />;
      }
      return <Checked width={21} height={21} />;
    } else {
      if (itemUnderlay === item.id) {
        return <UncheckedHover />;
      }

      return <Unchecked color={Colors.blue} />;
    }
  };

  const tasksCalculator = () => {
    const doneTasks = arr.filter(task => task.finished).length;

    return doneTasks;
  };

  const renderHeader = (): JSX.Element => (
    <View style={styles.flatHeader}>
      <View style={styles.wrap}>
        <Text
          style={[
            styles.flatHeaderText,
            {
              marginRight: 8,
            },
          ]}
        >
          Criadas
        </Text>

        <View style={styles.counterView}>
          <Text style={styles.counterText}>{arr.length}</Text>
        </View>
      </View>

      <View style={styles.wrap}>
        <Text
          style={[
            styles.flatHeaderText,
            {
              color: Colors.purple,
            },
          ]}
        >
          Concluídas
        </Text>

        <View
          style={[
            styles.counterView,
            {
              marginLeft: 8,
            },
          ]}
        >
          <Text style={styles.counterText}>{tasksCalculator()}</Text>
        </View>
      </View>
    </View>
  );

  const renderTrash = (item: Item): JSX.Element => {
    if (state === item.id) {
      return <TrashHover />;
    }
    return <Trash />;
  };

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
          iconProps={{
            family: 'Feather',
            name: 'plus-circle',
            color: 'white',
            size: 16,
          }}
          onPress={() => {
            console.log('batata');
          }}
        />
      </View>

      <FlatList
        data={arr}
        ListHeaderComponent={renderHeader}
        ListEmptyComponent={() => <EmptyMessage />}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Button
              key={item.id}
              underlayColor={'none'}
              style={{
                borderRadius: 9,
                width: 24,
                height: 24,
              }}
              onPressIn={() => {
                setItemUnderlay(item.id);
              }}
              onPressOut={() => {
                checkTask(item.id);

                setItemUnderlay(0);
              }}
              svgIcon={renderCheck(item)}
            />

            <Text
              style={[
                styles.text,
                {
                  color: item.finished ? Colors.gray300 : Colors.gray100,
                  textDecorationLine: item.finished ? 'line-through' : 'none',
                },
              ]}
            >
              {item.description}
            </Text>

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
              svgIcon={renderTrash(item)}
              iconProps={{
                family: 'Feather',
                name: 'trash-2',
                color: item.id === state ? Colors.danger : Colors.gray300,
                size: 14,
              }}
            />
          </View>
        )}
      />
    </View>
  );
}

export { List };

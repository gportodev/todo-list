import React, { useEffect, useState } from 'react';

import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { FlatList, View, Text, Alert } from 'react-native';
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
  const [state, setState] = useState<string | number[]>();
  const [itemUnderlay, setItemUnderlay] = useState<string | number[]>();
  const [input, setInput] = useState<string>('');

  const [arr, setArr] = useState<Item[]>([]);

  const checkTask = async (id: string | number[]): Promise<void> => {
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

    await saveList(newArr);
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

  const tasksCalculator = (): number => {
    const doneTasks = arr.filter(task => task.finished).length;

    return doneTasks;
  };

  const addTask = async (): Promise<void> => {
    const newItem: Item = {
      id: uuid.v4(),
      description: input,
      finished: false,
    };

    arr.push(newItem);

    try {
      await saveList(arr);
    } catch (error) {
      Alert.alert('Erro', 'Houve um erro ao salvar a lista!');
    }
  };

  const deleteTask = async (id: string | number[]): Promise<void> => {
    const newList = arr.filter(task => task.id !== id);

    try {
      await saveList(newList);
    } catch (error) {
      Alert.alert('Erro', 'Houve um erro ao salvar a lista!');
    }
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

  const saveList = async (list: Item[]): Promise<void> => {
    try {
      const jsonList = JSON.stringify(list);
      await AsyncStorage.setItem('list', jsonList);
    } catch (error) {
      Alert.alert('Erro', 'Houve um erro ao salvar a lista!');
    } finally {
      await getList();
    }
  };

  const getList = async (): Promise<void> => {
    try {
      const list = await AsyncStorage.getItem('list');

      if (list !== null) {
        const parsedList = JSON.parse(list);

        setArr(parsedList);
      }
    } catch (error) {
      Alert.alert('Erro', 'Houve um erro ao trazer a lista!');
    }
  };

  useEffect(() => {
    void getList();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Input value={input} onChangeText={setInput} />
        <Button
          disabled={input === ''}
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
          onPress={async () => {
            await addTask();
          }}
        />
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={arr}
        ListHeaderComponent={renderHeader}
        ListEmptyComponent={() => <EmptyMessage />}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Button
              underlayColor={'none'}
              style={{
                borderRadius: 9,
                width: 24,
                height: 24,
              }}
              onPressIn={() => {
                setItemUnderlay(item.id);
              }}
              onPressOut={async () => {
                await checkTask(item.id);

                setItemUnderlay('');
              }}
              svgIcon={renderCheck(item)}
            />

            <View
              style={{
                height: 40,
                width: '80%',
              }}
            >
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
            </View>

            <Button
              id={item.id.toString()}
              underlayColor={Colors.hoverColor.delete}
              onShowUnderlay={() => {
                setState(item.id);
              }}
              onHideUnderlay={() => {
                setState('');
              }}
              onPress={async () => {
                await deleteTask(item.id);
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

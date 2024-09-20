import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Row from './Row';

const TodoList = ({ data, selectedId, select, setTaskDone, setData }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      extraData={selectedId}
      renderItem={({ item }) => (
        <Row 
          item={item}
          selectedId={selectedId}
          select={select}
          setTaskDone={setTaskDone}
          data={data}
          setData={setData}
        />
      )}
      style={styles.list}
      contentContainerStyle={styles.listContent}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    width: '100%',
  },
  listContent: {
    paddingHorizontal: 16,
  },
});

export default TodoList;
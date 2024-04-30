import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const TasksToDo = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === '') return; // Prevent adding empty tasks
    setTasks([...tasks, { task, key: tasks.length.toString() }]);
    setTask('');
  };

  const removeTask = (key) => {
    setTasks(tasks.filter((t) => t.key !== key));
  };

  const colorScheme = useColorScheme();

  return (
    // <GestureHandlerRootView>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={task}
          onChangeText={setTask}
          placeholder="Add a task"
        />
        <TouchableOpacity style={styles.button} onPress={addTask}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
        <FlatList
          style={styles.list}
          data={tasks}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <Text>{item.task}</Text>
              <TouchableOpacity onPress={() => removeTask(item.key)}>
                <Text>X</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.key}
        />
        <Text>Current Color Scheme: {colorScheme}</Text>
      </View>
    // </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f1f8ff',
  },
  input: {
    height: 40,
    marginBottom: 10,
    marginTop: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: '#37455e',
    fontSize: 18,
    fontFamily: 'serif',
  },
  button: {
    backgroundColor: '#4d5b74',
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontFamily: 'serif',
    fontSize: 20,
  },
  list: {
    marginTop: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#4d5b74',
  },
});

export default TasksToDo;

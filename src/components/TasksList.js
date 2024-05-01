import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TasksList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const navigation = useNavigation();

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
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#4d5b74" />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        value={task}
        onChangeText={setTask}
        placeholder="Add a task for today..."
        placeholderTextColor="#aaa"
      />
      <TouchableOpacity style={styles.button} onPress={addTask}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      <FlatList
        style={styles.list}
        data={tasks}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.taskText}>{item.task}</Text>
            <TouchableOpacity onPress={() => removeTask(item.key)}>
              <Text style={styles.deleteButton}>X</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.key}
      />
      <Text style={styles.colorSchemeText}>Current Color Scheme: {colorScheme}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f8ff',
  },
  backButton: {
    position: 'relative',
    marginBottom:5,
    
  },
  input: {
    height: 40,
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    fontSize: 18,
    fontFamily: 'serif',
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#4d5b74',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    width: 40,
    height: 40,
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    fontFamily: 'serif',
    fontSize: 20,
    color: '#fff',
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
    borderRadius: 5,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  taskText: {
    fontSize: 16,
    fontFamily: 'serif',
    color: '#333',
  },
  deleteButton: {
    fontSize: 20,
    color: '#999',
  },
  colorSchemeText: {
    marginTop: 20,
    fontSize: 14,
    fontFamily: 'serif',
    color: '#666',
  },
});

export default TasksList;

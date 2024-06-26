import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, useColorScheme, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal'; 

const TasksList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false); 
  const navigation = useNavigation();

  const addTask = () => {
    if (task.trim() === '') {
      setModalVisible(true); 
      return; 
    }
    setTasks([...tasks, { task, key: tasks.length.toString() }]);
    setTask('');
  };

  const removeTask = (key) => {
    setTasks(tasks.filter((t) => t.key !== key));
  };

  const colorScheme = useColorScheme();

  return (
    <ImageBackground  source={require('../components/images/Task2.jpg')} style={styles.container} >
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>What are today's tasks?</Text>
        </View> 
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-forward" size={24} color="#4d5b74" />
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        value={task}
        onChangeText={setTask}
        placeholder="Add a task ..."
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
              <Ionicons name="trash-outline" size={20} color="#4682b4" />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.key}
      />

      <Modal isVisible={isModalVisible} style={styles.modal}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>You haven't added any tasks yet!</Text>
          <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalButton}>
            <Text style={styles.modalButtonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Text style={styles.colorSchemeText}>Current Color Scheme: {colorScheme}</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'transparent',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginRight: 50,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginLeft:20,
    color: '#4d5b74',
    fontWeight: 'bold',
    // fontFamily: 'Lobster-Regular',
    fontFamily: 'serif',
  },
  backButton: {
    marginLeft: 40,
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
  colorSchemeText: {
    marginTop: 20,
    fontSize: 14,
    fontFamily: 'serif',
    color: '#666',
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#f0f8ff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'serif',
    color: '#000',
  },
  modalButton: {
    backgroundColor: '#4d5b74',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default TasksList;

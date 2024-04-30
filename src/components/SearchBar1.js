import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Keyboard, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import SearchFilter from './SearchFilter';

const SearchBar = () => {
  const [input, setInput] = useState('');

  const programmingLanguages = [
    { name: 'Kotlin', id: '1' },
    { name: 'Java', id: '2' },
    { name: 'Swift', id: '3' },
    { name: 'JavaScript', id: '4' },
    { name: 'Ruby', id: '5' },
    { name: 'Python', id: '6' },
    { name: 'Dart', id: '7' },
    { name: 'Php', id: '8' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Feather name="search" size={20} color="black" style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder="Search"
          autoCorrect={false}
          clearButtonMode="always"
          value={input}
          onChangeText={setInput}
        />
        {input !== '' && (
          <TouchableOpacity onPress={() => { setInput(''); Keyboard.dismiss(); }} style={styles.cancelIcon}>
            <MaterialIcons name="cancel" size={24} color="black" />
          </TouchableOpacity>
        )}
      </View>
      <SearchFilter data={programmingLanguages} input={input} setInput={setInput} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d9dbda',
    borderRadius: 40,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  searchIcon: {
    marginLeft: 7,
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    flex: 1,
  },
  cancelIcon: {
    marginRight: 10,
  },
});

export default SearchBar;

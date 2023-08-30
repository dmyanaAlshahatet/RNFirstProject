// import React from "react";
import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Keyboard, Button, TouchableOpacity } from "react-native";
// import { Feather, Entypo } from 'react-native-vector-icons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import SearchFilter from "./SearchFilter";


const SearchBar = () => {

  const [input, setInput] = useState("");


  const programmingLanguages = [
    {
      name: 'Kotlin',
      id: "1"
    },
    {
      name: 'Java',
      id: "2"
    },
    {
      name: 'Swift',
      id: "3"
    },
    {
      name: 'JavaScript',
      id: "4"
    },
    {
      name: 'Ruby',
      id: "5"
    },
    {
      name: 'Python',
      id: "6"
    },
    {
      name: 'Dart',
      id: "7"
    },
    {
      name: 'Php',
      id: "8"
    },
  ]


  return (
    <View style={styles.container}>
      <View style={styles.searchBar__clicked} >
        <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 7 }}
        />
        <TextInput
          style={styles.input}
          placeholder="Search"
          autoCorrect={false}
          clearButtonMode='always' //for ios
          value={input}
          onChangeText={(text) => setInput(text)}
        />
        <View style={styles.cancelIcon}>
          <TouchableOpacity>
            <MaterialIcons
              name="cancel"
              size={24} color="black"
              // style={{}}
              onPress={() => {
                Keyboard.dismiss();
                setInput("")
              }} />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <SearchFilter data={programmingLanguages} input={input} setInput={setInput} />
      </View>
    </View>
  );
};
export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    justifyContent: "flex-start",
    // alignItems: "center",
    // flexDirection: "row",
    // borderWidth: 1,
    // width: "90%",
  },
  searchBar__unclicked: {
    // borderWidth: 1,
    // padding: 10,
    flexDirection: "row",
    width: "95%",
    height: 45,
    backgroundColor: "#d9dbda",
    borderRadius: 40,
    alignItems: "center",
  },
  searchBar__clicked: {
    // borderWidth: 1,
    // padding: 3,
    flexDirection: "row",
    width: "95%",
    height: 45,
    backgroundColor: "#d9dbda",
    borderRadius: 40,
    alignItems: "center",
    // justifyContent: "space-evenly",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
  cancelIcon: {
    // borderWidth:1,
    marginRight: 40,
  },
});
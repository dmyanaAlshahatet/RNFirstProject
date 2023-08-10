import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

const SearchFilter = ({ data, input, setInput }) => {
  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={({ item }) => {
        if (input === "") {
          return (
            <View style={styles.programmingLanguages}>
              <Text style={styles.names}>{item.name}</Text>
              <Text style={styles.line} />
            </View>
          )
        }

        if (item.name.toLowerCase().includes(input.toLowerCase())) {
          return (
            <View style={styles.programmingLanguages}>
              <Text style={styles.names}>{item.name}</Text>
              <Text style={styles.line} />
            </View>
          )
        }
      }} />
    </View>
  )
}

export default SearchFilter

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    fontSize: 30,
    padding: 10,
    // borderWidth:1,
  },
  programmingLanguages: {
    marginVertical: 10,
  },
  names: {
    fontSize: 20,
    fontStyle: 'italic',
    fontFamily: 'serif',
    color: 'black',
    // fontWeight: 'bold',
  },
  line: {
    borderColor: "#d3d3d3",
    borderWidth: 1,
    height: 1,
    marginTop: 5,
  },
})
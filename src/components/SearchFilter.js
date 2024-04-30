import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

const SearchFilter = ({ data, input, setInput }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          if (input === "" || item.name.toLowerCase().includes(input.toLowerCase())) {
            return (
              <View style={styles.programmingLanguages}>
                <Text style={styles.names}>{item.name}</Text>
                <View style={styles.line} />
              </View>
            )
          }
          return null; // Render nothing if the condition doesn't match
        }}
        keyExtractor={(item) => item.id.toString()} // Add a key extractor for each item
      />
    </View>
  )
}

export default SearchFilter

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 10,
  },
  programmingLanguages: {
    marginVertical: 10,
  },
  names: {
    fontSize: 20,
    fontStyle: 'italic',
    fontFamily: 'serif',
    color: 'black',
  },
  line: {
    borderColor: "#d3d3d3",
    borderWidth: 1,
    height: 1,
    marginTop: 5,
  },
})

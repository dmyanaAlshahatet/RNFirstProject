
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'

const State = () => {

  const [x, setX] = useState(0)
  const [txt, setTxt] = useState("")

  useEffect(()=>{
    console.log("did load");
    

    return ()=> {
      console.log("component will unmount"); 
    }
  } , [])

  useEffect(() => {
      console.log("text changed, the new text is: " , txt);
  } , [txt])

  return (
    <View>
      <Text style={styles.text}>{txt}</Text>
      <TextInput 
      style={styles.text}
      value={txt} 
      onChangeText={(val)=> setTxt(val)}
      placeholder='text'
       />

      <Button title="press" onPress={()=> setTxt("")}/>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 50
  }
})

export default State;
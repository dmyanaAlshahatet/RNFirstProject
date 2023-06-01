
import react, { useEffect, useState } from "react"; //always do import//
import { ImageBackground, StyleSheet, Text, View, Image, ScrollView, TextInput, Button, }  from "react-native";
import React, { Component } from 'react'
import Card from "./src/components/Card";
import State from "./src/components/State";
import Counter from "./src/components/Counter";

const App = () => { //function component//

  const data = [
    {
      name: 'brahem',
      bd: '19.3', 
      bgc:'red'
    },
    {
      name: 'saleh',
      bd: '23.6',
      bgc:'black'
    },
    {
      name: 'huda',
      bd: '21.10',
      bgc:'pink'
    },
    {
      name: 'noor',
      bd: '28.8',
      bgc:'purple'
    } , 
    {
      name:'zeen' , 
      bd:'24.8' , 
      bgc:'blue',
    }, 
    {
      name:'rabea' , 
      bd:'6.7'
    }
  ]

  const renderCards = ()=> {
    return data.map(cardData => {
      return <Card name={cardData.name} bd={cardData.bd} bgc={cardData.bgc} />
      
    })
  }



  return (
    <View style={styles.container} >
      <ScrollView showsVerticalScrollIndicator={false}>
          {/* {renderCards()} */}
          {/* <State/> */}
          <Counter/>
          <Counter/>
      </ScrollView>

    </View>
  );
  }
  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // justifyContent: 'center',
    // alignItems: 'center' , 
    paddingTop: 50
  },

})
export default App;
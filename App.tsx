import React from 'react';
import { StyleSheet, SafeAreaView, Text } from "react-native";

const App = () => {
  return(
    <SafeAreaView style= {styles.container}>
      <Text style={styles.text}>Hello React Native!</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff000',
  },
  text:{
    fontSize: 18,
    fontWeight:'600'
  }

});

export default App;
import { View, Text ,StyleSheet,SafeAreaView} from 'react-native'
import React from 'react'
import tw from 'twrnc';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Text style={[tw `text-red-500 p-10`,{
        color:"yellow"
      }]}>I'm the HomeScreen</Text>
    </SafeAreaView>
  )
}

export default HomeScreen;
const styles = StyleSheet.create({
  text:{
 color:"blue",
  },
});
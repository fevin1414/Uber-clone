import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from "tailwind-react-native-classnames";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon } from "react-native-elements";
import { useNavigation } from '@react-navigation/native';

const RideOptionsCar = () => {
  const navigation=useNavigation();
  return (
    <SafeAreaView style={tw `bg-white flex-grow`}>
      <View>
        <TouchableOpacity onPress={()=>navigation.navigate("NavigateCard")} style={tw `absolute top-3 left-5 p-3 rounded-full z-50`}>
          <Icon
          name="chevron-left" type="fontawesome"/>
        </TouchableOpacity>
      <Text style={tw `text-center py-5 text-xl`}>Select A Ride</Text>
      </View>
    </SafeAreaView>
  )
}

export default RideOptionsCar

const styles = StyleSheet.create({})
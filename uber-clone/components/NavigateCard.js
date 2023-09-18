import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from "tailwind-react-native-classnames";

import { SafeAreaView } from 'react-native-safe-area-context'

const NavigateCard = () => {
  return (
    <SafeAreaView style={tw `bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Navigate Card</Text>
    </SafeAreaView>
  )
}

export default NavigateCard

const styles = StyleSheet.create({})
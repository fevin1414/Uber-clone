import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from "tailwind-react-native-classnames";
import { GOOGLE_MAPS_APIKEY } from "@env";

import { SafeAreaView } from 'react-native-safe-area-context'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import NavFavourites from './NavFavourites';

const NavigateCard = () => {
  const navigation=useNavigation();
  const dispatch=useDispatch();
  return (
    <SafeAreaView style={tw `bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Hello</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
 <GooglePlacesAutocomplete
 placeholder="where to ?"
 styles={toInputBoxStyles}
 fetchDetails={true}
 returnKeyType={"search"}
 enablePoweredByContainer={false}
 minLength={2}
 onPress={(data,details=null)=>{
dispatch(setDestination({
  location:details.geometry.location,
  description:data.description,
}));
navigation.navigate('RideOptionsCar');

 }}
 query={{
  key:GOOGLE_MAPS_APIKEY,
  language:"en",
}}
 nearbyPlacesAPI='GooglePlacesSearch'
 debounce={400}
 />
        </View>
        <NavFavourites />
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
  container:{
    backgroundColor:"white",
    paddingTop:20,
    flex:0
  },
  textInput:{
    backgroundColor:"#DDDDDF",
    borderRadius:0,
    fontSize:18,
  },
  textInputContainer:{
    paddingHorizontal:20,
    paddingBottom:0,
  },
});
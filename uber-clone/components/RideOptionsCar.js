import { FlatList, StyleSheet, Text, TouchableOpacity, View , Image,} from 'react-native'
import React, { useState } from 'react'
import tw from "tailwind-react-native-classnames";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon } from "react-native-elements";
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../slices/navSlice';
import navSlice from '../slices/navSlice';

const data=[
  {
    id:"uber-X-123",
    title:"UberX",
    multiplier:1,
    image:"https://links.papareact.com/3pn"
  },
  {
    id:"uber-XL-456",
    title:"Uber XL",
    multiplier:1.2,
    // image:"https://links.papareact.com/5wn"
    image:"https://links.papareact.com/3pn"

  },
  {
    id:"uber-LUX-789",
    title:"Uber LUX",
    multiplier:1.75,
    // image:"https://links.papareact.com/7pfn"
    image:"https://links.papareact.com/3pn"

  },
]
const RideOptionsCar = () => {
  const navigation=useNavigation();
  const [selected,setSelected]=useState(null);
  const setTravelTimeInformation=useSelector(selectTravelTimeInformation);
  return (
    <SafeAreaView style={tw `bg-white flex-grow`}>
      <View>
        <TouchableOpacity onPress={()=>navigation.navigate("NavigateCard")} style={tw `absolute top-3 left-5 p-3 rounded-full z-50`}>
          <Icon
          name="chevron-left" type="fontawesome"/>
        </TouchableOpacity>
      <Text style={tw `text-center py-5 text-xl`}>Select A Ride-{
        setTravelTimeInformation?.distance.text
      }</Text>
      </View>
      <FlatList data={data} keyExtractor={(item)=>item.id}
      renderItem={({item:{id,title,multiplier,image},item})=>(
<TouchableOpacity
  onPress={() => setSelected(item)}
  style={tw`flex-row justify-between items-center px-10 ${id === selected?.id ? "bg-gray-200" : ""}`}
>
  <Image
    style={{
      width: 100,
      height: 100,
      resizeMode: "contain"
    }}
    source={{ uri: image }}
  />
  <View style={tw`-ml-6`}>
    <Text style={tw`text-xl font-semibold`}>{title}</Text>
    <Text>Travel Time ..</Text>
  </View>
  <Text style={tw`text-xl`}>$100</Text>
</TouchableOpacity>

      )}
      />
      <View>

  <TouchableOpacity disabled={!selected} style={tw `bg-black ${!selected && "bg-gray-300"}`}>
    {selected ? (
      <Text style={tw `text-center text-white text-xl`}>Choose {selected.title}</Text>
    ) : (
      <Text style={tw `text-center text-white text-xl`}>Choose a ride</Text>
    )}
  </TouchableOpacity>

      </View>
    </SafeAreaView>
  )
}

export default RideOptionsCar

const styles = StyleSheet.create({})
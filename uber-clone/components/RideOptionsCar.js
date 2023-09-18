import { FlatList, StyleSheet, Text, TouchableOpacity, View , Image,} from 'react-native'
import React from 'react'
import tw from "tailwind-react-native-classnames";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon } from "react-native-elements";
import { useNavigation } from '@react-navigation/native';

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
  return (
    <SafeAreaView style={tw `bg-white flex-grow`}>
      <View>
        <TouchableOpacity onPress={()=>navigation.navigate("NavigateCard")} style={tw `absolute top-3 left-5 p-3 rounded-full z-50`}>
          <Icon
          name="chevron-left" type="fontawesome"/>
        </TouchableOpacity>
      <Text style={tw `text-center py-5 text-xl`}>Select A Ride</Text>
      </View>
      <FlatList data={data} keyExtractor={(item)=>item.id}
      renderItem={({item:{id,title,multiplier,image},item})=>(
<TouchableOpacity>
<Image
style={{
  width:100,
  height:100,
  resizeMode:"contain"
}}
source={{uri:image}}
/>
<View>
  <Text>{title}</Text>
  <Text>Travel Time ..</Text>

</View>
</TouchableOpacity>
      )}
      />
    </SafeAreaView>
  )
}

export default RideOptionsCar

const styles = StyleSheet.create({})
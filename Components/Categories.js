import React from 'react'
import { Text, StyleSheet, View, Image, ScrollView } from 'react-native'
const items =[
    {
    Image :require("../assets/images/shopping-bag.png"),
    text:"Pick-up",
},
{
    Image :require("../assets/images/bread.png"),
    text:"Bakery Items",
},
{
    Image :require("../assets/images/fast-food.png"),
    text:"Fast Food",
},
{
    Image :require("../assets/images/deals.png"),
    text:"Deals",
},
{
    Image :require("../assets/images/coffee.png"),
    text:"Coffe & Tea",
},
]

export default function Categories() {
  
    return (
        <View style={{
            marginTop:5,
            backgroundColor:"greenyellow",
            paddingVertical:10,
            paddingLeft:20,
        }}
        >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={{alignItems:"center",marginRight:30}}>
        <Image source={items[0].Image}style={{
            width:50,
            height:40,
            resizeMode:"contain",
        }}/>
        <Text style={{ fontSize:13,fontWeight:"900"}}>{items[1].text}</Text>
      </View>
      <View style={{alignItems:"center",marginRight:30}}>
        <Image source={items[1].Image}style={{
            width:50,
            height:40,
            resizeMode:"contain",
        }}/>
        <Text style={{ fontSize:13,fontWeight:"900"}}>{items[2].text}</Text>
      </View>
      <View style={{alignItems:"center",marginRight:30}}>
        <Image source={items[2].Image}style={{
            width:50,
            height:40,
            resizeMode:"contain",
        }}/>
        <Text style={{ fontSize:13,fontWeight:"900"}}>{items[3].text}</Text>
      </View>
      <View style={{alignItems:"center",marginRight:30}}>
        <Image source={items[3].Image}style={{
            width:50,
            height:40,
            resizeMode:"contain",
        }}/>
        <Text style={{ fontSize:13,fontWeight:"900"}}>{items[3].text}</Text>
      </View>
      <View style={{alignItems:"center",marginRight:30}}>
        <Image source={items[4].Image}style={{
            width:50,
            height:40,
            resizeMode:"contain",
        }}/>
        <Text style={{ fontSize:13,fontWeight:"900"}}>{items[4].text}</Text>
      </View>
      </ScrollView>
      </View>

    )
  }

import React from 'react'
import { Text, StyleSheet, View, Image, ScrollView } from 'react-native'
const items =[
    {
    Image :require("../assets/images/shopping-bag.png"),
    text:"Pick-up",
},
{
    Image :require("../assets/images/soft-drink.png"),
    text:"Soft Drinks",
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
            backgroundColor:"yellowgreen",
            paddingVertical:10,
            paddingLeft:20,
        }}
        >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {items.map((item,index) => (
      <View key={index} style={{alignItems:"center",marginRight:30,
    }}>
        <Image source={item.Image}style={{
            width:50,
            height:40,
            resizeMode:"contain",
        }}/>
        <Text style={{ fontSize:13,fontWeight:"900"}}>{item.text}</Text>
      </View>
      ))}
      </ScrollView>
      </View>

    )
  }

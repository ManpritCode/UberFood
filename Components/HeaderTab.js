import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export default function HeaderTab() {
  
    return (
      <View style = {{
        flexDirection:"row",
        alignSelf:"center"
      }}>
      <HeaderButton text = "Delivery" />
      <HeaderButton text = "Pickup"/>
      </View>
    )
  }
  const HeaderButton = (props) => (
  <View>
    <TouchableOpacity style = {{
      backgroundColor:"black",
    }}>
  <Text style = {{
    color:"white",
  }}>{props.text}</Text>
  </TouchableOpacity>
  </View>
  );

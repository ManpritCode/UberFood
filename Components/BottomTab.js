import React from 'react'
import { Text, StyleSheet, View  ,Icon} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function BottomTabs() {
  
    return (
       <View style={{
        height:70,
        width:395,
      
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        alignSelf:"center",
        backgroundColor:"orange",
        flex:0,
       }} 
       >
        <View style={{
            flexDirection:"column",

        }}>
       <Ionicons name="home" size={30} color="black" />
      <Text style={{ fontWeight:"500"}}>home</Text>
      </View>
      <View style={{
            flexDirection:"column"
        }}>
       <Ionicons name="search" size={32} color="black" />
      <Text style={{ fontWeight:"500"}}>Search</Text>
      </View>
      <View style={{
            flexDirection:"column"
        }}>
       <FontAwesome5 name="shopping-bag" size={32} color="black" />
      <Text style={{position:"relative",
      left:-10, 
      fontWeight:"500"
      
    }}>Grocery</Text>
      </View>
      <View style={{
            flexDirection:"column",
            
        }}>
      <FontAwesome5 name="receipt" size={32} color="black" />
      <Text
       style={{position:"relative",
       left:-10,
       fontWeight:"500",
    }}>Orders</Text>
      </View>
      <View style={{
            flexDirection:"column"
        }}>
         <FontAwesome5 name="user-alt" size={32} color="black" />
      <Text
       style={{position:"relative",
       left:-10,
       fontWeight:"500",
    }}
      >Account</Text>
      </View>
       </View>

    )
  }

     
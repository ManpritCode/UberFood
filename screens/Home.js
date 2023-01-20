import React  from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import HeaderTab from '../Components/HeaderTab'

export default function Home() {
  
    return (
      <SafeAreaView style= {{
        marginTop:45,
        backgroundColor:"grey",
        flex:1,
        }}>
     <View style={{
      backgroundColor:"blue",
      padding:15,
     }}>
     < HeaderTab/>
     </View>
     </SafeAreaView>
    )
  }




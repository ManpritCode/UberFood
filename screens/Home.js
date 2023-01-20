import React  from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import Categories from '../Components/Categories'
import HeaderTab from '../Components/HeaderTab'
import SearchBar from '../Components/SearchBar'

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
     <SearchBar/>
    
     </View>
     <Categories />
     </SafeAreaView>
    )
  }




import React  from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import Categories from '../Components/Categories'
import HeaderTab from '../Components/HeaderTab'
import RestaurantItem from '../Components/RestaurantItem'
import SearchBar from '../Components/SearchBar'

const YELP_API_KEY = ""

export default function Home() {
  
    return (
      <SafeAreaView style= {{
        marginTop:49,
        backgroundColor:"grey",
        flex:1,
        }}>
     <View style={{
      backgroundColor:"green",
      padding:15,
     }}>
     <HeaderTab/>
     <SearchBar/>
     </View>
     <ScrollView showsVerticalScrollIndicator={false}>
     <Categories />
     <RestaurantItem />
     
     </ScrollView>
     </SafeAreaView>
    );
  }




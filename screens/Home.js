import React  from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import BottomTab from '../Components/BottomTab'
import Categories from '../Components/Categories'
import HeaderTab from '../Components/HeaderTab'
import RestaurantItem from '../Components/RestaurantItem'
import SearchBar from '../Components/SearchBar'

const YELP_API_KEY = ""

export default function Home({navigation}) {
  
    return (
      <SafeAreaView style= {{
        marginTop:49,
        backgroundColor:"white",
        flex:1,
        }}>
     <View style={{
      backgroundColor:"green",
      padding:15,
     }}>
     <HeaderTab/>
     <SearchBar/>
    
     </View>
     <Categories />
     <ScrollView showsVerticalScrollIndicator={false}>
     
     <RestaurantItem 
     
     navigation = {navigation}
     
     />
     
     </ScrollView>
     <BottomTab />
     </SafeAreaView>
    );
  }




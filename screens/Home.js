import React  from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import Categories from '../Components/Categories'
import HeaderTab from '../Components/HeaderTab'
import RestaurantItem from '../Components/RestaurantItem'
import SearchBar from '../Components/SearchBar'

const YELP_API_KEY = "bdRJutLhFAQJ36t7b89CWjHFBU$OKzjt9wvZzcY-nkgmvTqlNMjZWV1eG7iBQ9R74SyfxRg9LWnBAkZY06BtAZAe4dfX-2vuX8a1l5V7foctHfX9UKEoM5ts#YXYx"
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




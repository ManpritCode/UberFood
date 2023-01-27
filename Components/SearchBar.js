import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
export default function SearchBar() {
  return (
   <View style={{
    marginTop:15,
    flexDirection:"row",
   }}>
    <GooglePlacesAutocomplete 
    query={{key:"AIzaSyB5G3hBsC-Jli_FZTGZzYcFsKnIAsukq7Q"}}
    placeholder='Search'
    styles={{
      textInput:{
        backgroundColor:"#eee",
        borderRadius:20,
        fontWeight:"700",
        marginTop:7,
      },
      textInputContainer:{
        backgroundColor:"#eee",
        borderRadius:50,
        flexDirection:"row",
        alignItems:"center",
        marginRight:10,
      }

    }}
    renderLeftButton={()=>(
       <View style={{
        marginLeft:10
       }}>
        <Entypo name="location-pin" size={24} color="black" />
       </View>
    )}
    renderRightButton={()=>(
      <View style={{
         flexDirection:"row",
         marginRight:8,
         backgroundColor:"white",
         padding:9,
         borderRadius:30,
         alignItems:"center",
      }}>
        <AntDesign name="clockcircle" size={11} color="black"  style={{marginRight:6}}/>
      <Text>Search</Text>
      </View>
    )}
    />
   </View>
  );
}

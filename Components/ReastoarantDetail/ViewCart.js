import React from "react";
import { TouchableOpacity } from "react-native";
import { View,Text } from "react-native";

export default function ViewCart(){
    return(
        <View style= {{
            flex:1,
            alignItems:"center",
            position:"absolute",
            bottom:370,
            left:22,
       
         
        }}>
        <View style = {{
            flexDirection:"row",
            justifyContent:"center",
            width:"100%",
                    }}>
            <TouchableOpacity style={{
                marginTop:0,
                backgroundColor:'black',
                alignItems:"center",
                padding:13,
                borderRadius:30,
                width:303,
                position:"relative",
                justifyContent:"center"

            }}>
            <Text style={{color:'white',fontSize:20,alignSelf:"center"}}>ViewCart</Text>
            </TouchableOpacity>
        </View>
        </View>
    )
}
import React from "react";
import{View,Text} from "react-native";
import { Divider } from "react-native-elements";
import About from "../Components/ReastoarantDetail/About";
import MenuItems from "../Components/ReastoarantDetail/MenuItems";
import MeniItem from "../Components/ReastoarantDetail/MenuItems";

export default function ReastaurantDetail(){
    return(
        <View>
            <About />
            <Divider width={1.8} style={{marginVertical:20}}/>
            <MenuItems / >
        </View>
    )
}
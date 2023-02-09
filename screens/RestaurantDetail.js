import React from "react";
import{View,Text} from "react-native";
import { Divider } from "react-native-elements";
import About from "../Components/ReastoarantDetail/About";
import MenuItems from "../Components/ReastoarantDetail/MenuItems";
import ViewCart from "../Components/ReastoarantDetail/ViewCart";
 

export default function ReastaurantDetail({route, navigation }) {
    return(
        <View>
            <About route={route} />
            <Divider width={1.8} style={{marginVertical:20}}/>
            <MenuItems />
            <ViewCart />
        </View>
    )
}    
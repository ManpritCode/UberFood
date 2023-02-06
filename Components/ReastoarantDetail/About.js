import React from "react";
import { View,Text,Image } from "react-native";

const image = 'https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg';

const title = "Farmhouse Kitchen Thai Cuisine";

const description = "Thai - Comfot Food - $$ - 4.5 - (2913+)";

export default function About(){
    return(
        <View>
          <RestuarantImage image ={image}/>
          <RestaurantTitle title ={title}/>
          <ReastourantDescription description = {description}/>
        </View>
    )}

    const RestuarantImage = (props) =>(

        <Image source={{uri: props.image}} 
        style={{
            width:'100%',
            height:180
        }}
        />  
    )
    const RestaurantTitle = (props) =>(
        <Text style={{
            fontSize:29,
            fontWeight:'600',
            marginTop:10,
            marginHorizontal:15,
        }}>{props.title}</Text>
    )
    const ReastourantDescription = (props) =>(
        <Text style={{
            marginTop:10,
            marginHorizontal:15,
            fontWeight:"400",
            fontSize:15.5,
        }}
        >{props.description}</Text>
    )
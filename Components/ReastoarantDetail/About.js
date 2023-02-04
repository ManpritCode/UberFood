import React from "react";
import { View,Text,Image } from "react-native";

const image = 'https://scontent.fluh3-2.fna.fbcdn.net/v/t39.30808-6/298337128_482873247179425_7838678150392656475_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=e3f864&_nc_ohc=dPlwZFy6myEAX8WRez_&_nc_ht=scontent.fluh3-2.fna&oh=00_AfDLk5xNzrqpxnCw2mP0Mf0GNXqwYjhu0J686HpzH2U0hg&oe=63E2F2EB';

const title = "Farmhouse Kitchen Thai Cuisine";

const description = "Thai - Comfot Food - $$ - 4.5 - (2913+)";

export default function About(){
    return(
        <View>
          <RestuarantImage Image ={image}/>
        </View>
    )}

    const RestuarantImage = (props) =>(

        <Image source={{uri:props.image}} 
        style={{
            width:'100%',
            height:180,
        }}
        />
        
    )

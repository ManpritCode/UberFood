import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { View,Text,Image } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Divider } from "react-native-elements";

const foods = [
  {  title : "Lasagna",
    description: "With butter lettuce , tomato and sauce bechamel",
    price: "$13.50",
    Image:"https://w7.pngwing.com/pngs/319/731/png-transparent-cafe-food-barbecue-grill-chicken-dish-grilled-food-animals-seafood-recipe-thumbnail.png"},

    {  title : "Lasagna",
    description: "With butter lettuce , tomato and sauce bechamel",
    price: "$13.50",
    Image:"https://w7.pngwing.com/pngs/319/731/png-transparent-cafe-food-barbecue-grill-chicken-dish-grilled-food-animals-seafood-recipe-thumbnail.png"},

    {  title : "Lasagna",
    description: "With butter lettuce , tomato and sauce bechamel",
    price: "$13.50",
    Image:"https://w7.pngwing.com/pngs/319/731/png-transparent-cafe-food-barbecue-grill-chicken-dish-grilled-food-animals-seafood-recipe-thumbnail.png"},

    {  title : "Lasagna",
    description: "With butter lettuce , tomato and sauce bechamel",
    price: "$13.50",
    Image:"https://w7.pngwing.com/pngs/319/731/png-transparent-cafe-food-barbecue-grill-chicken-dish-grilled-food-animals-seafood-recipe-thumbnail.png"},

    {  title : "Lasagna",
    description: "With butter lettuce , tomato and sauce bechamel",
    price: "$13.50",
    Image:"https://w7.pngwing.com/pngs/319/731/png-transparent-cafe-food-barbecue-grill-chicken-dish-grilled-food-animals-seafood-recipe-thumbnail.png"},

    {  title : "Lasagna",
    description: "With butter lettuce , tomato and sauce bechamel",
    price: "$13.50",
    Image:"https://w7.pngwing.com/pngs/319/731/png-transparent-cafe-food-barbecue-grill-chicken-dish-grilled-food-animals-seafood-recipe-thumbnail.png"},

    {  title : "Lasagna",
    description: "With butter lettuce , tomato and sauce bechamel",
    price: "$13.50",
    Image:"https://w7.pngwing.com/pngs/319/731/png-transparent-cafe-food-barbecue-grill-chicken-dish-grilled-food-animals-seafood-recipe-thumbnail.png"},

    {  title : "Lasagna",
    description: "With butter lettuce , tomato and sauce bechamel",
    price: "$13.50",
    Image:"https://w7.pngwing.com/pngs/319/731/png-transparent-cafe-food-barbecue-grill-chicken-dish-grilled-food-animals-seafood-recipe-thumbnail.png"},

    {  title : "Lasagna",
    description: "With butter lettuce , tomato and sauce bechamel",
    price: "$13.50",
    Image:"https://w7.pngwing.com/pngs/319/731/png-transparent-cafe-food-barbecue-grill-chicken-dish-grilled-food-animals-seafood-recipe-thumbnail.png"},

];
 const styles = StyleSheet.create({
    MeniItemStyle : {
        flexDirection:"row",
        justifyContent:"space-between",
        margin:20,
    },
    titleStyle:{
        fontSize:19,
        fontWeight:"600",
    }
 })

 export default function MenuItems() {
    return(
        < ScrollView>
        {foods.map((food,index) => (
        <View>
        <View key={index}
        style={styles.MeniItemStyle}>
            <BouncyCheckbox
            iconStyle={{borderColor:"orange",borderRadius:0,}} 
            fillColor="green"/>
           <FoodInfo food={food} /> 
           <FoodImage food = {food} />
        </View>
        <Divider width={0.5} orientation='vertical'  />
        </View>
       
        ))}
        </ScrollView>
    )
     }


 const FoodInfo = (props) =>(
    <View style = {{
        width:240,
        justifyContent:"space-evenly",
    }}>
        <Text style = {styles.titleStyle}> {props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
            </View>
 )
  const FoodImage = (props) =>(
    <View>
        <Image source={{uri:props.food.Image}} style={{width:100,height:100,borderRadius:8}} />
    </View>
  )

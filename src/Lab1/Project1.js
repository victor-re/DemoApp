import {  } from "react";
import { StyleSheet, Text, View } from "react-native";
import {  } from "react-native";

export default function Project1(){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello World</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        width:100,
        height:100,
        backgroundColor:'aqua',
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        color:'#fff'
    }
})

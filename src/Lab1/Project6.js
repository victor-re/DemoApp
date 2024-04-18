import React from "react";
import {View,StyleSheet,Text,ScrollView} from "react-native"

const styles=StyleSheet.create({
    container:{
        backgroundColor:'#fff'
    },
    box:{
        width:100,
        height:100,
        justifyContent:'center',
        alignItems:'center',
        margin:20
    }
})

const Square=({text,bgColor='#7ce0f9'})=>{
    return(
        <View style={[styles.box,{backgroundColor:bgColor}]}>
            <Text>{text}</Text>
        </View>
    )
}
const data=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

export default ()=>{
    return(
        <ScrollView style={styles.container}>
            {
                data.map((item,index)=>{
                    return(

                        <Square key={item} text={`Square ${index+1}`}></Square>
                    )
                })
            }
        </ScrollView>
    )
}
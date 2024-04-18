import React from "react";
import { View,Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    box:{
        width:100,
        height:100,
        justifyContent:'center',
        alignItems: 'center',
    }
});

const Squase = ({text,bgColor="#7ce0f9"}) =>{
    return (
        <View style={[styles.box,{backgroundColor: bgColor}]}>
            <Text>{text}</Text>
        </View>
    );
}
const Project5 =()=>{
    return(
        <View style={styles.container}>
            <Squase text="Squase 1"/>
            <Squase text="Squase 2" bgColor="#4dc2c2"/>
            <Squase text="Squase 3" bgColor="#ff673c"/>
        </View>
    );
}

export default Project5;
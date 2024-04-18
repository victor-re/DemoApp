import { useState } from "react";
import { StyleSheet, View } from "react-native";
import {useTheme,PaperProvider,MD3LightTheme,MD3DarkTheme,Switch,Text  } from "react-native-paper";
import {useMaterial3Theme } from "@pchmn/expo-material3-theme"
const DemoTheme=()=>{
    const [isDarkMode,setIsDarkMode]=useState(false);
    const {theme}=useMaterial3Theme();
    const onToggleSwitch=()=>{setIsDarkMode(!isDarkMode)}
    const papertheme= 
    isDarkMode ?{...MD3DarkTheme,colors:theme.dark} : {...MD3LightTheme,colors:theme.light} 

    return(
        <View style={{...styles.container,backgroundColor:papertheme.colors.background}}>
            <View style={{...styles.box,flexDirection:'row',justifyContent:'space-between'}}>
                <Text variant="displaySmall" style={{color:papertheme.colors.onBackground}}>
                    Dark Mode
                </Text>
                <Switch value={isDarkMode} onValueChange={onToggleSwitch}></Switch>
            </View>
            <View style={{...styles.box,backgroundColor:papertheme.colors.error}}>
                <Text variant="headlineSmall" style={{...styles.text,color:papertheme.colors.onError}}>
                    primary
                </Text>
            </View>
        </View>
    )
}
export default DemoTheme;

const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    box:{
        margin:10,
        padding:10,
    },
    text:{
        alignSelf:"center"
    }
});

import React, { useState } from "react";
import { View,Text,TouchableOpacity,SafeAreaView, StyleSheet, TextInput } from "react-native";
import { Icon } from 'react-native-elements'

const Login=({navigation})=>{
    const [visible,setVisible]=useState(false)
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.login}>
               <Text style={styles.loginTitle}>Sign In</Text>
               <View style={styles.body}>
                    {/*User name*/}
                    <View style={styles.textInputContain}>
                        <TextInput style={styles.textInputUserName} placeholder="User name" onChangeText={(text)=>{setUsername(text)}}/>
                    </View>
                      {/*Password*/}
                    <View style={{...styles.textInputContain,flexDirection:'row',alignItems:'center',paddingRight:30}}>
                        <TextInput style={styles.textInputUserName} placeholder="Password" secureTextEntry={!visible} 
                        onChangeText={(text)=>{setPassword(text)}}
                        />
                        <TouchableOpacity style={{position:'absolute',right:10,}} onPress={()=>{setVisible(!visible)}} >
                            {visible?<Icon name="eye-off" type="feather" />:<Icon name="eye" type="feather" />}
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={{color:'rgba(0,0,0,0.6)',textAlign:'right'}}>Forget Password?</Text>
                    </View>
                    <View style={{marginTop:40,width:'100%',height:'100%',gap:10,justifyContent:'center',flexDirection:'row'}}>
                        <TouchableOpacity style={{...styles.btn,...styles.btnLogin}}
                         onPress={()=>{navigation.navigate('Home',{
                            email:username,
                            password:password
                         })}}
                         >
                            <Text style={{color:'white'}}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn}>
                            <Text>Register</Text>
                        </TouchableOpacity>
                    </View>
               </View>
            </View>
        </SafeAreaView>
    )
}
const styles=StyleSheet.create({
    body:{
        marginTop:50,
        // alignItems:'center',
        // backgroundColor:'black'
    },
    btnLogin:{
        backgroundColor:'blue'
    },
    btnRegister:{
    },
    btn:{
        marginBottom:10,
        borderRadius:8,
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        height:40,
    },
    container:{
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    login:{
        height:'70%',
        width:'90%',
    },
    loginTitle:{
        fontSize:40,
        fontWeight:'600',
        textAlign:'center',
        marginBottom:40,
        color:'blue'
    },
    textInputContain:{
        width:'100%',
        height:40,
        borderWidth:1,
        borderRadius:8,
        marginBottom:10,
    },
    textInputUserName:{
        borderRadius:8,
        width:'100%',
        height:'100%',
        // backgroundColor:'yellow',
        padding:10
    }

});

export default Login;
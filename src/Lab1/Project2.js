import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Project2(){
    return(
        <View style={styles.container}>
            <Button title="Button 1" onPress={()=>{alert("hello button 1 ~.~")}} />
            <TouchableOpacity
                onPress={()=>{alert("hello button 2 ~.~")}}
                style={
                    styles.btn
                }
            >
                <Text style={styles.text}>BUTTON 2</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    },
    btn:{
        backgroundColor:'blue',
        padding:10,
        alignItems:'center',
        marginTop:10
    }
    ,text:{
        color:'white',
        fontSize:18
    }
})
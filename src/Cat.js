import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function Cat(props){
    const[isHungry,setHungry]=useState(true)
    return(
        <View>
            <Text style={{}}>Hello {props.name}, I am {isHungry?"hungry":"full"}</Text>
            <Button
                onPress={()=>{setHungry(false)}}
                disabled={!isHungry}
                title={isHungry?"Pour me some milk":"Thanks you"}
            />
        </View>
    )
}
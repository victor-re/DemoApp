import { ActivityIndicator } from "react-native-paper"

export default DemoActivityIndicator=()=>{
    return(
        <ActivityIndicator 
        animating={true}
        color="red"
        size={"small"}
        />
    )
}
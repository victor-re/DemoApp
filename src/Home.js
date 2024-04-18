import { View,Text, SafeAreaView, TouchableOpacity } from "react-native";
import {Icon} from "react-native-elements"
const Home=({navigation,route})=>{
    const {email,password}=route.params;
    return(
      <SafeAreaView>
        <View style={{width:'100%',height:'100%',padding:10}}>
          {/*header*/}
          {/* <View style={{height:60,width:'100%',flexDirection:'row',alignItems:'center',gap:10}} >
            <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}
              onPress={()=>{navigation.goBack()}}
            >
              <Icon name="arrowleft" type="antdesign" size={30}></Icon>
            </TouchableOpacity>
            <Text style={{fontSize:20}}>Back</Text>
          </View> */}
          {/*body*/}
          <View style={{justifyContent:'center'}}>
            <Text style={{fontSize:20}}>Thông tin đăng nhập của bạn</Text>
            <Text style={{fontSize:20}}>Email: {email}</Text>
            <Text style={{fontSize:20}}>Password: {password}</Text>
          </View>
        </View>
      </SafeAreaView>
    )
}
export default Home
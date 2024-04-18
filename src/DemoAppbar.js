import { Appbar } from "react-native-paper";

const DemoAppbar=()=>{
    const _goBack=()=>alert('Went back');
    const _handleSearch=()=>alert('Searaching');
    const _handleMore=()=>alert('Show more');
    return(
        <Appbar.Header>
            <Appbar.BackAction onPress={_goBack} />
            <Appbar.Content title="title" />
            <Appbar.Action icon={"magnify"} onPress={_handleSearch} />
            <Appbar.Action icon={"dots-vertical"} onPress={_handleMore} />
            
        </Appbar.Header>
    )
}
export default DemoAppbar;
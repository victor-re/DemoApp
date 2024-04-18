import { SectionList,Text,View,SafeAreaView,StyleSheet } from "react-native";

const PEOPLE=[
    {
        name:{
            title:"MR",
            first:"Huynh",
            last:"Hoang"
        },
    },
    {
        name:{
            title:"MS",
            first:"Trang",
            last:"Nguyen"
        },
    },
    {
        name:{
            title:"MS",
            first:"Nguyen",
            last:"Nguyen"
        },
    },
    {
        name:{
            title:"MS",
            first:"Phat",
            last:"Doan"
        },
    },    
]

const styles=StyleSheet.create({
    row:{
        paddingHorizontal:10,
        paddingVertical:10,
    },
    name:{
        fontSize:16
    },
    separator:{
        backgroundColor:"rgba(0,0,0,0.5)",
        height:1
    },
    sectionHeader:{
        paddingHorizontal:10,
        paddingVertical:10,
        backgroundColor:"rgb(170,170,170)"
    }
})

const groupPeopleByLastName=(_data)=>{
    const data=_data
    const groupedData=data.reduce((accumulator,item)=>{
        const group=item.name.last[0].toUpperCase();

        if(accumulator[group]){
            accumulator[group].data.push(item);
        }else{
            accumulator[group]={
                title:group,
                data:[item],
            };
        }
        return accumulator;
    },{});
    const sections=Object.keys(groupedData).map((key)=>{
        return groupedData[key];
    });
    
    return sections.sort((a,b)=>{
        if(a.title>b.title){
            return 1;
        }
        return -1;
    }) 
}

export default ()=>{
    return (
        <SafeAreaView style={{flex:1}}>
            <SectionList
                sections={groupPeopleByLastName(PEOPLE)}
                keyExtractor={(item)=>{ return `${item.name.first}-${item.name.last}`}}
                renderSectionHeader={({section})=>{
                    return (
                        <View style={styles.sectionHeader}>
                            <Text>{section.title}</Text>
                        </View>
                    )
                }}
                renderItem={({item})=>{
                    return(
                        <View style={styles.row}>
                            <Text style={styles.name}>
                                {item.name.first} {item.name.last}
                            </Text>
                        </View>
                    )
                }}
                ItemSeparatorComponent={()=>{
                    return(
                        <View style={styles.separator}>

                        </View>
                    )
                }}
            />
        </SafeAreaView>
    )
}

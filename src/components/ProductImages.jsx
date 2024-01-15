import React,{useRef,useState} from "react";
import {Image, View, Animated, FlatList,StyleSheet,Dimensions,ScrollView} from 'react-native'
import data from "../../assets/data";
import Pagination from "../components/Pagination";
export default function ProductImages(){
    const scrollX = useRef(new Animated.Value(0)).current;
    const [index,setIndex] = useState(0)
    
    function handleScroll(event){
        Animated.event([
            {
                nativeEvent:{
                    contentOffset:{
                        x: scrollX,
                    },
                },
            },
        ], {
            useNativeDriver:false,
            }
        )(event);
    }
    
    const handleOnViewableItemsChanged = useRef(({viewableItems})=>{
        setIndex(viewableItems[0].index)
    }).current;
    
    const handleViewabilityConfig = useRef({
        itemVisiblePercentThreshold: 50,
    }).current;
    
    return(
        <View style={styles.imageSlider}>
            <FlatList data={data[0].img}
                    renderItem={({item}) => <Image style={styles.productImage} source={item}/>}
                    horizontal 
                    showsHorizontalScrollIndicator ={false}
                    pagingEnabled
                    style={{width:Dimensions.get('window').width * .9}}
                    bounces={false}
                    onScroll={handleScroll}
                    onViewableItemsChanged={handleOnViewableItemsChanged}
                    viewabilityConfig={handleViewabilityConfig}
            />
            <Pagination data={data[0].img} scrollX={scrollX} index={index}/>
        </View>
        
    )

}

const styles = StyleSheet.create({
    imageSlider:{
        display:"flex",
        justifyContent:'center',
        width: Dimensions.get('window').width ,
        alignItems:"center",
        alignSelf:"center",
        gap:10,
    },
    productImage:{
        height:500,
        width:Dimensions.get('window').width * .9,
        alignSelf:'center',
        resizeMode: 'contain',
      },
})

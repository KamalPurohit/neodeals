import React from "react"
import {Text, Animated, StyleSheet, View, Dimensions} from 'react-native'

const {width} = Dimensions.get('screen')
 
export default function Pagination({data, scrollX, index}){
   
    return(
        <View style={styles.container}>
            {data.map((_,idx)=>{
                const inputRange = [(idx-1) * width,idx * width, (idx+1) * width]

                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [12,30,12],
                    extrapolate: 'clamp',
                })

                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.4,1,0.4],
                    extrapolate: 'clamp',
                })
                return <Animated.View 
                        style={[styles.slide,
                                {width:dotWidth, opacity},
                                idx === index && styles.active]} 
                        key={idx}/>
            })}
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        gap:5,
        
    },
    slide:{
        width:10,
        height:10,
        borderRadius:25,
        padding:5,
        backgroundColor:'#ccc',
    },
    active:{
        backgroundColor:'gray',
    }
})
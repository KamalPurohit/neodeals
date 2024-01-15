import { StyleSheet, Text, View  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Price(props){
    const discount = Math.floor((props.mrp-props.price) * 100 / props.mrp)
    return(
        <View style={styles.priceContainer}>
            <Text style={{...styles.text,color:'green'}}>{discount}% off</Text>
            <Text style={{...styles.text,color:'gray',textDecorationLine:'line-through',textDecorationStyle:'double'}}>{props.mrp.toLocaleString('en-IN')}</Text>
            <Text style={{...styles.text}}>₹{props.price.toLocaleString('en-IN') }</Text>
        </View>
    )
}

const styles =  StyleSheet.create(
    {
        priceContainer:{
            display:'flex',
            flexDirection:'row',
            gap:10,
            marginHorizontal:10,
        },
        text:{
            fontSize:20,
            fontWeight:'bold',
        }
    }
)
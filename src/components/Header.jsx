import { StyleSheet, Text, View ,TextInput, Pressable,Dimensions } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import EvilIcons from '@expo/vector-icons/EvilIcons'

const SWidth = Dimensions.get('window').width
export default function Header(props){
    return(
        <View style={styles.headerComponent}>
            <Pressable>
                <MaterialIcons  name='arrow-back' size={25}/>
            </Pressable>
            <View>
                <TextInput placeholder='Serch' style={styles.input}/>
                <MaterialIcons  style={styles.serchIcon} name='search' size={25}/>
            </View>
            <Pressable>
                <MaterialIcons name='shopping-cart' size={25} />
                <Text style={styles.badge}>{props.cartItems}</Text>
            </Pressable>
        </View> 
    )
}

const styles = StyleSheet.create({
    headerComponent:{
        width:SWidth,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        height:50,
    },
    input: {
        height: 35,
        borderWidth: 1,
        borderColor:'gray',
        paddingVertical: 5,
        paddingHorizontal: 10,
        width:SWidth * .7,
        fontSize: 20,
        backgroundColor:'#f1f2f6',
        borderRadius:5,
        position:'relative',
      },
    serchIcon:{
        position:'absolute',
        right:10,
        top:5,
        color:'gray',
    },badge:{
        backgroundColor:'red',
        width:25,
        color:'white',
        fontSize:10,
        paddingVertical:2.5,
        textAlign:'center',
        borderRadius:25,
        position:'absolute',
        top:-10,
        fontWeight:'bold',
        right:-10,
    }
})
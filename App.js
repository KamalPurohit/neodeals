
import React, {useState} from 'react';
import { StyleSheet, Text, Pressable, View,Image,Alert, ScrollView,Dimensions ,TouchableNativeFeedback } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Price from './src/components/Price';
import Header from './src/components/Header';
import data from './assets/data'
import ProductImages from './src/components/ProductImages'

export default function App() {
  
  // fetch("http://neodeals.in:4002/api/products/category/Electronics")  
  // .then(response =>{
  //   return response.json()
  // }).then(responseData=>{
  //   console.log(responseData[1] );
  // })

  const [cartNumber,UpdateCartNumber]= useState(0);
  return (
    <SafeAreaView style={styles.container}>

      <SafeAreaView style={styles.header}>
        <Header cartItems={cartNumber} />
      </SafeAreaView>

      <ScrollView contentContainerStyle={styles.product}>
        <ProductImages/>
        <Text style={styles.productDesc}> <Text style={{fontWeight:'700'}}>{data[0].brand} </Text>{data[0].title} </Text>
        <Price mrp={data[0].mrp} price={data[0].price}/>
      </ScrollView>
      
      <View style={styles.btnContainer}>
        <TouchableNativeFeedback onPress={()=>UpdateCartNumber(prev => prev+=1)}> 
          <View  style={{...styles.btn,...styles.whitebtn}} > 
            <Text style={styles.btnText}>Add To Cart</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback> 
          <View  style={{...styles.btn}} > 
            <Text style={styles.btnText}>Buy Now</Text>
          </View> 
        </TouchableNativeFeedback>
      </View>
      
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex:1,
    width: Dimensions.get('window').width,
    display:'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap:10,
    height:100,
    position:'relative',
    paddingVertical:50,
  },
  product:{
    display:'flex',
    paddingBottom:100,
    width: Dimensions.get('window').width,
    justifyContent:'center',
    alignSelf:'stretch',
    gap:15,
  },
  text:{
    color:'red',
    fontSize: 20,
  },
  productImage:{
    height:500,
    alignSelf:'center',
    resizeMode: 'contain',
  },
  productDesc:{
    paddingHorizontal:10,
    fontSize:17,
  },
  btn:{
    paddingHorizontal:15,
    paddingVertical:20,
    boxSizing:'border-Box',
    color:"#fec200",
    backgroundColor:'#fec200',
    flex:1,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
  },
  whitebtn:{
    backgroundColor:'white',
  },
  btnText:{
    color: 'black',
    fontSize:17,
    fontWeight:'700',
  },
  btnContainer:{
    position:'absolute',
    display:'flex',
    flexDirection:'row',
    bottom:0,
  },
  header:{
    position:'absolute',
    top:0,
  }
});

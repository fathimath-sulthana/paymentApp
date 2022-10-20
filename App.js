import { View, Text,Image, StyleSheet, Button, Alert } from 'react-native'
import React from 'react'
import RazorpayCheckout from 'react-native-razorpay'
const App = () => {
  const handlePayment =() =>{
    var options ={
      name: 'Inmakes',
      description:'For testing',
      currency:'INR',
      amount:50000,
      key:'rzp_test_EPFelEqBaAykvp',
      prefill:{
        email:'abcd@gmail.com',
        contact:'90909087',
        name:'tester'
      },
       theme : {color:'blue'}
    }
    RazorpayCheckout.open(options).then((data) =>{
      console.log("data",data)
      Alert.alert('Payment Success')
    })
    .catch((error) =>{
      Alert.alert(`Error : ${error.code} | ${error.description}`)
      console.log(error.description)
    })
  }
  return (
    <View style={styles.container}>
      <Image  style={styles.imagebackground} source={require("./assets/logo.jpg")}/>
       <Text style={styles.text}>InMakes</Text>
       <Text style={styles.text}>Rs 500</Text>
       <Button title='Buy' style={styles.button} onPress={() =>handlePayment()}/>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  imagebackground:{
    width:200,
    height:200,
    resizeMode:'contain'
  },
  text:{
    fontSize:25
  },
  button:{
    width:300
  }
})
export default App
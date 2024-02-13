import {
  Image,
  ScrollView,
  Text,
  TextInput,
  View,
  StyleSheet,
  ImageBackground, 
  Button,
  Alert,
  TouchableOpacity,
  OnPre
} from 'react-native';
import React from 'react';
import logo from './asset/pict1.jpg';
import Title from './src/components/Title';
import Input from './src/components/input';
import Titlee from './src/components/Titlee';
import Titleee from './src/Titleee';

const App = () => {
  return (
    <View>
      <Title text="Welcome..."/>
      <ScrollView>
      <Titlee text="Username"/>
        <Input placeholder="Type username........"/>
        <Titlee text="Password"/>        
        <Input placeholder="Type password........"/>
        <Titleee text=" Lupa password?"/> 
        
        <TouchableOpacity style={style.button}>
        <Text style={style.buttonText}>Submit</Text>
      </TouchableOpacity>
      
        <Text style={style.text}>Login with</Text>
        <View style={style.row}>
          <Image source={require('./asset/ig.jpg')} style={style.circle} />
          <Image source={require('./asset/google.png')} style={style.circle} />
          <Image source={require('./asset/fb.jpg')} style={style.circle} />
        </View>
        <Text style={style.textt}>joxe . 2024</Text>
        {/* <View style={style.row}> */
        /* <View style={[style.circle, { backgroundColor: 'red' }]}></View>
        <View style={[style.circle, { backgroundColor: 'yellow' }]}></View>
        <View style={[style.circle, { backgroundColor: 'green' }]}></View>
        </View> */ 
        /* <View style={style.roww}>
          <Image source={require('./asset/logo.jpeg')} style={style.imagee} />
        </View>
        <View style={style.roww}>
          <Image source={require('./asset/pict2.jpg')} style={style.imagee} />
        </View>
        <View style={style.roww}>
          <Image source={require('./asset/blueee.jpg')} style={style.imagee} />
        </View>
        /* <View style={style.roww}>
          <Image source={logo} style={style.imagee} />
        </View>
         <Image
          source={{uri: 'https://3.bp.blogspot.com/-wGOc7d2fa04/T2SXCZUkoEI/AAAAAAAAAHE/yGp-ieAz8l4/s1600/peace+sign.png'}}
          style={style.image}
        /> */}
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  // imagee: {
  //   width: 330,
  //   height: 150,
  //   resizeMode: 'stretch',
  //   alignSelf : 'center', 
  // },
  // image: {
  //   width: 150,
  //   height: 270,
  //   alignSelf : 'center', 
  //   margin: 30,
  // },
  // rowww: {
  //   flexDirection: 'row',
  //   marginTop: 10,
  //   marginBottom: 10,
  // },
  // roww: {
  //   marginBottom: 10,
  //   margin: 10,
  //   borderRadius: 10,
  // },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 0,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 1000,
    alignSelf: 'center',
  },
  text: {
    color: 'black',
    fontSize: 15,
    lineHeight: 75,
    fontWeight: 'bold',
    textAlign: 'center',
    },
    textt: {
      color: 'black',
      fontSize: 10,
      lineHeight: 75,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 280,
      },
      button: {
        alignItems: 'center',
        backgroundColor: 'orange',
        padding: 10,
        alignSelf : 'center',
        borderRadius: 20,
      },
      buttonText: {
      color: 'white',
      fontSize: 17,
      fontWeight: 'bold',
      },
  });

export default App;

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
} from 'react-native';
import React from 'react';
import logo from './asset/bluee.jpeg';
import Title from './src/components/Title';
import Input from './src/components/Input';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

const App = () => {
  return (
    <View>
      <ImageBackground source={logo} resizeMode="cover">
      <Title text="Basic Components in RN"/>
      </ImageBackground>
      <ScrollView>
        <Input placeholder="Siapa Capres dan Cawapres yang anda pilih?"/>
        <Button 
          title="Submit" 
          color='#191970'
          onPress={() => Alert.alert('MUSTI ALL INI PRABOWO GIBRAN!!!')}/>
        <View style={style.row}>
        <View style={[style.circle, { backgroundColor: 'red' }]}></View>
        <View style={[style.circle, { backgroundColor: 'yellow' }]}></View>
        <View style={[style.circle, { backgroundColor: 'green' }]}></View>
        </View>
        <View style={style.roww}>
          <Image source={require('./asset/logo.jpeg')} style={style.imagee} />
        </View>
        <View style={style.roww}>
          <Image source={require('./asset/pict2.jpg')} style={style.imagee} />
        </View>
        <View style={style.roww}>
          <Image source={require('./asset/blueee.jpg')} style={style.imagee} />
        </View>
        <View style={style.roww}>
          <Image source={require('./asset/blue.jpeg')} style={style.imagee} />
        </View>
        <View style={style.roww}>
          <Image source={logo} style={style.imagee} />
        </View>
        <Image
          source={{uri: 'https://3.bp.blogspot.com/-wGOc7d2fa04/T2SXCZUkoEI/AAAAAAAAAHE/yGp-ieAz8l4/s1600/peace+sign.png'}}
          style={style.image}
        />
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  imagee: {
    width: 330,
    height: 150,
    resizeMode: 'stretch',
    alignSelf : 'center', 
  },
  image: {
    width: 150,
    height: 270,
    alignSelf : 'center', 
    margin: 30,
  },
  rowww: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  roww: {
    marginBottom: 10,
    margin: 10,
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    margin: 10,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  text: {
    color: '#00CED1',
    fontSize: 27,
    lineHeight: 75,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;

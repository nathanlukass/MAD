import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
const Titleee = ({text}) => {
  return (
    <View>
        
        <Text style={style.text}> {text}</Text>
      
    </View>
  )
}

const style = StyleSheet.create({
text: {
    color: 'purple',
    fontSize: 13,
    lineHeight: 30,
    fontWeight: 'bold',
    margin:0,
    marginBottom :5,
    marginTop : 0,
    alignSelf : 'flex-end'
}
});

export default Titleee

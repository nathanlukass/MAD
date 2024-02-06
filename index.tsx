import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
const index = ({text}) => {
  return (
    <View>
        
        <Text style={style.text}> {text}</Text>
      
    </View>
  )
}

const style = StyleSheet.create({
text: {
    color: '#00CED1',
    fontSize: 27,
    lineHeight: 75,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#191970',
    },
});

export default index

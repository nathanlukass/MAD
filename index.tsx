import { StyleSheet , TextInput } from 'react-native'
import React from 'react';

const index = ({placeholder}) => {
  return (
        <TextInput placeholder={placeholder} style={style.inputUsername} />
        );
    };

const style = StyleSheet.create({
    inputUsername: {
        borderColor: 'grey',
        borderWidth: 3,
        margin: 10,
        borderRadius: 10,
        padding: 10,
      },
});

export default index

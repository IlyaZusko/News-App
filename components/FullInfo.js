import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import {gStyle} from '../styles/style';



export default function Contacts({ route}) {
  // const loadScene = () => {
  //   navigation.goBack();
  // }

    return (
      <View style={gStyle.main}>
        
        <Text style={[gStyle.title, styles.MainName]}>{route.params.name}</Text>
        <Image source={{
              width: '100%',
              height: 200,
              uri: route.params.img
            }} />
        <Text style={styles.full}>{route.params.full}</Text>
        
      </View>
    );
}

const styles = StyleSheet.create({
  full: {
    fontFamily: 'mt-regular',
    fontSize: 16,
    textAlign: 'left',
    marginTop: 20,
    color: '#474747',
  },
  MainName: {
    marginBottom: 20,
  }
});

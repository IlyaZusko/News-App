import React, { useState } from 'react';
import { StyleSheet,} from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import MainStack from './Navigate';


const fonts = () => Font.loadAsync({
'mt-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
'mt-light': require('./assets/fonts/Montserrat-Thin.ttf'),
'mt-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
});

export default function App() {
  const [font, setFont] = useState(false);

  if(font){
    return (
      <MainStack />
    );
  } else {
      return (
        <AppLoading
          onError={err => console.warn(err)}
          startAsync={fonts} 
          onFinish={() => setFont(true)}
        /> 
        
      );
    
  }
}

const styles = StyleSheet.create({
  
});

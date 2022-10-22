import React from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Text } from 'react-native';
import {gStyle} from '../styles/style';
import { Formik } from 'formik';



export default function Form({ addArticle }) {
    return (
        <View>
            <Formik initialValues={{name: '', anons: '', full: '', img: ''}} onSubmit={(values, action) => {
                addArticle(values);
                action.resetForm();

            }}>
                {(props) => (
                    <View>
                        <TextInput 
                            style={styles.input}
                            value={props.values.name}  
                            multiline 
                            placeholder='Input name'
                            onChangeText={props.handleChange('name')} />
                            <TextInput 
                            style={styles.input}
                            value={props.values.anons}   
                            multiline
                            placeholder='Input anons'
                            onChangeText={props.handleChange('anons')} />
                            <TextInput 
                            style={styles.input}
                            value={props.values.full}  
                            multiline
                            placeholder='Input full'
                            onChangeText={props.handleChange('full')} />
                             <TextInput
                            style={styles.input} 
                            value={props.values.img}  
                            multiline
                            placeholder='Input img'
                            onChangeText={props.handleChange('img')} />
                            <TouchableOpacity title='Add' onPress={props.handleSubmit} style={styles.buttonAddArticle}>
                                <Text style={gStyle.special}>Add</Text>
                            </TouchableOpacity>
                    </View>
                )}
            </Formik>
        </View>
    );
}

const styles = StyleSheet.create({
  input: {
      borderWidth: 2,
      marginTop: 15,
      padding: 20,
      borderColor: 'silver',
      borderRadius: 8,
  },
  buttonAddArticle: {
      height: 50,
      borderWidth: 1,
      borderColor: 'silver',
      marginTop: 20,
      borderRadius: 10,
      width: '50%',
      marginLeft: 'auto',
      marginRight: 'auto',
  }
});

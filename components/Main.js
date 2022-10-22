import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image, Modal} from 'react-native';
import {gStyle} from '../styles/style';
import { Ionicons } from '@expo/vector-icons';
import Form from './Form';




export default function Main({ navigation }) {

 

  const [news, setNews] = useState([
    { name: 'Google', anons: 'Google become the most expensive corporation in humans history', full: 'The Department of Telecom (DoT) has last week sent back a recommendation of the Telecom Regulatory Authority of India (Trai) on internet telephony issued in 2008, for review, and has asked the sector regulator to come up with comprehensive reference due to the change in technical environment amid the emergence of new technologies.The Internet Telephony recommendation of Trai was not accepted by the DoT. The Department has now sought comprehensive reference from Trai for internet telephony and over-the-top players, the official, who did not wish to be named, said', key: '1', img: 'https://www.ixbt.com/img/n1/news/2022/6/6/32a52ad-google_large.jpg'},
    { name: 'Apple', anons: 'Apple has a big problems with supporting their products in asia country', full: 'Sending nudes via AirDrop is hardly new. In 2018, New York proposed a bill that would outlaw cyber flashing, or the act of sending explicit photos to strangers through file sharing technology like Apples AirDrop. Apple products are prime candidates for cyber flashing. Unlike other systems, AirDrop presents a preview of incoming photos and video, which users can then accept or decline. But, you still get that preview.', key: '2', img: 'https://icdn.lenta.ru/images/2022/03/02/01/20220302013230567/owl_brief_880_eeedf942728e6ec7d1493b0eb56209e9.jpg'},
    { name: 'facebook', anons: 'facebook announcing their new innovation product named meta, which could help their users to protect their accounts', full: 'The New York Post alleged leaked emails from Hunter Bidens laptop showed the then vice-president was helping his sons business dealings in Ukraine.Facebook and Twitter restricted sharing of the article, before reversing course amid allegations of censorship.Zuckerberg said that getting the decision wrong sucks.When we take down something that were not supposed to, thats the worst, Zuckerberg said in a rare extended media interview on the Joe Rogan podcast.', key: '3', img: 'https://www.ixbt.com/img/n1/news/2021/11/1/21145490_0_156_3089_1893_1920x0_80_0_0_b661826da300474cd020da58d5bd9aa7_large.jpg'}
  ]);

  const [modalWindow, setModalWindow] = useState(false);

  const addArticle = (article) => {
    setNews((list) => {
      article.key = Math.random().toString(36);
      return [
        article,
        ...list
      ]
    });
    setModalWindow(false);
  }



    return (
      <View style={gStyle.main}>
        <Modal visible={modalWindow}>
        <View style={gStyle.main}>
          <Ionicons name='close-circle' size={34} color='black' style={styles.iconClose} onPress={() => setModalWindow(false)}/>
          <Text style={styles.title}>Create news</Text>
          <Form addArticle={addArticle} />
        </View>
        </Modal>
        <Ionicons name='add-circle' size={34} color='black' style={styles.iconAdd} onPress={() => setModalWindow(true)} />
        <Text style={[gStyle.title, styles.header]}>Главная страница</Text>
        <FlatList data={news} renderItem={({item}) => (
          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('FullInfo', item)}>
            <Image source={{
              width: '100%',
              height: 200,
              uri: item.img
            }} />
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.anons}>{item.anons}</Text>
          </TouchableOpacity>
        )} />
      </View>
    );
};

const styles = StyleSheet.create({
  iconClose: {
    textAlign: 'center',
    marginBottom: 0,
    marginTop: 40
  },
  iconAdd: {
    textAlign: 'center',
    marginBottom: 15,
  },
  header: {
    marginBottom: 20,
  },
  item: {
    width: '100%',
    marginBottom: 40,
  },
  title: { 
    fontFamily: 'mt-bold',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 20,
    color: '#474747',
  }, 
  anons: {
    fontFamily: 'mt-light',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
    color: '#474747',
  }
});

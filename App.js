import React, {useEffect} from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity, Image, Alert
} from 'react-native';
import { connect } from 'react-redux';
import Heartbeat from './Heartbeat';
import heart from './heart.png';
import AsyncStorage from '@react-native-community/async-storage';
import messaging from '@react-native-firebase/messaging';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  view: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'gray',
    padding: 10,
    margin: 10,
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
});


function App() {
  messaging().getToken().then(token =>{
    console.log(token)
  })
  

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('Placa Monitorada Identificada',JSON.stringify(remoteMessage.data.placa));
    });
  
    return unsubscribe;
  }, []);
  
  
  //const imageSize = heartBeat ? 150 : 100;
  /*
  async function teste(){
    let inc = await AsyncStorage.getItem("teste5");
      
    if (!!inc) {
      inc = Number(inc) + 1;
      await AsyncStorage.setItem("teste5", inc.toString());
    } else {
      await AsyncStorage.setItem("teste5", "1");
    }
    
    console.log(inc);
    */
  return (
    <View style={styles.container}>
      <View style={styles.view}>
      </View>
      <View style={styles.view}>
        <TouchableOpacity style={styles.button} onPress={() => {
          try {

          } catch (e) {
            console.log(e);
          }
        }}>
          <Text style={styles.instructions}>Vazio</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = store => ({
  heartBeat: store.App.heartBeat,
});

export default (App);

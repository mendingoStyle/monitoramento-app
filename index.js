import { AppRegistry } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import { name as appName } from './app.json';
import { setHeartBeat, store } from './store';
import AsyncStorage from '@react-native-community/async-storage'
import messaging from '@react-native-firebase/messaging';

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Placa Monitorada Identificada', JSON.stringify(remoteMessage.data.placa));
});

const MyHeadlessTask = async () => {

};

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);


AppRegistry.registerHeadlessTask('Heartbeat', () => MyHeadlessTask);
AppRegistry.registerComponent(appName, () => RNRedux);

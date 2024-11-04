import * as firebase from 'firebase';
import React from 'react';
import {
  Button,
  StyleSheet,
  TextInput,
  View
} from 'react-native';
import ENV from './env';

if (!firebase.apps.length)
  firebase.initializeApp(ENV);

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.entrada} placeholder='Digite seu lembrete' />
      <View>
        <Button
          title='OK'
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  entrada: {
    borderBottomColor: "#DDD",
    borderBottomWidth: 1,
    fontSize: 14,
    textAlign: 'center',
    width: '80%',
    marginBottom: 8
  },

  botao: {
    width: '80%'
  }
});

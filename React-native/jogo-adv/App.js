import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import Cabecalho from './components/Cabecalho';
import TelaComecoDoJogo from './telas/TelaComecoDoJogo';


export default function App() {
  return (
    <View style={styles.container}>
      <Cabecalho titulo={"Adivinha qual é o número"} />
      <TelaComecoDoJogo/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

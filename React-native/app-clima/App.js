import React, { useState } from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  View,
  Text,
  TextInput,
  Keyboard,
} from 'react-native';

import PrevisaoItem from './components/PrevisaoItem';
import weatherApiKey from './components/weatherApiKey';

export default function App() {
  const endPoint = "https://api.openweathermap.org/data/2.5/forecast?lang=pt&units=metric&q=";
  const apiKey = weatherApiKey;

  const [cidade, setCidade] = useState('');
  const capturarCidade = (cidade) => {
    setCidade(cidade)
  }
  const [previsoes, setPrevisoes] = useState([])

  const obtemPrevisoes = () => {
    setPrevisoes([]);
    const target = endPoint + cidade + "&appid=" + apiKey;
    fetch(target)
    .then((dados) => dados.json())
    .then((dados) => {
      setPrevisoes(dados["list"])
      Keyboard.dismiss()
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.entrada}>
      <TextInput
      style={styles.nomeCidade}
      placeholder='Digite o nome da cidade'
      value={cidade}
      onChangeText={capturarCidade}
      />
      <Button
      title='OK'
      onPress={obtemPrevisoes}
      />
      </View>
      <FlatList
      data={previsoes}
      renderItem={
      previsao =>(
      <PrevisaoItem previsao={previsao} />
      )
      }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#fff',

  },
  nomeCidade:{
    padding:10,
    borderBottomWidth: 2,
    textAlign:'left',
    flexGrow: 0.9
  },
  entrada:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8
  }
});

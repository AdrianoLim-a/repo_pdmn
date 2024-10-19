import { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default function App() {

  const [contador, setContador] = useState(0)

  const atualizarCont = () => {
    setContador(contador + 1)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {contador}

      </Text>

      <Button
        title="ATUALIZAR CONTADOR"
        onPress={(atualizarCont)}
      />
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
});

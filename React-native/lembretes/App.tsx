import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import {
  useState
} from 'react';

interface Lembrete {
  id: string;
  texto: string;
}
export default function App() {
  const [lembrete, setLembrete] = useState('')
  const [lembretes, setLembretes] = useState<Lembrete[]>([])

  const adicionar = () => {
    const novoLembrete: Lembrete = {
      id: Date.now().toString(),
      texto: lembrete
    }
    setLembretes(lembretesAtual => [novoLembrete, ...lembretes])
    setLembrete('')

  }

  
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Digite um lembrete ...'
        onChangeText={setLembrete}
      />
      <Pressable
        style={styles.button}
        onPress={adicionar}>
        <Text style={styles.buttonText}>
          Salvar Lembrete
        </Text>
      </Pressable>
      <FlatList
        keyExtractor={item => item.id}
        style={styles.list}
        data={lembretes}
        renderItem={l => (
          <View
            style={styles.listItem}>
            <Text
              style={styles.listItemText}>
              {l.item.texto}
            </Text>
            <View
              style={styles.listItemButtons}>
              <Pressable>
                <EvilIcons name="trash" size={24} color="black" />
              </Pressable>
              <Pressable>
                <EvilIcons name="pencil" size={24} color="black" />
              </Pressable>
            </View>
          </View>
        )} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40
  },
  input: {
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 15,
    marginBottom: 12,
    textAlign: 'center',
    borderRadius: 4,
  },
  button: {
    width: '80%',
    backgroundColor: '#0096F3',
    padding: 12,
    borderRadius: 4,
  },

  buttonText: {
    color: 'white',
    textAlign: 'center'
  },
  list: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '80%',
    borderRadius: 4,
    marginTop: 12,
    padding: 8
  },
  listItem: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  listItemText: {
    textAlign: 'center',
    width: '70%'

  },
  listItemButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '30%'
  }
});

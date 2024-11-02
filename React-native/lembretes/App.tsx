import {
  useState
} from 'react';
import {
  Alert,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

interface Lembrete {
  id?: string;
  texto: string;
}
export default function App() {
  const [lembrete, setLembrete] = useState<Lembrete>({  texto:''})
  const [lembretes, setLembretes] = useState<Lembrete[]>([])
  const [emModoDeEdicao, setEmModoDeEdicao] = useState<boolean>(false)
  
  const adicionar = () => {
    const novoLembrete: Lembrete = {
      id: Date.now().toString(),
      texto: lembrete.texto
    }
    setLembretes(lembretesAtual => [novoLembrete, ...lembretes])
    setLembrete({texto:''})

  }

  const remover = (lembrete: Lembrete) => {
    Alert.alert(
      'Remover lembrete',
      ` Deseja remover este lembrete? ${lembrete.texto}`,
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Remover',
          style: 'destructive',
          onPress: () => {
            setLembretes(
              lembretesAtual => lembretesAtual.filter(item => item.id !== lembrete.id)
            )
          }
        }
      ]
    )
  }
  
  const alterar = () => {
    const lembretesAtualizados = lembretes.map(item => {
      if(item.id === lembrete.id){
        return lembrete
      }
      return item
    })
    setLembretes(lembretesAtualizados)
    setEmModoDeEdicao(false)
    setLembrete({texto:''})
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Digite um lembrete ...'
        onChangeText={(novoTexto) => setLembrete({ id: lembrete.id, texto: novoTexto})}
        value={lembrete.texto}
      />
      <Pressable
        style={styles.button}
        onPress={  emModoDeEdicao? alterar: adicionar}>
        <Text style={styles.buttonText}>
          {
            emModoDeEdicao ? 'Alterar lembrete': 'Adicionar lembrete'
          }
        </Text>
      </Pressable>
      <FlatList
        keyExtractor={item => item.id!}
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
              <Pressable
                onPress={() => remover(l.item)}>
                <EvilIcons name="trash" size={28} color="black" />
              </Pressable>
              <Pressable onPress={() => {
                setLembrete({id: l.item.id, texto: l.item.texto})
                setEmModoDeEdicao(true)
              }}>
                <EvilIcons name="pencil" size={28} color="black" />
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

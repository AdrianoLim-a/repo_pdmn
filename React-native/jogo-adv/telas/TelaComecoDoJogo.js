import React, { useState } from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Cartao from '../components/Cartao';
import Entrada from '../components/Entrada';
import Cores from '../cores/Cores';

const TelaComecoDoJogo = (props) => {

    const [numeroGerado, setNumeroGerado] = useState(null);
    const [mensagem, setMensagem] = useState('');

    const gerarNumero = (numeroEntrada) => {
        // Gera um número aleatório entre 0 e 10
        const novoNumero = Math.floor(Math.random() * 11);
        setNumeroGerado(novoNumero);
        if (novoNumero !== parseInt(numeroEntrada)) {
            setMensagem("Número errado, tente novamente");
        } else {
            setMensagem("Acertou!");
            
        }
    }

    const reiniciarJogo = () => {
        setNumeroGerado(null);
        setMensagem('');
        
    }

    return (
        <View style={styles.tela}>
            <Text style={styles.titulo}> Comece um jogo</Text>
            <Cartao styles={styles.entradaView}>
                <Text> Escolha um número de 0 a 10 </Text>
                <Entrada
                    style={styles.entrada}
                    autoCapitalize='none'
                    blurOnSubmit
                    autoCorrect={false}
                    keyboardType="number-pad"
                    maxLenth={2}
                    onChangeText={(text) => setNumeroGerado(text)}
                />
                <View style={styles.buttonView} >
                    <View style={styles.botao}>
                        <Button
                            title="Reiniciar"
                            color={Cores.accent}
                            onPress={() => reiniciarJogo()}
                        />
                    </View>
                    <View style={styles.botao}>
                        <Button
                            title=" Confirmar"
                            color={Cores.accent}
                            onPress={() => gerarNumero(numeroGerado)}
                        />
                    </View>
                </View>
            </Cartao>
            <View>
                {mensagem ? <Text style={styles.textoFeedback}>{mensagem}</Text> : null}
            </View>

        </View>
    )

}

const styles = StyleSheet.create({

    tela: {
        flex: 1,
        padding: 10,
        alignItems: 'center',

    },
    titulo: {
        fontSize: 20,
        marginVertical: 10,
    },
    entradaView: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    buttonView: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    botao: {
        width: 100
    },
    entrada: {
        width: 50,
        textAlign: 'center'
    },

    textoFeedback: {
        padding: 40,
        fontSize: 20

    }

});

export default TelaComecoDoJogo
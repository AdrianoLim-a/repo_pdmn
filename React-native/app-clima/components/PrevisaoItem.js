import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import Cartao from './Cartao';

const PrevisaoItem = (props) => {

    return (
        <Cartao style={styles.Cartao}>
            <View style={styles.tela}>
                <Image
                    style={styles.imagem}
                    source={{ uri: "https://openweathermap.org/img/wn/" + props.previsao.item.weather[0].icon + ".png" }}
                />
                <View>
                    <View style={styles.primeiraLinha}>
                        <Text> {new Date(props.previsao.item.dt * 1000).toLocaleTimeString()} -
                            {props.previsao.item.weather[0].description}</Text>
                    </View>
                    <View style={styles.segundaLinha}>
                        <Text style={styles.valor}> Min: {props.previsao.item.main.temp_min + "\u00B0"}</Text>
                        <Text style={styles.valor}> Max: {props.previsao.item.main.temp_max + "\u00B0"}</Text>
                        <Text style={styles.valor}> Hum: {props.previsao.item.main.humidity}%</Text>
                    </View>
                </View>
            </View>
        </Cartao>
    );
}

const styles = StyleSheet.create({
    cartao: {
        marginBottom: 5
    },
    tela: {
        flexDirection: 'row'
    },
    imagem: {
        width: 50,
        height: 50
    },
    primeiraLinha: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    segundaLinha: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 4,
        borderTopWidth: 1,
        borderTopColor: '#DDD'
    },
    valor: {
        marginHorizontal: 2,
    }

})

export default PrevisaoItem
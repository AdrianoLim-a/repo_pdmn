import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import Cores from '../cores/Cores';

const Titulo = (props) => {
    return (
        <View style={styles.cabecalho}>
            <Text style={styles.titulo}>{props.titulo}</Text>
        </View>
    )
};
const styles = StyleSheet.create({

    cabecalho: {
        width: '100%',
        height: 95,
        paddingTop: 40,
        backgroundColor: Cores.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titulo: {
        color: '#000',
        fontSize: 22
    }
});
export default Titulo;
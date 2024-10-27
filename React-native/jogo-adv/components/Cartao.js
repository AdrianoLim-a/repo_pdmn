import React from 'react'
import { StyleSheet, View } from 'react-native'

const Cartao = (props) => {

    return (
        <View style={{...styles.cartao, ...props.styles}}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({

    cartao: {
        shadowColor: 'black',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.32,
        backgroundColor: 'white',
        elevation: 10,
        padding: 15,
        borderRadius: 10
    }

})
export default Cartao
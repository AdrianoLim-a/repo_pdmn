import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const Entrada = (props) => {
  return (
    <TextInput {...props} style={{ ...styles.entrada, ...props.styles}}/>
  )
}

const styles = StyleSheet.create({
    entrada: {
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10
    }
})

export default Entrada
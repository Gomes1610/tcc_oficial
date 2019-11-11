import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Title extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.fontTitulo}>{this.props.dados.nome}</Text>
                <Text style={styles.font}>{this.props.dados.tipo}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        //height: 70,
        width: '100%',
        paddingVertical: 10,
        paddingLeft: 20,
        borderBottomWidth: 1,
        borderColor: '#DDDDDD',
    },
    fontTitulo: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    font: {
        fontSize: 16,
    },
})
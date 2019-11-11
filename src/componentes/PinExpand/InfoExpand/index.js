import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class InfoExpand extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.font}>Endereço: {this.props.dados.endereco}</Text>
                <Text style={styles.font}>Site: {this.props.dados.site}</Text>
                <Text style={styles.font}>Telefone: {this.props.dados.telefone}</Text>
                <Text style={styles.font}>Horário de Funcionamento: {this.props.dados.hrAbertura} - {this.props.dados.hrFechamento}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 20,
        paddingLeft: 20,
        borderBottomWidth: 1,
        borderColor: '#DDDDDD',
    },
    font: {
        fontSize: 16,
    },
})
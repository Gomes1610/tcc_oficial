import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class InfoExpand extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.font}>
                    <Text style={styles.fontNegrito}>Endereço: </Text>
                    {this.props.dados.endereco}
                </Text>
                <Text style={styles.font}>
                    <Text style={styles.fontNegrito}>Site: </Text>
                    {this.props.dados.site}
                </Text>
                <Text style={styles.font}>
                    <Text style={styles.fontNegrito}>Telefone: </Text>
                    {this.props.dados.telefone}
                </Text>
                <Text style={styles.font}>
                    <Text style={styles.fontNegrito}>Horário de Funcionamento: </Text> 
                    {this.props.dados.hrAbertura} - {this.props.dados.hrFechamento}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 225,
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingLeft: 20,
        borderBottomWidth: 1,
        borderColor: '#DDDDDD',
    },
    font: {
        fontSize: 16,
    },
    fontNegrito: {
        fontSize: 16,
        fontWeight: 'bold',
    },
})
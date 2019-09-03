/*
Este código cria uma tela com diversos botões para que o usuário selecione 
qual informação quer passar para o aplicativo.
*/
import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native'

export default class Informante extends React.Component{
    constructor(){
        super()
    }

    _selecionado = () => {

    }

    render(){
        return(
            <View>
                <ImageBackground
                    style={styles.imagem_container}
                    source={require('../Imagens/Luzes1.jpg')}
                />
                <View style={styles.view_button}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this._selecionado}
                    >
                        <Text>Número de pessoas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this._selecionado}
                    >
                        <Text>Tempo da fila</Text>
                    </TouchableOpacity>
                
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    imagem_container: {
        width: '100%',
        height: '100%',
    },
    view_button: {
        position: 'absolute',
        top: '25%',
        left: '10%',
        width: '80%',
        height: '50%',
        backgroundColor: 'white',
        borderRadius: 10,
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '75%',
        height: '25%',
        borderRadius: 10,
        backgroundColor: '#DDDDDD',
    },
})
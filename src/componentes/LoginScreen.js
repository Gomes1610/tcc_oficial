import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, TextInput, ImageBackground } from 'react-native'

export default class LoginScreen extends React.Component{
    constructor(){
        super()
        this.state = {
            usuario : 'Usuário',
            senha   :  'Senha',
        }
    }

    render(){
        return(
            <View>
                <ImageBackground
                    source={require('../Imagens/Nebulosa2.jpg')}
                    style={{ width: '100%', height: '100%', opacity: 0.80 }}
                />
                <View style={styles.container}>
                    <View style={styles.viewLogin}>
                        <Text style={styles.login}>
                            Login
                        </Text>
                    </View>
                    <View style={styles.viewEntradas}>
                        <TextInput //Entrada do Usuário
                            // value={this.state.usuario}
                            style={styles.entradas}
                            placeholder="Usuário"
                        />
                        <TextInput //Entrada da Senha 
                            // value={this.state.senha}
                            style={styles.entradas}
                            placeholder="Senha"
                        />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: '25%',
        left: '10%',
        width: '80%',
        height: '50%',
        backgroundColor: 'white',
        borderRadius: 10,
        
    },
    viewLogin: {
        position: 'relative',
        top: '25%',
        left: '41.25%'
    },
    login: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    viewEntradas:{
        position: 'relative',
        top: '40%',
    },
    entradas: {
        margin: 10,
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        height: 40,
    },
})
import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground, TextInput } from 'react-native'

export default class Ouvidoria extends React.Component{
    constructor(){
        super()
        this.state = {
            texto: ''
        }
    }

    receber = () => {
        const _selecionado = this.props.navigation.getParam('selecionado', 0)
        // _selecionado possui o id do pin selecionado para dar a informação. Necessário pra quando for atualizar.
        alert(_selecionado) //lembrando que é o mesmo id do banco
    }


    render(){

        const _status = this.props.navigation.getParam('status', 0)
        const _return = new Array()

        switch(_status){
            case 1:
                _return.push(
                    <View
                        style={styles.container}
                        key={1}
                    >
                        <Text>Quantas pessoas estão aqui?</Text>
                        <TextInput
                            onChangeText={(_texto) => this.setState({ texto: _texto })}
                            value={this.state.texto}
                            style={styles.entradas}
                            placeholder={'Ex: 50'}
                            placeholderTextColor={'gray'}
                        />
                        <TouchableOpacity
                            style={styles.button}
                            onPress={this.receber}
                        >
                            <Text>Enviar</Text>
                        </TouchableOpacity>
                    </View>
                )
                break
            case 2:
                _return.push(
                    <View
                        style={styles.container}
                        key={2}
                    >
                        <Text>Qual é o tempo da fila?</Text>
                        <TextInput
                            onChangeText={(_texto) => this.setState({ texto: _texto })}
                            value={this.state.texto}
                            style={styles.entradas}
                            placeholder={'Ex: 45min'} //Precisamos pensar nessa entrada de dados, por hora só lide como uma entrada normal de números
                            placeholderTextColor={'gray'}
                        />
                        <TouchableOpacity
                            style={styles.button}
                            onPress={this.receber}
                        >
                            <Text>Enviar</Text>
                        </TouchableOpacity>
                    </View>
                )
                break
            default:
                break
        }


        return(
            <View>
                <ImageBackground
                    style={styles.imagem_container}
                    source={require('../Imagens/Luzes1.jpg')}
                />
                    {_return}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    imagem_container: {
        width: '100%',
        height: '100%',
    },
    container: {
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
    entradas: {
        width: '50%',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        height: 40,
    },
})
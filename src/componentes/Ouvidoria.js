import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground, TextInput } from 'react-native'
import { NavigationEvents } from 'react-navigation'

export default class Ouvidoria extends React.Component{
    constructor(){
        super()
        this.state = {
            tempo : 0,
            cap : 0, 
        }
    }

    receberCap = async () => {
        const _selecionado = this.props.navigation.getParam('selecionado', 0) //Pin selecionado
        // fetch('http://192.168.100.104:80/places/cap/'+ _selecionado, { ////IP Gomes
        // fetch('http://192.168.0.6:80/places/cap/'+ _selecionado, { ////IP Gabriel
        fetch('https://blooming-fortress-34861.herokuapp.com/places/cap/' + _selecionado, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({                
                "capAtual" : this.state.cap,
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                // var place = JSON.stringify(responseJson);
                // alert(responseJson.capAtual)
                // if (place != '[]') {  
                //     alert(place.nome+ ' atualizado!');
                //     const { navigate } = this.props.navigation;
                //     navigate('Mapa')
                // }
                // else {
                //     alert('Erro.');
                // }
                this.props.navigation.replace('Mapa')
            })
            .catch((error) => {
                alert('Erro' + error)
                console.error(error);
            });


        // _selecionado possui o id do pin selecionado para dar a informação. Necessário pra quando for atualizar.
        // alert(_selecionado) //lembrando que é o mesmo id do banco
    }

    receberTempo = async () => {
        const _selecionado = this.props.navigation.getParam('selecionado', 0) //Pin selecionado
        // fetch('http://192.168.100.104/places/tempo/'+ _selecionado, { ////IP Gomes
        // fetch('http://192.168.0.6:80/places/tempo/'+ _selecionado, { //// IP Gabriel
        fetch('https://blooming-fortress-34861.herokuapp.com/places/tempo' + _selecionado, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({                
                "tempoFila": this.state.tempo,
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                // var place = JSON.stringify(responseJson);
                // alert(responseJson.capAtual)
                // if (place != '[]') {  
                //     alert(place.nome+ ' atualizado!');
                //     const { navigate } = this.props.navigation;
                //     navigate('Mapa')
                // }
                // else {
                //     alert('Erro.');
                // }
                this.props.navigation.replace('Mapa')
            })
            .catch((error) => {
                alert('Erro' + error)
                console.error(error);
            });


        // _selecionado possui o id do pin selecionado para dar a informação. Necessário pra quando for atualizar.
        // alert(_selecionado) //lembrando que é o mesmo id do banco
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
                            style={styles.entradas}
                            placeholder={'Ex: 50'}
                            placeholderTextColor={'gray'}
                            onChangeText={(text) => this.setState({cap: text})}
                        />
                        <TouchableOpacity
                            style={styles.button}
                            onPress={this.receberCap}
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
                            onChangeText={(text) => this.setState({ tempo: text })}
                            style={styles.entradas}
                            placeholder={'Ex: 45min'} //Precisamos pensar nessa entrada de dados, por hora só lide como uma entrada normal de números
                            placeholderTextColor={'gray'}
                        />
                        <TouchableOpacity
                            style={styles.button}
                            onPress={this.receberTempo}
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
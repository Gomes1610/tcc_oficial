import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

import GerenteCores from './GerenteCores'

export default class PinReduzido extends React.Component{
    constructor(){
        super()
        this.state = {
            _capAtual: null,
            _tempoFila: null,
        }
    }

    componentDidMount() {
        fetch('https://blooming-fortress-34861.herokuapp.com/places/' + this.props.selecionado)
        .then(response => response.json())
        .then(data => this.setState({ 
            _capAtual: data[0].capAtual,
            _tempoFila: data[0].tempoFila,
        }))
        .catch((error) => {
            alert('Erro' + error)
          console.error(error);
        });
    }

    _informar = () => {
        //Por essa tela, o PinReduzido, ser sobreposta à tela Mapa, 
        //a forma de usar o react navigation para ele é diferente.
        //Na tela Mapa, ao chamar a tag <PinReduzido />, 
        //deve-se passar como parametro a constante navigate 
        //para dar a classe PinReduzido acesso ao react navigation.
        this.props._navigate('Informante', {_selecionado: this.props.selecionado})
    }
    
    _expandir = () => { 
        this.props._navigate('PinExpandido', {_selecionado: this.props.selecionado})
    }

    
    render(){
        
        return(
            
            <View style={styles.mini_container}>
                <View //Faixa lateral colorida do PinReduzido
                    style={[
                        styles.faixa, 
                        {backgroundColor: GerenteCores(this.props.capMax,this.props.capAtual)[1]}
                    ]}
                />

                <View style={styles.view_mini_titulo}>
                    <Text style={styles.fonte_titulo}>{this.props.nome}</Text>
                </View>
                <View style={styles.view_mini_texto}>
                    <Text style={styles.fonte_texto}>Número de pessoas: {this.state._capAtual}</Text>
                    <Text style={styles.fonte_texto}>Tempo de fila: {this.state._tempoFila} minutos</Text>
                </View>
                <View style={styles.view_mini_button}>
                <TouchableOpacity
                    style={styles.mini_button_informar}
                    onPress={this._informar}
                >
                    <Text style={styles.fonte_button_informar}>Informar</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.mini_button_expandir}
                    onPress = {this._expandir}
                >
                    <Text style={styles.fonte_button_expandir}>Mais</Text>
                </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mini_container: {
        position: 'absolute',
        top: '65%',
        left: '7.5%',
        width: '85%',
        height: '25%',
        borderRadius: 20,
        backgroundColor: 'white',
        elevation: 10, //Efeito de sombra
    },
    faixa: {
        position: 'absolute',
        left: '85%',
        width: '15%',
        height: '100%',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
    },
    view_mini_titulo: {
        position: 'absolute',
        top: '4%',
        left: '4%',
        width: '76%',
        height: '21%'
    },
    view_mini_texto: {
        position: 'absolute',
        top: '35%',
        left: '4%',
        width: '76%',

    },
    fonte_titulo: {
        fontSize: 16,
        fontWeight: 'bold',
    }, 
    fonte_texto: {
        fontSize: 14,
    },
    view_mini_button: {
        position: 'absolute',
        top: '72%',
        left: '4%',
        width: '81%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    mini_button_informar: {
        width: '45%',
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        borderRadius: 10,
    },
    fonte_button_informar: {
        fontSize: 16,
    },
    mini_button_expandir: {
        width: '45%',
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        borderRadius: 10,
    },
    fonte_button_expandir: {
        fontSize: 16,
    },
})

/*
mini_button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '72%',
    left: '4%',
    width: '10%',
    height: '20%',
    borderRadius: 25,
    backgroundColor: '#DDDDDD',
    opacity: 0.8,
}, 
*/
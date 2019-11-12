import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

import Title from './Title/index'
import InfoReduz from './InfoReduz/index'
import InfoExpand from './InfoExpand/index'
import Voltar from './Back/index'

export default class PinExpand extends React.Component {
    constructor(){
        super()
        this.state = {
            dadosEstaticos : [],
            _tempoFila: -1,
            _like: 0,
        }
    }

    componentDidMount = () => {
        const selecionado = this.props.navigation.getParam('_selecionado', 0)

        fetch('https://blooming-fortress-34861.herokuapp.com/places/' + selecionado)
        .then(response => response.json())
        .then((data) => {
            this.setState({ dadosEstaticos : data[0] });
        })
        .catch((error) => {
            alert('Erro' + error)
          console.error(error);
        });

        fetch('https://blooming-fortress-34861.herokuapp.com/times/' + selecionado)
            .then(response => response.json())
            .then(data => this.setState({
                _tempoFila: data.tempo,
                _like: data.curtidas,
            }))
            .catch((error) => {
                alert('Erro' + error)
                console.error(error);
            });
    }

    receberBack = () => {
        this.props.navigation.navigate('Mapa')
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={{ uri: this.state.dadosEstaticos.imagem }}
                    style={styles.imageContainer}
                />
                <Title dados = {this.state.dadosEstaticos}/>
                <InfoReduz tempoFila = {this.state._tempoFila} like = {this.state._like}/>
                <InfoExpand dados = {this.state.dadosEstaticos}/>
                <Voltar enviarBack = {this.receberBack}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageContainer: {
        width: '100%', 
        height: 180,
    },
})
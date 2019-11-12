import React from 'react'
import { View, Image } from 'react-native'

export default class ColorManager extends React.Component {
    constructor() {
        super()
        this.state = {
            tempo: -1,
        }
      }

    componentDidMount() {
        fetch('https://blooming-fortress-34861.herokuapp.com/times/' + this.props.id)
            .then(response => response.json())
            .then(data => this.setState({ tempo: data.tempo }))
            .catch((error) => {
                alert('Erro' + error)
                console.error(error);
            });
    }
    
    render(){
        if(this.state.tempo >= 0 && this.state.tempo < 15){
            return (
                <Image source={require('../Imagens/pinVerde.png')} /> //Verde - LimeGreen
            )
        }
        if(this.state.tempo >= 15 && this.state.tempo < 45){
            return (
                <Image source={require('../Imagens/pinAmarelo.png')} /> //Amarelo - Gold
            )
        }  
        if(this.state.tempo >= 45){
            return (
                <Image source={require('../Imagens/pinVermelho.png')} /> //Vermelho
            )
        }
        if(this.state.tempo == -1){
            return (
                <Image source={require('../Imagens/pinCinza.png')} /> //Imagem de carregamento
            )
        }
    }
}
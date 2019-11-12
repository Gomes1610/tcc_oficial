import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles'
import Header from './Header/index'
import InfoTime from './InfoTime/index'
import ConfirmTime from './ConfirmTime/index'
import BottomButton from './BottomButton/index'
import SideColor from './SideColor/index'

export default class PinReduz extends Component {
  constructor(){
    super()
    this.state = {
        _nome: '...',
        _tempoFila: -1,
        _like: 0
    }
}

componentDidMount() {
    fetch('https://blooming-fortress-34861.herokuapp.com/places/' + this.props.selecionado)
    .then(response => response.json())
    .then(data => this.setState({ 
        _nome: data[0].nome,
        //_tempoFila: data[0].tempoFila,
    }))
    .catch((error) => {
        alert('Erro' + error)
      console.error(error);
    });


    fetch('https://blooming-fortress-34861.herokuapp.com/times/' + this.props.selecionado)
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

goInfo = () => {
  //Por essa tela, o PinReduz, ser sobreposta à tela Mapa, 
  //a forma de usar o react navigation para ela é diferente.
  //Na tela Mapa, ao chamar a tag <PinReduz />, 
  //deve-se passar como parametro a constante navigate 
  //para dar ao componente PinReduz acesso ao react navigation.
  this.props._navigate('Info', {_selecionado: this.props.selecionado})
  // this.props._replace('Info', {_selecionado: this.props.selecionado})
}

goExpand = () => { 
  this.props._navigate('PinExpandido', {_selecionado: this.props.selecionado})
}


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Header nome = {this.state._nome}/>
          <InfoTime tempoFila = {this.state._tempoFila}/>
          <ConfirmTime like = {this.state._like}/>
          <BottomButton acessarInfo = {this.goInfo} acessarExpand = {this.goExpand}/>
        </View>
        <SideColor tempoFila = {this.state._tempoFila}/>
      </View>
    );
  }
}

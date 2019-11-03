import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import styles from './styles';

export default class SecondQuest extends Component {

enviarTempo = (dados) => {
  this.props.enviarDadosTempo(dados)
}

enviarComando = () => {  
  this.props.acionarSubida()
  ToastAndroid.show('Obrigado! Curta sua promo! :D', ToastAndroid.SHORT);
}

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.font}>Quanto tempo de fila?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.text_input}
            keyboardType={"numeric"}
            placeholder="Ex: 25"
            placeholderTextColor={'#3e92a1'}
            onChangeText={(dados) => this.enviarTempo(dados)}
          />
          <TouchableOpacity
          style={styles.button}
          onPress={() => this.enviarComando()}
          >
            <Text style={styles.font_button}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

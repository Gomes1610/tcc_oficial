import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles'

export default class Voltar extends Component {
  
  enviarComando = () => {
    this.props.enviarBack()
  }

  render() {
    return (
        <View style={styles.container}>
            <TouchableOpacity
            style={styles.button}
            onPress={() => this.enviarComando()}
            >
                <Text style={styles.font}> Voltar </Text>
            </TouchableOpacity>
        </View>
    );
  }
}

import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

export default class SecondQuest extends Component {

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
          />
          <TouchableOpacity
          style={styles.button}
          >
            <Text style={styles.font_button}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

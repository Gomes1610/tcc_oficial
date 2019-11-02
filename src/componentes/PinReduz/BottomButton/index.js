import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles'

export default class BottomButton extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Botão aqui</Text>
      </View>
    );
  }
}
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles'

export default class Confirm extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.font}> Confirme o tempo abaixou ou infrome um novo</Text>
      </View>
    );
  }
}

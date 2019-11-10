import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles'

export default class BottomButton extends Component {

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.acessarInfo()}
        >
          <Text style={styles.fonte}>Informar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.acessarExpand()}
        >
          <Text style={styles.fonte}>Mais</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
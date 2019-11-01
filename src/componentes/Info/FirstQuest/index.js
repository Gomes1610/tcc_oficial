import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default class FirstQuest extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.font}> Você ficará nesta fila? </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
          style={styles.button}
          //onPress={() => this.setState({ _permanencia: true })}
          >
            <Text style={styles.font_button}>
              Sim
          </Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.button}
          //onPress={() => this.props.navigation.replace('Mapa')}
          >
            <Text style={styles.font_button}>
              Não
          </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles'
import { Icon } from 'react-native-elements'

export default class InfoTime extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Icon
          name='clock-outline'
          type='material-community'
          size={21}
        />
        <Text style={styles.textTitle}>Tempo de fila: </Text>
        <Text style={styles.textInfo}>{(this.props.tempoFila == -1 ? '...' : this.props.tempoFila + ' minutos')}</Text>
      </View>
    );
  }
}
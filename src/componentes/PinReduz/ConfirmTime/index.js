import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles'
import { Icon } from 'react-native-elements'

export default class ConfirmTime extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Icon
          name='thumbs-up'
          type='font-awesome'
          size={22}
        />
        <Text style={styles.font}>5</Text>
        <Icon
          name='thumbs-down'
          type='font-awesome'
          size={22}
        />
        <Text style={styles.font}>0</Text>
        <Text style={styles.font}>última atualização</Text>
      </View>
    );
  }
}
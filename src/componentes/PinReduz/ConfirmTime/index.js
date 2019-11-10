import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles'
import { Icon } from 'react-native-elements'

export default class ConfirmTime extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.positive}>
          <Icon
            name='thumbs-up'
            type='font-awesome'
            size={20}
          />
          <Text style={styles.font}>5</Text>
        </View>
        <View style={styles.negative}>
          <Icon
            name='thumbs-down'
            type='font-awesome'
            size={20}
          />
          <Text style={styles.font}>1</Text>
        </View>
      </View>
    );
  }
}
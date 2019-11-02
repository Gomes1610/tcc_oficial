import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles'
import { Icon } from 'react-native-elements'

export default class Header extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Icon 
        name='map-marker'
        type='material-community'
        size={21}
        />
        <Text style={styles.text}>Titulo</Text>
      </View>
    );
  }
}

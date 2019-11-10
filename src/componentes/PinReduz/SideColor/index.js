import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles'
import GerenteCores from '../../GerenteCores'

export default class SideColor extends Component {

  render() {
    return (
      <View style={[styles.container,{backgroundColor: GerenteCores(this.props.tempoFila)[1]}]} />
    );
  }
}

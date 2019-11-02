import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles'
import Header from './Header/index'
import InfoTime from './InfoTime/index'
import ConfirmTime from './ConfirmTime/index'
import BottomButton from './BottomButton/index'
import SideColor from './SideColor/index'

export default class PinReduz extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Header />
          <InfoTime />
          <ConfirmTime />
          <BottomButton />
        </View>
        <SideColor />
      </View>
    );
  }
}

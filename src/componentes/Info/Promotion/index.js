import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './style'
import QRCode from 'react-native-qrcode-svg'

export default class Promotion extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.font}>Promoção do dia:</Text>
        <Text style={styles.font_promotion}>Nenhuma</Text>
        <QRCode
          value={'Nenhuma'}
          size={150}
        />
      </View>
    );
  }
}

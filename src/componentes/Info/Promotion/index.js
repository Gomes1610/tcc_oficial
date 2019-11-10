import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './style'
import QRCode from 'react-native-qrcode-svg'

export default class Promotion extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.font}>Promoção do dia:</Text>
        <Text style={styles.font_promotion}>{this.props.description}</Text>
        <View style={styles.qrcodeContainer}>
          {this.props.status && (
            <QRCode
              value={this.props.description}
              size={160}
            />
          )}
        </View>
      </View>
    );
  }
}

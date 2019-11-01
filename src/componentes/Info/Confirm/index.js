import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles'
import { Icon } from 'react-native-elements'

export default class Confirm extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.font}> Este tempo esta correto?</Text>
        <View style={styles.tempoContainer}>
          <Icon
            name='map-marker'
            type='material-community'
            size={30}
          />
          <Text style={styles.font_tempo}>{/*Colocar tempo atua do pin selecionado aqui*/} 50 minutos</Text>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <Icon
              name='thumbs-up'
              type='font-awesome'
              size={30}
              reverse
              color='#3e92a1'
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name='thumbs-down'
              type='font-awesome'
              size={30}
              reverse
              color='#3e92a1'
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

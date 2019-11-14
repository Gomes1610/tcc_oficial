import React from 'react'
import MapView from 'react-native-maps';
import { Text, View, StyleSheet, Image, Button, Dimensions } from 'react-native'
import { Icon } from 'react-native-elements'

import GerenteCores from './GerenteCores'
import PinReduzido from './PinReduzido'
import PinReduz from './PinReduz/index'
import ColorManager from './ColorManager'

export default class Mapa extends React.Component {

  constructor() {
    super()
    this.ShowHidePinReduzido = this.ShowHidePinReduzido.bind(this)
    this.GerentePinReduzido = this.GerentePinReduzido.bind(this)

    this.state = {
      status: false,
      pinSelect: {
        _nome: '', //Descontinuado
        _capMax: 0, //Descontinuado
        _capAtual: 0, //Descontinuado
        _tempoFila: 0, //Descontinuado
        _id: 0,
      },
      dados: [],
      statusCor: true,
    }
  }

  getPlaces = async () => {
    fetch('https://blooming-fortress-34861.herokuapp.com/places')
      .then(response => response.json())
      .then(data => this.setState({ dados: data }))
      .catch((error) => {
        alert('Erro' + error)
        console.error(error);
      });
  }

  componentDidMount() {
    // fetch('http://192.168.100.104:80/places') ////IP Gomes
    // fetch('http://192.168.0.6:80/places')  ////IP Gabriel
    //this.getPlaces()

    this.mapWillFocus = this.props.navigation.addListener('willFocus', () => {
      this.setState({ status: false })
      this.getPlaces()
      this.refresh1()
      this.timerRefresh1 = setInterval(()=> this.refresh1(), 30000)
      //alert('focado')
    });

    this.mapWillBlur = this.props.navigation.addListener('willBlur', () => {
      clearInterval(this.timerRefresh1)
      clearInterval(this.timerRefresh2)
      //alert('desfocado')
    });
  }

  componentWillUnmount() {
    this.mapWillFocus.remove()
    this.mapWillBlur.remove()
    clearInterval(this.timerRefresh1)
    clearInterval(this.timerRefresh2)
    //alert('morri')
  }

  refresh1 = () => {
    this.setState({
      statusCor: false
    })
    this.timerRefresh2 = setInterval(()=> this.refresh2(), 1)
  }

  refresh2 = () => {
    this.setState({
      statusCor: true
    })
    clearInterval(this.timerRefresh2)
  }

  ShowHidePinReduzido(event) {
    const key = event._targetInst.return.key;

    if (this.state.status) {
      this.setState({ status: false })
    }
    else {
      this.setState({ status: true })
      this.GerentePinReduzido(key)
    }
  }

  GerentePinReduzido = (key) => {
    const dados = this.state.dados;
    for (var i = 0; i < dados.length; i++) {
      if (dados[i]._id == key) {
        this.setState({
          pinSelect: {
            _nome: dados[i].nome, //Descontinuado
            _capMax: dados[i].capMax, //Descontinuado
            _capAtual: dados[i].capAtual, //Descontinuado
            _tempoFila: dados[i].tempoFila, //Descontinuado
            _id: key,
          }
        })
      }
    }
  }

  render() {
    const { navigate, replace } = this.props.navigation

    const pin = new Array()

    for (var i = 0; i < this.state.dados.length; i++) {
      pin.push(
        <MapView.Marker
          key={this.state.dados[i]._id}
          coordinate={{
            latitude: this.state.dados[i].latitude,
            longitude: this.state.dados[i].longitude,
          }}
          style={styles.markerContainer}
          onPress={(event) => this.ShowHidePinReduzido(event)}
        >
          <Text> {this.state.dados[i].nome} </Text>
          
          { this.state.statusCor && (
          <ColorManager id = {this.state.dados[i]._id}/>
          )}

          {/* <Image source={GerenteCores(this.state.dados[i].tempoFila)[0]} /> */}
        </MapView.Marker>
      )

    }


    return (
      <View style={styles.container}>
        <MapView
          style={styles.mapstyle}
          initialRegion={{
            latitude: -23.9646387,
            longitude: -46.3230136,
            latitudeDelta: 0.0042,
            longitudeDelta: 0.0031,
          }}
          customMapStyle={EstiloMapaCustomizado}
        >
          { //Todos os pins/marcadores
            pin
          }
        </MapView>

        {
          this.state.status &&
          (
            <PinReduz
              selecionado={this.state.pinSelect._id}
              _navigate={navigate}
            //_replace={replace}
            />
          )
        }

        <View style={styles.iconContainer}>
          <Icon
            name='refresh'
            type='material-community'
            size={17}
            reverse
            color='#3e92a1'
            onPress={() => this.refresh1()}
          />

          <Icon
            name='exit-to-app'
            type='material-community'
            size={17}
            reverse
            color='#3e92a1'
            onPress={() => this.props.navigation.goBack()}
          />
        </View>

      </View>
    )
  }
}

//////////////////////////Estilos///////////////////////////
const EstiloMapaCustomizado = [
  {
    "featureType": "poi",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  }
]

const {screenHeight, screenWidth} = Dimensions.get('window');

const styles = StyleSheet.create({
  
  container: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
  },

  mapstyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

  markerContainer: {
    flex: 1, 
    flexDirection: 'column', 
    alignItems: 'center',
  },

  miniContainer: {
    position: 'absolute',
    top: '65%',
    left: '7.5%',
    width: '85%',
    height: '25%',
    borderRadius: 15,
    backgroundColor: '#FA8072',
  },

  miniText: {
   color: 'black',
  },
  iconContainer: {
    position: 'absolute',
    top: 25,
    right: 10,
    flexDirection: 'row',
  },
})
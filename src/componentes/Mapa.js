import React from 'react'
import { MapView } from 'expo'
import { Text, View, StyleSheet, Image, Button } from 'react-native'

import GerenteCores from './GerenteCores'
import PinReduzido from './PinReduzido'

const dados = [
  {
    id: 1,
    nome : "Seven Kings Burgers N'Beers",
    latitude : -23.9649106,
    longitude : -46.3222352,
    capMax: 20,
    capAtual: 4,
  },
  {
    id: 2,
    nome : "Subway",
    latitude : -23.9642757,
    longitude : -46.3231924,
    capMax: 20,
    capAtual: 18,
  },
  {
    id: 3,
    nome : "Panificadora Vila Rica",
    latitude : -23.9647329,
    longitude : -46.3238177,
    capMax: 20,
    capAtual: 12,
  },
  {
    id: 4,
    nome : "Café Filomena",
    latitude : -23.9645135,
    longitude : -46.3214546,
    capMax: 20,
    capAtual: 12,
  },
  {
    id: 5,
    nome : "Madero Container",
    latitude : -23.9637359,
    longitude : -46.3229151,
    capMax: 20,
    capAtual: 3,
  },
  {
    id: 6,
    nome : "Giani Gastronomia",
    latitude : -23.9646434,
    longitude : -46.3206909,
    capMax: 20,
    capAtual: 19,
  },
]

export default class Mapa extends React.Component {
  
  constructor(){
    super()
    this.ShowHidePinReduzido = this.ShowHidePinReduzido.bind(this)
    this.GerentePinReduzido = this.GerentePinReduzido.bind(this)

    this.state = {
      status:false,
      pinSelect: {
        _nome: '',
        _capMax: 0,
        _capAtual: 0,
      },
    }
  }
  
  ShowHidePinReduzido(_id){
    if(this.state.status){
      this.setState({status:false})
    } 
    else{
      this.setState({status:true})
      this.GerentePinReduzido(_id)
    }
  }

  GerentePinReduzido = (_id) => {
    for(var i = 0; i < dados.length; i++){
      if(dados[i].id == _id){
        this.setState({
          pinSelect: {
            _nome: dados[i].nome,
            _capMax: dados[i].capMax,
            _capAtual: dados[i].capAtual,
          }
        })
      }
    }
  }

  render(){
    const {navigate} = this.props.navigation

    const pin = new Array()

    for(var i = 0; i < dados.length; i++)
    {
      pin.push(
        <MapView.Marker
        key = {i + 1}
        coordinate = {{
          latitude: dados[i].latitude,
          longitude: dados[i].longitude,
        }}
        style = {styles.markerContainer}
        onPress = {this.ShowHidePinReduzido.bind(this, dados[i].id)}
        >
          <Text> {dados[i].nome} </Text>
          <Image source = {GerenteCores(dados[i].capMax,dados[i].capAtual)} />
        </MapView.Marker>
        )
       
    }
  

    return(
      <View style = {styles.container}>
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
          
      
        { //Pin Reduzido e manipulação Show/Hide
          this.state.status && (
          <PinReduzido 
            nome={this.state.pinSelect._nome}
            capMax={this.state.pinSelect._capMax}
            capAtual={this.state.pinSelect._capAtual}
            _navigate={navigate}
          />
          )
        } 
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

})
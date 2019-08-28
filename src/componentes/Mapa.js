import React from 'react'
import { MapView } from 'expo'
import { Text, View, StyleSheet, Image, Button } from 'react-native'

import GerenteCores from './GerenteCores'

// const dados = [
//   {
//     nome : "Seven King",
//     latitude : -23.9649106,
//     longitude : -46.3222352,
//     capMax: 20,
//     capAtual: 4
//   },
//   {
//     nome : "Subway",
//     latitude : -23.9642757,
//     longitude : -46.3231924,
//     capMax: 20,
//     capAtual: 18
//   },
//   {
//     nome : "Panificadora Vila Rica",
//     latitude : -23.9647329,
//     longitude : -46.3238177,
//     capMax: 20,
//     capAtual: 12
//   },
// ]

export default class Mapa extends React.Component {
  
  constructor(){
    super()

    this.state = {
      status:false,
      dados:[] //Locais armazenados no banco
    }
  }
  
  //Carrega os locais armazenados no banco
  componentDidMount() {
    fetch('http://192.168.0.6:80/places')
    .then(response => response.json())
    .then(data => this.setState({ dados: data }) )
    .catch((error) => {
        alert('Erro' + error)
      console.error(error);
    });
  }
     
  ShowHideViewComponent = () => {
    if(this.state.status == true){
      this.setState({status:false})
    } 
    else{
      this.setState({status:true})
    }
  }

  render(){
    const {navigate} = this.props.navigation
    const {dados} = this.state;    
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
        onPress = {this.ShowHideViewComponent}
        > 
          <Text> {dados[i].nome} </Text>
          <Image source = {(GerenteCores(dados[i].capMax, dados[i].capAtual))} />
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
        {
          pin
        }    
        </MapView>
          
      
        { //Pin Reduzido e manipulação Show/Hide
          this.state.status && (
          <View style={styles.miniContainer}>
            <View style = {{flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', margin: 10 }}>
              <Text>Seven Kings</Text>
            </View>
            <View style = {{flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', margin: 10 }}>
              <Text style={styles.miniText}>Pin Vermelho: Intenso movimento</Text>
              <Text style={styles.miniText}>Tempo médio: de 30 a 45 minutos</Text>
              <Button style = {{backgroundColor: 'white'}} onPress={() => navigate('PinExpandido')} title = {'+'}/>
            </View>
          </View>
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

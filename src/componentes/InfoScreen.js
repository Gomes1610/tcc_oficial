import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { StyleSheet } from 'react-native'
import QRCode from 'react-native-qrcode-svg'

export default class InfoScreen extends React.Component {

    constructor(){
        super()
        this.state = {
            promocao: 'Nenhuma',
            qr_visivel: false,
            permanencia: false,
            tempo: 0,
        }
    }

    receberTempo = async () => {
        const _selecionado = this.props.navigation.getParam('_selecionado', 0) //Pin selecionado
        // fetch('http://192.168.100.104/places/tempo/'+ _selecionado, { ////IP Gomes
        // fetch('http://192.168.0.6:80/places/tempo/'+ _selecionado, { //// IP Gabriel
        fetch('https://blooming-fortress-34861.herokuapp.com/places/tempo/' + _selecionado, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({                
                "tempoFila": this.state.tempo,
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({qr_visivel:true})
                // this.props.navigation.replace('Mapa')
            })
            .catch((error) => {
                alert('Erro' + error)
                console.error(error);
            });


        // _selecionado possui o id do pin selecionado para dar a informação. Necessário pra quando for atualizar.
        // alert(_selecionado) //lembrando que é o mesmo id do banco
    }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
            <Text style={styles.font} >Quanto tempo de fila?</Text>
            <View style={styles.time_view}>
                <TextInput
                    style={styles.time_input}
                    keyboardType={"numeric"}
                    placeholder="minutos"
                    placeholderTextColor={'white'}
                    onChangeText={(minutes) => this.setState({tempo:minutes})}
                />
                <TouchableOpacity
                  style={styles.button}
                  onPress={this.receberTempo}
                >
                    <Text style={styles.font_button}>OK</Text>
                </TouchableOpacity>
            </View>
        </View>

        <View style={styles.inputContainer}>
            <Text style={styles.font}> Você ficará nesta fila? </Text>
            <View style={styles.wait_view}>
              <TouchableOpacity
              style={styles.button}
              onPress={() => this.setState({ _permanencia: true })}
              >
                <Text style={styles.font_button}>
                  Sim
              </Text>
              </TouchableOpacity>
              <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.replace('Mapa')}
              >
                <Text style={styles.font_button}>
                  Não
              </Text>
              </TouchableOpacity>
            </View>
        </View>

        <View style={styles.container}>
            <Text style={styles.font}>Promoção do dia: </Text>
            <Text style={styles.font}>{this.state.promocao}</Text>
            
            { //Controle da visibilidade QRCode
                this.state.qr_visivel &&
                (
                    <View style={styles.qrcode_view}>
                        <QRCode 
                            value={this.state.promocao}
                            size={200}
                        />
                    </View>
                )
            }
        </View>




        {/* <View >
          <TextInput
            style={}
            keyboardType={"numeric"}
            placeholder="Ex: 25"
            placeholderTextColor={'#3e92a1'}
          />
          <TouchableOpacity
          style={}
          >
            <Text style={}>OK</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    );
  }
}



const styles = StyleSheet.create({
    container: {        
        flex:1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        alignItems: 'center',
        backgroundColor: '#3e92a1',
        paddingTop:15
    },
    font: {
        marginVertical:5,
        fontSize: 20,
        fontWeight: 'bold',
    },  
    inputContainer: {
        paddingTop: 15,
        alignItems: 'center',
    },
    wait_view:{
        flexDirection: 'row'
    },
    time_view:{
        flexDirection:'row',
        justifyContent:'center',
    },
    time_input: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'white',
        paddingHorizontal: 5,
        width: 100,
        height:40,
        marginHorizontal: 5,
        color:'white',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        fontSize: 12,
        fontWeight: 'bold',
        textAlign:'center'
    },
    qrcode_view:{
        marginVertical: 10,
    },
    button: {
        backgroundColor: '#3e92a1',
        width: 60,
        height:40,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 10,
        marginHorizontal:5
    },
    font_button: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

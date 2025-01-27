/*
Este código cria uma tela com diversos botões para que o usuário selecione 
qual informação quer passar para o aplicativo.
*/
import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground, TextInput } from 'react-native'
import QRCode from 'react-native-qrcode-svg'

function Node(key, value){
    this.name = key;
    this.value = value;
    this.next = null;
}

function normalStringify (jsObject) {
    // this will generate an error when trying to serialize
    // an object with cyclic references
    return JSON.stringify(jsObject);
}

export default class Informante extends React.Component{
    constructor(){
        super()
        this.state = {
            promocao: 'Nenhuma',
            qr_visivel: false,
            _permanencia: false,
            _tempo: 0,
        }
    }

    /*
     setQRCodeVisible = () => {
         this.setState({qr_visivel: true})
     }
     */
    
    
     
    


    componentDidMount = () => {
        const selecionado = this.props.navigation.getParam('_selecionado', 0)
        // fetch('http://192.168.100.104:80/places') ////IP Gomes
        // fetch('http://192.168.0.6:80/places')  ////IP Gabriel
        fetch('https://blooming-fortress-34861.herokuapp.com/discounts/places/' + selecionado)
        .then(response => response.json())
        .then((result) => {
            // alert(String(result[0].description))
            if(result == '[]'){
                alert('Não há promoções!')
                // this.setState({ promocao : String(result[0].description)});
            }
            else{
                // comentado pro desenvolvimento
                //this.setState({ promocao : String(result[0].description)});
            }
        })
        .catch((error) => {
            alert('Erro' + error)
          console.error(error);
        });
    }
    

    // btnSim = () =>{
    //     if(this.state.tempo == 0){
    //         alert("Por favor, informe o tempo para obter a promoção!")
    //     }
    //     else{
    //         this.setState({permanencia: true})
    //         this.sendInfo()
    //     }
    // }

    // btnNao = () =>{
    //     if(this.state.tempo == 0){
    //         alert("Por favor, informe o tempo para obter a promoção!")
    //     }
    //     else{
    //         this.setState({permanencia: false})
    //         this.sendInfo()
    //     }
    // }


    
    sendInfo = () => {
        if(this.state._permanencia == false){
            alert("Por favor, informe se permanecerá na fila")
        }
        if(this.state._tempo == 0){
            alert("Por favor, informe o tempo para obter a promoção!")
        }
        else
        {   
            this.setState({qr_visivel: true})            
            
            // const selecionado = this.props.navigation.getParam('_selecionado', 0) //Pin selecionado

            // var n1 = new Node("permanencia", this.state._permanencia);
            // var n2 = new Node("tempo", this.state._tempo);
            // // set up some cyclic references
            // n1.next = n2;
            
            // // serialize
            // var sData = normalStringify(n1);
            // //fetch('http://192.168.100.104:80/places/cap/'+ _selecionado, { ////IP Gomes
            // //fetch('http://192.168.0.6:80/places/cap/'+ _selecionado, { ////IP Gabriel
            // fetch('https://blooming-fortress-34861.herokuapp.com/places/info/' + selecionado, {
            //     method: 'PUT',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: sData
            //     // JSON.stringify({                
            //     //     permanencia : this.state._permanencia,
            //     //     tempo: this.state._tempo
            //     // })
            // })
            //     //.then((response) => response.json())
            //     .then((responseJson) => {
            //     //     // var place = JSON.stringify(responseJson);
            //     //     // alert(responseJson.capAtual)
            //     //     // if (place != '[]') {  
            //     //     // //     alert(place.nome+ ' atualizado!');
            //     //     //     const { navigate } = this.props.navigation;
            //     //     //     navigate('Mapa')
            //     //     // }
            //     //     // else {
            //     //     //     alert('Erro.');
            //     //     // }
            //     //     // this.props.navigation.replace('Mapa')
            //         alert("Obrigado!")
            // })
            //     .catch((error) => {
            //         alert('Erro' + error)
            //         console.error(error);
            //     });
                

        }
        // _selecionado possui o id do pin selecionado para dar a informação. Necessário pra quando for atualizar.
        // alert(_selecionado) //lembrando que é o mesmo id do banco
    }

    render() {

        return (
            <View>
                <ImageBackground
                    style={styles.imagem_container}
                    source={require('../Imagens/Luzes1.jpg')}
                />
                <View style={styles.container}>
                    <View style={styles.view_texto_primeira_pergunta}>
                        <Text style={styles.fonte_texto_primeira_pergunta}>Você ficará na fila?</Text>
                    </View>
                    <View style={styles.view_button_primeira_pergunta}>
                        <TouchableOpacity
                            style={styles.button_primeira_pergunta}
                            onPress={() => this.setState({ _permanencia: true })}

                        >
                            <Text>
                                Sim
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button_primeira_pergunta}
                            onPress={() => this.props.navigation.replace('Mapa')}
                        >
                            <Text>
                                Não
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.linha_horizontal, { top: '20%' }]} />
                    <View style={styles.view_texto_segunda_pergunta}>
                        <Text style={styles.fonte_texto_segunda_pergunta}>Qual é o tempo da fila?</Text>
                    </View>
                    <View style={styles.view_entrada_segunda_pergunta}>
                        <TextInput
                            style={styles.entrada_segunda_pergunta}
                            keyboardType={"numeric"}
                            placeholder="minutos"
                            placeholderTextColor={'gray'}
                            onChange={(minutes) => {
                                this.setState({ _tempo: minutes })
                            }}
                        />
                        <TouchableOpacity
                            style={styles.button_primeira_pergunta}
                            onPress={() => this.sendInfo()}

                        >
                            <Text>OK</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.linha_horizontal, { top: '37%' }]} />
                    <View style={styles.view_titulo_promocao}>
                        <Text style={styles.fonte_promocao}>
                            Promoção do dia:
                        </Text>
                    </View>

                    <View style={styles.view_texto_promocao}>
                        <Text
                            style={styles.fonte_promocao}
                        >

                            {this.state.promocao}
                        </Text>
                    </View>


                    { //Controle da visibilidade QRCode
                        this.state.qr_visivel &&
                        (
                            <View style={styles.QRCode_container}>
                                <QRCode
                                    value={this.state.promocao}
                                    size={150}
                                />
                            </View>
                        )
                    }
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    imagem_container: {
        width: '100%',
        height: '100%',
    },
    container: {
        position: 'absolute',
        top: '10%',
        left: '10%',
        width: '80%',
        height: '80%',
        backgroundColor: 'white',
        borderRadius: 10,
    },
    view_texto_primeira_pergunta: {
        position: 'absolute',
        top: '5.5%',
        left: '10%',
        width: '80%',
        height: '5%',
        //backgroundColor: 'red',
    },
    fonte_texto_primeira_pergunta: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    view_button_primeira_pergunta: {
        position: 'absolute',
        top: '12%',
        left: '10%',
        width: '80%',
        height: '5%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        //backgroundColor: 'yellow',
    },
    button_primeira_pergunta: {
        width: '47.5%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#DDDDDD',
    },
    linha_horizontal: {
        position: 'absolute',
        left: '10%',
        width: '80%',
        height: '0.5%',
        borderRadius: 10,
        backgroundColor: 'gray',
    },
    view_texto_segunda_pergunta: {
        position: 'absolute',
        top: '23%',
        left: '10%',
        width: '80%',
        height: '5%',

    },
    fonte_texto_segunda_pergunta: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    view_entrada_segunda_pergunta: {
        position: 'absolute',
        top: '28%',
        left: '10%',
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'center'
        //backgroundColor: 'green',
    },
    entrada_segunda_pergunta: {
        marginHorizontal: 5,
        alignContent: "center",
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        height: 40,
        width: 100,
    },
    view_titulo_promocao: {
        position: 'absolute',
        top: '40.25%',
        left: '10%',
        width: '80%',
        height: '5%',
        //backgroundColor: 'red'
    },
    view_texto_promocao: {
        position: 'absolute',
        top: '45.5%',
        left: '10%',
        width: '80%',
        height: '5%',
        alignItems: 'center',
        //backgroundColor: 'yellow'
    },
    fonte_promocao: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    QRCode_container: {
        position: 'absolute',
        top: '60%',
        left: '10%',
        width: '80%',
        alignItems: 'center',
        //backgroundColor: 'black'
    },
})

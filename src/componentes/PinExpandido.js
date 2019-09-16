import React from 'react'
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native'

export default class PinExpandido extends React.Component {
    constructor(){
        super()
        this.state = {
            place : [],
        }
    }

    componentDidMount = () => {
        const selecionado = this.props.navigation.getParam('_selecionado', 0)
        // fetch('http://192.168.100.104:80/places') ////IP Gomes
        // fetch('http://192.168.0.6:80/places')  ////IP Gabriel
        fetch('https://blooming-fortress-34861.herokuapp.com/places/' + selecionado)
        .then(response => response.json())
        .then((result) => {
            this.setState({ place : result[0] });
        })
        .catch((error) => {
            alert('Erro' + error)
          console.error(error);
        });
      }

    render(){
        return (
            //Dentro da ScrollView não é possível definir estilizações de tamanho e posicionamento verticais - height, top, bottom e etc - com porcentagem, 
            //pois essa tag torna a tela teoricamente infinita na vertical, sendo, portanto, matematicamente impossível usar porcentagens.
            <ScrollView /*style={{backgroundColor: 'gray'}}*/> 
                
                <Image source={require('../Imagens/Imagens_PinExpandido/Seven_Kings_PinExpandido.jpg')}
                style={styles.imagem_container}
                />
                <View style={styles.container_informacoes}>
                    <View style={styles.view_titulo_subtitulo}>
                        <Text style={styles.fonte_titulo}>{this.state.place.nome}</Text>
                        <Text style={styles.fonte_subtitulo}>{this.state.place.tipo}</Text>
                        {/* <Text style={styles.fonte_titulo}>Seven Kings Burgers N'Beers</Text>
                        <Text style={styles.fonte_subtitulo}>Hamburgueria</Text> */}
                    </View>
                    <View style={styles.view_pin_cor} />
                    <View style={styles.view_pin_informacoes}>
                        <Text style={styles.fonte_pin_informacao}>Pessoas no local: {this.state.place.capAtual}</Text>
                        <Text style={styles.fonte_pin_informacao}>Tempo médio da fila: {this.state.place.tempoFila} minutos</Text>
                    </View>
                    <View style={styles.view_informacoes_gerais}>
                        <Text style={styles.fonte_informacoes_gerais}>Endereço: {this.state.place.endereco}</Text>
                        <Text style={styles.fonte_informacoes_gerais}>Site: {this.state.place.site}</Text>
                        <Text style={styles.fonte_informacoes_gerais}>Telefone: {this.state.place.telefone}</Text>
                        <Text style={styles.fonte_informacoes_gerais}>Horário de Funcionamento: {this.state.place.hrAbertura} - {this.state.place.hrFechamento}</Text>
                        {/* <Text style={styles.fonte_informacoes_gerais}>Endereço: R. Dr. Lobo Viana, 22 - Boqueirão, Santos - SP, 11045-120</Text>
                        <Text style={styles.fonte_informacoes_gerais}>Facebook: https://www.facebook.com/SevenKingsBurger/</Text>
                        <Text style={styles.fonte_informacoes_gerais}>Telefone: (13) 3307-3836</Text>
                        <Text style={styles.fonte_informacoes_gerais}>Horário de Funcionamento: 13:00 - 00:00</Text> */}
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    imagem_container: {
        width: '100%', 
        height: 180,
    },
    container_informacoes: {
        position: 'relative',
        top: 10,
        left: '2.5%',
        width: '95%',
        //backgroundColor: 'black',
    },
    view_titulo_subtitulo: {
        width: '100%',
        height: 60,
        //backgroundColor: 'red',
    },
    fonte_titulo: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    fonte_subtitulo: {
        fontSize: 16,
    },
    view_pin_cor: {
        width: '100%',
        height: 20,
        borderRadius: 20,
        backgroundColor: 'green',
    },
    view_pin_informacoes: {
        width: '100%',
        height: 80,
        //backgroundColor: 'blue',
    },
    fonte_pin_informacao: {
        fontSize: 16,
    },
    view_informacoes_gerais: {
        width: '100%',
        height: 150,
        //backgroundColor: 'yellow',
    },
    fonte_informacoes_gerais: {
        fontSize: 16,
    },
})

/*
view_titulo_subtitulo: {
        position: 'relative',
        top: 10,
        left: '2.5%',
        width: '95%',
        height: 60,
        backgroundColor: 'red',
    },
    fonte_titulo: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    fonte_subtitulo: {
        fontSize: 14,
    },
    view_pin_cor: {
        position: 'relative',
        top: 10,
        left: '2.5%',
        width: '95%',
        height: 20,
        borderRadius: 20,
        backgroundColor: 'green',
    },
    view_pin_informacoes: {
        position: 'relative',
        top: 50,
        width: '100%',
        height: 100,
        backgroundColor: 'blue',
    },
*/
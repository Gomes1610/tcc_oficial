import React from 'react'
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native'
import GerenteCores from './GerenteCores'

export default class PinExpandido extends React.Component {
    constructor(){
        super()
        this.state = {
            dados : []
        }
    }

    componentDidMount = () => {
        const selecionado = this.props.navigation.getParam('_selecionado', 0)
        // fetch('http://192.168.100.104:80/places') ////IP Gomes
        // fetch('http://192.168.0.6:80/places')  ////IP Gabriel
        fetch('https://blooming-fortress-34861.herokuapp.com/places/' + selecionado)
        .then(response => response.json())
        .then((data) => {
            this.setState({ dados : data[0] });
        })
        .catch((error) => {
            alert('Erro' + error)
          console.error(error);
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={{ uri: this.state.dados.imagem }}
                    style={styles.imageContainer}
                />
                <View style={styles.infoContainer}>
                    <Text style={styles.fontTitulo}>{this.state.dados.nome}</Text>
                    <Text style={styles.font}>{this.state.dados.tipo}</Text>
                    <Text style={styles.font}>Tempo de fila: {this.state.dados.tempoFila}</Text>
                    <Text style={styles.font}>Endereço: {this.state.dados.endereco}</Text>
                    <Text style={styles.font}>Site: {this.state.dados.site}</Text>
                    <Text style={styles.font}>Telefone: {this.state.dados.telefone}</Text>
                    <Text style={styles.font}>Horário de Funcionamento: {this.state.dados.hrAbertura} - {this.state.dados.hrFechamento}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageContainer: {
        width: '100%', 
        height: 180,
    },
    infoContainer: {
        paddingTop: 10,
        paddingHorizontal: 25,
        //height: 375,
        //justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    fontTitulo: {
        fontSize: 20,
        fontWeight: 'bold',
        height: 30,
    },
    font: {
        fontSize: 16,
        borderTopWidth: 1,
        borderColor: 'gray',
        width: '100%',
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
    view_informacoes_gerais: {
        width: '100%',
        height: 150,
        //backgroundColor: 'yellow',
    },
})


/*

<View style={styles.container_informacoes}>
                    <View style={styles.view_titulo_subtitulo}>
                        <Text style={styles.fonte_titulo}>{this.state.dados.nome}</Text>
                        <Text style={styles.fonte_subtitulo}>{this.state.dados.tipo}</Text>
                    </View>
                    <View style={styles.view_pin_cor} />
                    <View style={styles.view_pin_informacoes}>
                        <Text style={styles.fonte_pin_informacao}>Pessoas no local: {this.state.dados.capAtual}</Text>
                        <Text style={styles.fonte_pin_informacao}>Tempo médio da fila: {this.state.dados.tempoFila} minutos</Text>
                    </View>
                    <View style={styles.view_informacoes_gerais}>
                        <Text style={styles.fonte_informacoes_gerais}>Endereço: {this.state.dados.endereco}</Text>
                        <Text style={styles.fonte_informacoes_gerais}>Site: {this.state.dados.site}</Text>
                        <Text style={styles.fonte_informacoes_gerais}>Telefone: {this.state.dados.telefone}</Text>
                        <Text style={styles.fonte_informacoes_gerais}>Horário de Funcionamento: {this.state.dados.hrAbertura} - {this.state.dados.hrFechamento}</Text>
                    </View>
                </View>

*/



/*

import React from 'react'
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native'
import GerenteCores from './GerenteCores'

export default class PinExpandido extends React.Component {
    constructor(){
        super()
        this.state = {
            place : []
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
        const selecionado = this.props.navigation.getParam('_selecionado', 0)
        const {tempoFila} = this.state.place

        return (
            //Dentro da ScrollView não é possível definir estilizações de tamanho e posicionamento verticais - height, top, bottom e etc - com porcentagem, 
            //pois essa tag torna a tela teoricamente infinita na vertical, sendo, portanto, matematicamente impossível usar porcentagens.
            <ScrollView //style={{backgroundColor: 'gray'}}
            > 
                
                {// <Image source={require('../Imagens/Imagens_PinExpandido/Seven_Kings_PinExpandido.jpg')} }
                {// <Image source={{uri:'http://blooming-fortress-34861.herokuapp.com/places/imagem/'+ selecionado, width:32, height:32}} }
                <Image source={{uri:this.state.place.imagem}}
                style={styles.imagem_container}
                />
                <View style={styles.container_informacoes}>
                    <View style={styles.view_titulo_subtitulo}>
                        <Text style={styles.fonte_titulo}>{this.state.place.nome}</Text>
                        <Text style={styles.fonte_subtitulo}>{this.state.place.tipo}</Text>
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


*/
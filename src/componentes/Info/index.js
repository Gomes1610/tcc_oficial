import React from 'react'
import { View, ScrollView } from 'react-native'
import styles from './styles'
import Title from './Title/index'
import FirstQuest from './FirstQuest/index'
import SecondQuest from './SecondQuest/index'
import Promotion from './Promotion/index'
import Confirm from './Confirm/index'
import Voltar from './Back/index'

export default class Info extends React.Component{
    constructor() {
        super()
        this.state = {
           permanencia: false,
           tempo: 0,
        }
    }


    subirTempo = async () => {
        const _selecionado = this.props.navigation.getParam('_selecionado', 0)
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
                //alert("subiu")
            })
            .catch((error) => {
                alert('Erro' + error)
                console.error(error);
            });
    }

    receberPermanencia = (dados) => {
        this.setState({permanencia: dados})

    }

    receberTempo = (dados) => {
        this.setState({tempo: dados})
    }

    receberBack = () => {
        this.props.navigation.replace('Mapa')
    }

    render(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <Title />
                    <FirstQuest enviarDadosPermanencia = {this.receberPermanencia}/>
                    <Confirm />
                    <SecondQuest enviarDadosTempo = {this.receberTempo} acionarSubida = {this.subirTempo} />
                    <Promotion />
                    <Voltar enviarBack = {this.receberBack}/>
                </View>
            </ScrollView>
        )
    }
}

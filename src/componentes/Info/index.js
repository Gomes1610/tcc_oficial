import React from 'react'
import { View, ScrollView, KeyboardAvoidingView } from 'react-native'
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
           idtempoAtual: "",
           tempoAtual: -1,
           tempoNovo: 0,
           qrCode_state: false,
           firstQuest_state:false,
           secondQuest_state: false,
           _description: '...',
        }
    }


    componentDidMount() {
        //////////////////Obter tempoAtual
        const _selecionado = this.props.navigation.getParam('_selecionado', 0)
        fetch('https://blooming-fortress-34861.herokuapp.com/times/' + _selecionado)
        .then(response => response.json())
        .then(data => this.setState({ 
            idtempoAtual: data._id,
            tempoAtual: data.tempo
        }))
        .catch((error) => {
            alert('Erro' + error)
          console.error(error);
        });

        //////////////////Obter descrição do desconto
        fetch('https://blooming-fortress-34861.herokuapp.com/discounts/places/' + _selecionado)
        .then(response => response.json())
        .then((data) => {
            if(data.length == 0){
                alert('Não há promoções!')
            }
            else if (data.length > 0 && data[0].description == ''){
                alert('Não há promoções!')
            } else {
                this.setState({ _description: data[0].description })
            }

        })
        .catch((error) => {
            alert('Erro' + error)
          console.error(error);
        });
    }

    subirLike = async () => {
        const _selecionado = this.props.navigation.getParam('_selecionado', 0)
        // fetch('http://192.168.100.104/places/tempo/'+ _selecionado, { ////IP Gomes
        // fetch('http://192.168.0.6:80/places/tempo/'+ _selecionado, { //// IP Gabriel
        
        fetch('https://blooming-fortress-34861.herokuapp.com/times/' + this.state.idtempoAtual, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "tempo": this.state.tempoNovo,
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                //alert("subiu")
                this.liberarQrcode()
            })
            .catch((error) => {
                alert('Erro' + error)
                console.error(error);
            });
    }

    subirTempo = async () => {
        const _selecionado = this.props.navigation.getParam('_selecionado', 0)
        // fetch('http://192.168.100.104/places/tempo/'+ _selecionado, { ////IP Gomes
        // fetch('http://192.168.0.6:80/places/tempo/'+ _selecionado, { //// IP Gabriel
        
        fetch('https://blooming-fortress-34861.herokuapp.com/times/' + _selecionado, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "tempo": this.state.tempoNovo,
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                //alert("subiu")
                this.liberarQrcode()
            })
            .catch((error) => {
                alert('Erro' + error)
                console.error(error);
            });
    }

    receberPermanencia = (dados) => {
        this.setState({permanencia: dados})

    }

    receberTempoNovo = (dados) => {
        this.setState({tempoNovo: dados})
    }

    receberBack = () => {
        this.props.navigation.navigate('Mapa')
    }

    liberarQrcode = () =>{
        this.setState({
            qrCode_state: true
        })
    }
    
    
    liberarFirstQuest = () => {
        this.setState({
            firstQuest_state: true
        })
    }

    liberarSecondQuest = () => {
        this.setState({
            secondQuest_state: true
        })
    }

    render(){
        return(
            <KeyboardAvoidingView behavior="padding" enabled>
            <ScrollView>
                <View style={styles.container}>
                    <Title />
                    <FirstQuest enviarDadosPermanencia = {this.receberPermanencia} acionarTela= {this.liberarFirstQuest}/>
                    {this.state.firstQuest_state && (
                    <Confirm _tempoAtual = {this.state.tempoAtual} acionarLike = {this.subirLike} acionarTela= {this.liberarSecondQuest}/>
                    )}
                    {this.state.secondQuest_state && (
                    <SecondQuest enviarDadosTempo = {this.receberTempoNovo} acionarSubida = {this.subirTempo} />
                    )}
                    <Promotion description = {this.state._description} status = {this.state.qrCode_state}/>
                    <Voltar enviarBack = {this.receberBack}/>
                </View>
            </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}

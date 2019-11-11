import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

import Title from './Title/index'
import InfoReduz from './InfoReduz/index'
import InfoExpand from './InfoExpand/index'

export default class PinExpand extends React.Component {
    constructor(){
        super()
        this.state = {
            dados : []
        }
    }

    componentDidMount = () => {
        //const selecionado = this.props.navigation.getParam('_selecionado', 0)

        fetch('https://blooming-fortress-34861.herokuapp.com/places/' + '5d65e1e3a73c821e701f1c62')
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
                <Title dados = {this.state.dados}/>
                <InfoReduz dados = {this.state.dados}/>
                <InfoExpand dados = {this.state.dados}/>
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
})
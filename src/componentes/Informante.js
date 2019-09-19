/*
Este código cria uma tela com diversos botões para que o usuário selecione 
qual informação quer passar para o aplicativo.
*/
import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground, TextInput } from 'react-native'

export default class Informante extends React.Component{
    constructor(){
        super()

    }

    render(){

        const {navigate} = this.props.navigation

        return(
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
                        //onPress={}
                        >
                            <Text>
                                Sim
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={styles.button_primeira_pergunta}
                        //onPress={}
                        >
                            <Text>
                                Não
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.linha_horizontal, {top: '20%'}]} />
                    <View style={styles.view_texto_segunda_pergunta}>
                        <Text style={styles.fonte_texto_segunda_pergunta}>Qual é o tempo da fila?</Text>
                    </View>
                    <View style={styles.view_entrada_segunda_pergunta}>
                        <TextInput
                            placeholder={'Tempo'}
                            placeholderTextColor={'gray'}
                            //value={this.state._senha}
                            style={styles.entrada_segunda_pergunta}
                        />
                    </View>
                    <View style={[styles.linha_horizontal, {top: '43%'}]} />
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
    view_entrada_segunda_pergunta:{
        position: 'absolute',
        top: '28%',
        left: '10%',
        width: '80%',
        //backgroundColor: 'green',
    },
    entrada_segunda_pergunta: {
        margin: 10,
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        height: 40,
    },
})

/*

export default class Informante extends React.Component{
    constructor(){
        super()
    }

    render(){

        const {navigate} = this.props.navigation

        return(
            <View>
                <ImageBackground
                    style={styles.imagem_container}
                    source={require('../Imagens/Luzes1.jpg')}
                />
                <View style={styles.view_button}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigate('Ouvidoria', {status: 1, selecionado: this.props.navigation.getParam('_selecionado', 0)})}
                    >
                        <Text>Número de pessoas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigate('Ouvidoria', {status: 2, selecionado: this.props.navigation.getParam('_selecionado', 0)})}
                    >
                        <Text>Tempo da fila</Text>
                    </TouchableOpacity>
                
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
    view_button: {
        position: 'absolute',
        top: '25%',
        left: '10%',
        width: '80%',
        height: '50%',
        backgroundColor: 'white',
        borderRadius: 10,
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '75%',
        height: '25%',
        borderRadius: 10,
        backgroundColor: '#DDDDDD',
    },
})
*/
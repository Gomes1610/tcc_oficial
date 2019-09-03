import React from 'react'
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native'

export default class PinExpandido extends React.Component {
    constructor(){
        super()
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
                        <Text style={styles.fonte_titulo}>Seven Kings Burgers N'Beers</Text>
                        <Text style={styles.fonte_subtitulo}>Hamburgueria</Text>
                    </View>
                    <View style={styles.view_pin_cor} />
                    <View style={styles.view_pin_informacoes}>
                        <Text style={styles.fonte_pin_informacao}>Pessoas no local: ???</Text>
                        <Text style={styles.fonte_pin_informacao}>Tempo médio da fila: ???</Text>
                    </View>
                    <View style={styles.view_informacoes_gerais}>
                        <Text style={styles.fonte_informacoes_gerais}>Endereço: ???</Text>
                        <Text style={styles.fonte_informacoes_gerais}>Facebook: ???</Text>
                        <Text style={styles.fonte_informacoes_gerais}>Telefone: ???</Text>
                        <Text style={styles.fonte_informacoes_gerais}>Horários de Funcionamento: ???</Text>
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
        height: 100,
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
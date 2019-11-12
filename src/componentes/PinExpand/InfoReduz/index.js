import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'

export default class InfoReduz extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.timeContainer}>
                    <Icon
                        name='clock-outline'
                        type='material-community'
                        size={21}
                    />
                    <Text style={styles.fontNegrito}>Tempo de fila: </Text>
                    <Text style={styles.font}>{this.props.tempoFila} minutos</Text>
                </View>
                <View style={styles.confirmContainer}>
                    <View style={styles.positive}>
                        <Icon
                            name='thumbs-up'
                            type='font-awesome'
                            size={20}
                        />
                        <Text style={styles.font}>{this.props.like}</Text>
                    </View>
                    {/* <View style={styles.negative}>
                        <Icon
                            name='thumbs-down'
                            type='font-awesome'
                            size={20}
                        />
                        <Text style={styles.font}>1</Text>
                    </View> */}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        //backgroundColor: 'blue',
        //height: 80,
        width: '100%',
        paddingVertical: 20,
        paddingLeft: 20,
        borderBottomWidth: 1,
        borderColor: '#DDDDDD',
    },
    timeContainer: {
        flexDirection: 'row'
    },
    confirmContainer: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingLeft: 7,
    },
    font: {
        fontSize: 16,
    },
    positive: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 35,

    },
    fontNegrito: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    negative: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 50,
        paddingLeft: 15,
    },
})
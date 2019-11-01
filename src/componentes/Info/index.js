import React from 'react'
import { View } from 'react-native'
import styles from './styles'
import Title from './Title/index'
import FirstQuest from './FirstQuest/index'
import SecondQuest from './SecondQuest/index'
import Promotion from './Promotion/index'
import Confirm from './Confirm/index'

export default class Info extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Title />
                <FirstQuest />
                <Confirm />
                <Promotion />
            </View>
        )
    }
}

//<SecondQuest />

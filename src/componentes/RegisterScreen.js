import React, { Component } from 'react'
import { Alert, View, TextInput, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native'

// const URL_POST = "http://192.168.100.104:80/users" ////////URL da api para cadastrar usuário ////IP Gomes
// const URL_POST = "http://192.168.0.6:80/users" ////////URL da api para cadastrar usuário
const URL_POST = "https://blooming-fortress-34861.herokuapp.com/users";

export default class RegisterScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            login: '',
            password: '',
            email: '',
        };
    }
    onRegister() {
        const { firstName, lastName, login, password, email } = this.state;

        if (firstName == "" || lastName == "" || login == "" || password == "" || email == "") {
            Alert.alert('Erro! Preencha os campos!');
        }
        else {

            fetch(URL_POST, {
                method: 'post',
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify({
                    "firstName": firstName,
                    "lastName": lastName,
                    "login": login,
                    "email": email,
                    "password": password
                })
            })
                .then((json) => JSON.stringify(json))
                .then(function (data) {
                    console.log('Request succeeded with JSON response', data);
                })
                .catch(function (error) {
                    console.log('Request failed', error);
                });

            this.props.navigation.navigate('Login');
        }


    }
    render() {
        return (
            <View style={styles.container}>
                <KeyboardAvoidingView behavior="padding" enabled>
                    <View style={styles.registerform}>
                        <TextInput style={styles.input} //nome Input
                            placeholder="Nome"
                            returnKeyType="next"
                            onSubmitEditing={() => this.LastNameInput.focus()}
                            keyboardType="default"
                            numberOfLines={1}
                            onChangeText={(firstName) => this.setState({ firstName })}
                        />

                        <TextInput style={styles.input} //Sobrenome Input
                            placeholder="Sobrenome"
                            returnKeyType="next"
                            onSubmitEditing={() => this.LoginInput.focus()}
                            ref={(input) => this.LastNameInput = input}
                            keyboardType="default"
                            numberOfLines={1}
                            onChangeText={(lastName) => this.setState({ lastName })}
                        />

                        <TextInput style={styles.input} //Login Input
                            placeholder="Login"
                            returnKeyType="next"
                            onSubmitEditing={() => this.EmailInput.focus()}
                            ref={(input) => this.LoginInput = input}
                            keyboardType="default"
                            autoCapitalize="none"
                            numberOfLines={1}
                            onChangeText={(login) => this.setState({ login })}
                        />

                        <TextInput style={styles.input} //Email Input
                            placeholder="E-mail"
                            returnKeyType="next"
                            onSubmitEditing={() => this.PasswordInput.focus()}
                            ref={(input) => this.EmailInput = input}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={true}
                            numberOfLines={1}
                            onChangeText={(email) => this.setState({ email })}
                        />

                        <TextInput style={styles.input} //Senha Input
                            placeholder="Senha"
                            returnKeyType="go"
                            ref={(input) => this.PasswordInput = input}
                            keyboardType="numeric"
                            autoCorrect={false}
                            numberOfLines={1}
                            secureTextEntry
                            onChangeText={(password) => this.setState({ password })}
                        />

                        <TouchableOpacity
                            style={styles.buttoncontainer}
                            onPress={this.onRegister.bind(this)}
                        // onPress={() => this.props.navigation.navigate('Login')}
                        >
                            <Text style={styles.buttontext}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#3e92a1',
        justifyContent: 'center',
        alignItems: 'center'
    },
    registerform: {
        height: 375,
        width: 290,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 25,
        borderRadius: 20,
    },
    input: {
        paddingLeft: 20,
        height: 45,
        width: 250,
        fontSize: 16,
        borderColor: '#3e92a1',
        borderWidth: 1,
        borderRadius: 50,
        color: '#3e92a1'
    },
    buttoncontainer: {
        height: 45,
        width: 250,
        borderRadius: 50,
        backgroundColor: '#3e92a1',
        paddingVertical: 10,
        justifyContent: 'center'
    },
    buttontext: {
        textAlign: 'center',
        color: '#ecf0f1',
        fontSize: 20
    }
}


/*

render() {
        return (
            <View style={styles.container}>
                <View style={styles.registerform}>
                    <TextInput style={styles.input} //nome Input
                        placeholder="Nome"
                        returnKeyType="next"
                        onSubmitEditing={() => this.LastNameInput.focus()}
                        keyboardType="default"
                        numberOfLines={1}
                        onChangeText={(firstName) => this.setState({ firstName })}
                    />

                    <TextInput style={styles.input} //Sobrenome Input
                        placeholder="Sobrenome"
                        returnKeyType="next"
                        onSubmitEditing={() => this.LoginInput.focus()}
                        ref={(input) => this.LastNameInput = input}
                        keyboardType="default"
                        numberOfLines={1}
                        onChangeText={(lastName) => this.setState({ lastName })}
                    />

                    <TextInput style={styles.input} //Login Input
                        placeholder="Login"
                        returnKeyType="next"
                        onSubmitEditing={() => this.EmailInput.focus()}
                        ref={(input) => this.LoginInput = input}
                        keyboardType="default"
                        autoCapitalize="none"
                        numberOfLines={1}
                        onChangeText={(login) => this.setState({ login })}
                    />

                    <TextInput style={styles.input} //Email Input
                        placeholder="E-mail"
                        returnKeyType="next"
                        onSubmitEditing={() => this.PasswordInput.focus()}
                        ref={(input) => this.EmailInput = input}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={true}
                        numberOfLines={1}
                        onChangeText={(email) => this.setState({ email })}
                    />

                    <TextInput style={styles.input} //Senha Input
                        placeholder="Senha"
                        returnKeyType="go"
                        ref={(input) => this.PasswordInput = input}
                        keyboardType="numeric"
                        autoCorrect={false}
                        numberOfLines={1}
                        secureTextEntry
                        onChangeText={(password) => this.setState({ password })}
                    />

                    <TouchableOpacity
                        style={styles.buttoncontainer}
                        onPress={this.onRegister.bind(this)}
                    // onPress={() => this.props.navigation.navigate('Login')}
                    >
                        <Text style={styles.buttontext}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = {
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: '#ecf0f1',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    registerform: {
        // marginTop: 30,
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    input: {
        paddingLeft: 20,
        borderRadius: 50,
        height: 50,
        fontSize: 25,
        backgroundColor: 'white',
        borderColor: '#1abc9c',
        borderWidth: 1,
        marginBottom: 20,
        color: '#34495e'
    },
    buttoncontainer: {
        height: 50,
        borderRadius: 50,
        backgroundColor: '#1abc9c',
        paddingVertical: 10,
        justifyContent: 'center'
    },
    buttontext: {
        textAlign: 'center',
        color: '#ecf0f1',
        fontSize: 20
    }
}

*/
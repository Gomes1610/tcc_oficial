import React from 'react'
import { Text, Alert, View, StyleSheet, TouchableOpacity, TextInput, ImageBackground, Image, Keyboard } from 'react-native'

// const cadastros = [
//     {
//         usuario: "Lucas",
//         senha: 123,
//     },
//     {
//         usuario: "Gabriel",
//         senha: 456,
//     },
// ]


export default class LoginScreen extends React.Component {
    constructor() {
        super()
        this.state = {
            _usuario: '',
            _senha: '',
            altura_inferior: 0,
            usuario: {},
        }
    }

    handlePress = async () => {
        fetch('http://192.168.0.6:80/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "login": this.state._usuario,
                "password": this.state._senha
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                var user = JSON.stringify(responseJson)
                if (user != '[]') {
                    const { navigate } = this.props.navigation;
                    navigate('Mapa')
                }
                else {
                    alert('Usuário ou senhas inválido(s).');
                }
            })
            .then(() => {

            })
            .catch((error) => {
                alert('Erro' + error)
                console.error(error);
            });
    }

    componentWillMount() {

        ////////////////////Tratamento da manipulação da tela ao aparecer e desaparecer do traclado
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.subir_View);
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidHide', this.descer_View);
    }

    componentWillUnmount() {

        ////////////////////Tratamento da manipulação da tela ao aparecer e desaparecer do traclado
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }


    ////////////////////Tratamento da manipulação da tela ao aparecer e desaparecer do traclado
    subir_View = () => {
        this.setState({ altura_inferior: 72.5 })
    }
    descer_View = () => {
        this.setState({ altura_inferior: 0 })
    }

    ////////////////////Validação do Usuário e Senha
    validar = () => {
        const { navigate } = this.props.navigation
        for (var i = 0; i < cadastros.length; i++) {
            if (this.state._usuario == cadastros[i].usuario && this.state._senha == cadastros[i].senha) {
                navigate('Mapa')
            }
        }
    }

    ////////////////////Manutenção dos Textos Padrões
    apaga_texto_usuario_default = () => {
        if (this.state._usuario == 'Usuário') {
            this.setState({ _usuario: '' })
        }
    }

    apaga_texto_senha_default = () => {
        if (this.state._senha == 'Senha') {
            this.setState({ _senha: '' })
        }
    }

    escreve_texto_usuario_default = () => {
        if (this.state._usuario == '') {
            this.setState({ _usuario: 'Usuário' })
        }
    }

    escreve_texto_senha_default = () => {
        if (this.state._senha == '') {
            this.setState({ _senha: 'Senha' })
        }
    }

    ////////////////////Renderização
    render() {
        return (
            <View style={{ position: 'relative', bottom: this.state.altura_inferior, }}
            >
                <ImageBackground
                    source={require('../Imagens/Nebulosa2.jpg')}
                    style={{ width: '100%', height: '100%', opacity: 0.80 }}
                />
                <View style={styles.container}>
                    <View style={styles.view_Login}>
                        <Image
                            source={require('../Imagens/Icone_Avatar.png')}
                            style={{ width: 50, height: 50 }}
                        />
                        <Text style={styles.login}>
                            Login
                        </Text>
                    </View>
                    <View style={styles.view_Entradas}>
                        <TextInput //Entrada do Usuário
                            // value={this.state.usuario}
                            onChangeText={(text) => this.setState({ _usuario: text })}
                            // onFocus={this.apaga_texto_usuario_default}
                            // onBlur={this.escreve_texto_usuario_default}
                            // value={this.state._usuario}
                            style={styles.entradas}
                            placeholder="Usuário"
                            autoCapitalize="none"
                        />
                        <TextInput //Entrada da Senha 
                            // value={this.state.senha}
                            onChangeText={(text) => this.setState({ _senha: text })}
                            // onFocus={this.apaga_texto_senha_default}
                            // onBlur={this.escreve_texto_senha_default}
                            // value={this.state._senha}
                            secureTextEntry={true}
                            style={styles.entradas}
                            placeholder="Senha"
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={styles.view_Botoes}>
                        <TouchableOpacity
                            style={styles.botao_acessar}
                            onPress={this.handlePress}
                        >
                            <Text>
                                Acessar
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.botao_cadastrar}
                            onPress={() => this.props.navigation.navigate('Register')}
                        >
                            <Text>
                                Cadastrar
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

////////////////////Estilos
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: '25%',
        left: '10%',
        width: '80%',
        height: '50%',
        backgroundColor: 'white',
        borderRadius: 10,

    },
    view_Login: {
        position: 'relative',
        top: '12.5%',
        left: '41.25%'
    },
    login: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    view_Entradas: {
        position: 'relative',
        top: '20%',
    },
    entradas: {
        margin: 10,
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        height: 40,
    },
    view_Botoes: {
        position: 'relative',
        top: '21.25%',
        left: '2%',
        flex: 1,
        flexDirection: 'row',

    },
    botao_acessar: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        margin: 5,
        padding: 12.5,
        borderRadius: 10,
        width: '44.5%',
        height: '40%',
    },
    botao_cadastrar: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        margin: 5,
        padding: 12.5,
        borderRadius: 10,
        width: '44.5%',
        height: '40%',
    },
})
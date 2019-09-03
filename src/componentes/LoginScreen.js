import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, TextInput, ImageBackground, Image, Keyboard } from 'react-native'

const cadastros = [
    {
        usuario: "Lucas",
        senha: 123,
    },
    {
        usuario: "Gabriel",
        senha: 456,
    },
]


export default class LoginScreen extends React.Component{
    constructor(){
        super()
        this.state = {
            _usuario : '',
            _senha :  '',
            altura_inferior: 0,
        }
    }

    componentWillMount () {
        
        ////////////////////Tratamento da manipulação da tela ao aparecer e desaparecer do traclado
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.subir_View);
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidHide', this.descer_View);
      }
    
    componentWillUnmount () {

        ////////////////////Tratamento da manipulação da tela ao aparecer e desaparecer do traclado
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
      }
    
    
    ////////////////////Tratamento da manipulação da tela ao aparecer e desaparecer do traclado
    subir_View = () => {
        this.setState({altura_inferior: 72.5})
    }
    descer_View = () => {
        this.setState({altura_inferior: 0})
    }

    ////////////////////Validação do Usuário e Senha
    validar = () => {
        const {navigate} = this.props.navigation
        for(var i = 0; i < cadastros.length; i++){
            if(this.state._usuario == cadastros[i].usuario && this.state._senha == cadastros[i].senha){
            navigate('Mapa')
            }
        }
    }

    ////////////////////Renderização
    render(){
        return(
            <View style={{ position: 'relative', bottom: this.state.altura_inferior,}}
            >
                <ImageBackground
                    source={require('../Imagens/Restaurante3.jpg')}
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
                            onChangeText={(text) => this.setState({_usuario: text})}
                            placeholder={'Usuário'}
                            placeholderTextColor={'gray'}
                            value={this.state._usuario}
                            style={styles.entradas}
                        />
                        <TextInput //Entrada da Senha 
                            onChangeText={(text) => this.setState({_senha: text})}
                            placeholder={'Senha'}
                            placeholderTextColor={'gray'}
                            value={this.state._senha}
                            style={styles.entradas}
                        />
                    </View>
                    <View style={styles.view_Botoes}>
                        <TouchableOpacity 
                        style={styles.botao_acessar}
                        onPress={this.validar}
                        >
                            <Text>
                                Acessar
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={styles.botao_cadastrar}
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
    view_Entradas:{
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
import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Mapa from './src/componentes/Mapa'
import PinExpandido from './src/componentes/PinExpandido'
import LoginScreen from './src/componentes/LoginScreen'
import RegisterScreen from './src/componentes/RegisterScreen'
import Informante from './src/componentes/Informante'
import Ouvidoria from './src/componentes/Ouvidoria'

const MainNavigator = createStackNavigator({
  //O primeiro item desse objeto será a tela inicial
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    }
  },
  Informante: {
    screen: Informante,
    navigationOptions: {
      header: null,
    }
  },
  Mapa: {
    screen: Mapa,
    navigationOptions: {
      header: null,
    }
  },
  PinExpandido: {
    screen: PinExpandido,
    navigationOptions: {
      header: null,
    }
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: {
      header: null,
    }
  },
  Ouvidoria: {
    screen: Ouvidoria,
    navigationOptions: {
      header: null,
    }
  },
});

const App = createAppContainer(MainNavigator);

export default App

import React from 'react'
import {createStackNavigator, createAppContainer} from 'react-navigation';

import Mapa from './src/componentes/Mapa'
import PinExpandido from './src/componentes/PinExpandido'
import LoginScreen from './src/componentes/LoginScreen'


const MainNavigator = createStackNavigator({
  //O primeiro item desse objeto será a tela inicial
  LoginScreen: {
    screen: LoginScreen,
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
});

const App = createAppContainer(MainNavigator);

export default App

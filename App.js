import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Mapa from './src/componentes/Mapa'
import PinExpandido from './src/componentes/PinExpandido'
import LoginScreen from './src/componentes/LoginScreen'
import RegisterScreen from './src/componentes/RegisterScreen'
import Informant from './src/componentes/Informant'
import Ouvidoria from './src/componentes/Ouvidoria'
import Info from './src/componentes/Info/index'
import InfoScreen from './src/componentes/InfoScreen'
import PinReduz from './src/componentes/PinReduz/index'
import ScanScreen from './src/componentes/ScanScreen/index'
import PinExpand from './src/componentes/PinExpand/index'


const MainNavigator = createStackNavigator({
  //O primeiro item desse objeto será a tela inicial
  Login: {
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
  Info: {
    screen: Info,
    navigationOptions: {
      header: null,
    }
  },
  PinExpand: {
    screen: PinExpand,
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
  PinExpandido: {
    screen: PinExpandido,
    navigationOptions: {
      header: null,
    }
  },
  ScanScreen: {
    screen: ScanScreen,
    navigationOptions: {
      header: null,
    }
  },
  PinReduz: {
    screen: PinReduz,
    navigationOptions: {
      header: null,
    }
  },
  InfoScreen: {
    screen: InfoScreen,
    navigationOptions: {
      header: null,
    }
  },
  Informant: {
    screen: Informant,
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

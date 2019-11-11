import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'
import * as Permissions from 'expo-permissions'
import styles from './styles'
import Title from './Title/index'

export default class ScanScreen extends React.Component {
    constructor() {
        super()

        this.state = {
            hasCameraPermission: null,
            scanned: false,
            info: '',
        }
    }

    async componentDidMount() {
        this.getPermissionsAsync()
    }

    getPermissionsAsync = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    leitura = ({ data }) => {
        this.setState({ 
            scanned: true,
            info: data 
        })
        alert("Validado: " + data)
    }

    render() {
        const { hasCameraPermission, scanned } = this.state

        if (hasCameraPermission === null) {
            return (
                <View style={styles.preContainer}>
                    <Text style={styles.preFonte}>Solicitando permissão da câmera</Text>
                </View>
            )
        }
        else if (hasCameraPermission === false) {
            return (
                <View style={styles.preContainer}>
                    <Text style={styles.preFonte}>Sem acesso à câmera</Text>
                </View>
            )
        }
        else {
            return (
                <View style={styles.container}>
                    <Title />
                    <View style={styles.barContainer}>
                    <BarCodeScanner
                        onBarCodeScanned={scanned ? undefined : this.leitura}
                        style={styles.barCodeStyle}
                    />
                    </View>
                    {scanned && (
                        <View style={styles.containerButton}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => this.setState({ scanned: false })}
                            >
                                <Text style={styles.fontButton}>Escanear outra vez</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            )
        }
    }
}



/*
export default class ScanScreen extends React.Component{
    constructor() {
        super()

        this.state = {
            hasCameraPermission: null,
            scanned: false,
      }
    }
    
      async componentDidMount() {
        this.getPermissionsAsync()
      }
    
      getPermissionsAsync = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
      };
    
      render() {
        const { hasCameraPermission, scanned } = this.state
    
        if (hasCameraPermission === null) {
          return <Text>Requesting for camera permission</Text>;
        }
        if (hasCameraPermission === false) {
          return <Text>No access to camera</Text>;
        }
        return (
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
              //style={StyleSheet.absoluteFillObject}
              style={{ height: '50%', width: '50%', borderRadius: 20 }}
            />
    
            {scanned && (
              <Button title={'Tap to Scan Again'} onPress={() => this.setState({ scanned: false })} />
            )}
          </View>
        );
      }
    
      handleBarCodeScanned = ({ type, data }) => {
        this.setState({ scanned: true });
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
      };
    }
*/
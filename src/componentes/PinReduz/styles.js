import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: '7.5%',
        top: '65%',
        height: 160,
        width: '85%',
        backgroundColor: 'white',
        borderRadius: 20,
        elevation: 10, //Efeito de sombra
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },
    infoContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingHorizontal: 15,
        paddingVertical: 15,
    },
});

export default styles
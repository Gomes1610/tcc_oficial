import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: 200,
        width: 325,
        paddingVertical: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 25,
    },
    font: {
        fontSize: 20,
        fontWeight: 'bold',    
    },
    tempoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 150,
    },
    font_tempo: {
        fontSize: 20,
        fontWeight: 'bold',    
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 300,
    },
});

export default styles
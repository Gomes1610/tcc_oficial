import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: 325,
        paddingTop: 15,
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: 'white',
    },
    font: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        paddingTop: 15,
    },
    button: {
        backgroundColor: '#3e92a1',
        width: 100,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    font_button: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default styles
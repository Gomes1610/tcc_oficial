import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: 100,
        width: 325,
        paddingTop: 15,
        alignItems: 'center',
        borderRadius: 25,
    },
    font: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    inputContainer: {
        flexDirection: 'row',
        paddingTop: 15,
        justifyContent: 'space-around',
        width: '100%',
    },
    text_input: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#3e92a1',
        width: 150,
        paddingHorizontal: 5,
    },
    button: {
        backgroundColor: '#3e92a1',
        width: 100,
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
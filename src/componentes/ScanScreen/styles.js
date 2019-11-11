import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    preContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    preFonte: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: '#3e92a1',
    },
    barContainer: {
        paddingTop: 10,
    },
    barCodeStyle: {
        height: 450, 
        width: 450,
    },
    containerButton: {
        paddingTop: 10,
    },
    button: {
        width: 200,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
    },
    fontButton: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default styles
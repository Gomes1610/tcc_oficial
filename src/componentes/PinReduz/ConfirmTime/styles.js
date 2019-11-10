import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 5,
        justifyContent: 'space-between',
    },
    font: {
        fontSize: 14,
    },
    positive: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 35,

    },
    negative: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 50,
        paddingLeft: 15,
    },
});

export default styles
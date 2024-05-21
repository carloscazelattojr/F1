import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 5,
        height: 70,
        paddingHorizontal: 10,
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },

    position: {
        fontFamily: 'F1-Wide',
        width: 60,
        textAlign: 'center',
    },
    name: {
        fontFamily: 'F1-Bold',
        marginBottom: 5,
    },
    time: {
        fontSize: 12,
        backgroundColor: 'gainsboro',
        paddingVertical: 3,
        paddingHorizontal: 10,
        borderRadius: 10,
        overflow: 'hidden',
        color: 'dimgray',
        fontWeight: 'bold',
        marginTop: 5,
        fontFamily: 'F1-Bold',
    },

    driverImage: {
        height: 60,
        aspectRatio: 1,
        marginRight: 10,
        marginBottom: -10,
    },

});
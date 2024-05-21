import { ColorsApp } from '@/constants/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {},

    itemContainer: {
        padding: 10,
        margin: 5,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },

    datesContainer: {
        alignItems: 'center',
        padding: 10,
        marginRight: 10,
        borderRightWidth: 1,
        borderColor: 'gainsboro'
    },

    date: {
        fontFamily: 'F1-Regular',
    },

    month: {
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

    round: {
        color: ColorsApp.primary,
        fontFamily: 'F1-Regular',
    },

    country: {
        fontSize: 20,
        fontFamily: 'F1-Bold',
        marginVertical: 7,
    },

    countryFuture: {
        fontSize: 20,
        fontFamily: 'F1-Regular',
        marginVertical: 7,
    },

    description: {
        color: 'dimgray'
    },

    colorPrimary: {
        color: ColorsApp.primary,
    },

    colorSecondary: {
        color: ColorsApp.secondary,
    }


});
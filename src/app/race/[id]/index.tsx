import { useGlobalSearchParams } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useQuery, gql } from '@apollo/client';
import { Loading } from '@/components/Loading';

const query = gql`
    query MyQuery($id: Int) {
    races(id: $id) {
        response {
            id
            date
            season
            competition {
                name
                location {
                country
                }
            }
            circuit {
                image
                id
                name
            }
        }
    }
    }
`;


const RaceDetails = () => {

    const { id } = useGlobalSearchParams();
    const { data, loading } = useQuery(query, { variables: { id: id } });

    if (loading) {
        return <Loading />
    }

    const race = data.races.response[0];

    if (!race) {
        return <Text>Race not found!</Text>
    }

    return (
        <View style={styles.page}>
            <Text style={{ fontSize: 24, fontFamily: 'F1-Regular' }}>
                <Text style={{ fontFamily: 'F1-Bold' }}>{race.competition.location.country}</Text> {race.season}
            </Text>
            <Text>{race.circuit.name}</Text>
            <Image source={{ uri: race.circuit.image }} style={styles.image} resizeMode='contain' />
        </View>
    );
}

export default RaceDetails;


const styles = StyleSheet.create({
    page: {
        padding: 10,
    },
    image: {
        width: '100%',
        aspectRatio: 16 / 9,
        marginVertical: 15,

    }
})
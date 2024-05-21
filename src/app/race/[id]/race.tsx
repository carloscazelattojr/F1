import React from 'react';
import { FlatList, Text, View } from 'react-native';

import { RankingListItem } from '@/components/RankingListItem';
import { useGlobalSearchParams } from 'expo-router';
import { useQuery, gql } from '@apollo/client';
import { RaceEmpty } from '@/components/RaceEmpty';
import { Loading } from '@/components/Loading';

const query = gql`
    query MyQuery($id: String!) {
        raceRankings(race: $id) {
            response {
                time
                position
                team {
                    name
                    id
                }
                driver {
                    image
                    name
                    id
                }
            }
        }
    }
`;

const RaceRanking = () => {

    const { id } = useGlobalSearchParams();
    const { data, loading } = useQuery(query, { variables: { id: String(id) } })

    if (loading) {
        return <Loading />
    }

    const raceRanking = data?.raceRankings?.response;

    if (!raceRanking) {
        return <Text>Something went wrong!</Text>
    }

    return (
        <View >
            <FlatList
                data={raceRanking}
                renderItem={({ item }) => <RankingListItem item={item} />}
                ListEmptyComponent={() => <RaceEmpty />}

            />
        </View>
    );
}

export default RaceRanking;

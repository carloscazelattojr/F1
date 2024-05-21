import { RaceRanking, RaceRankingsProps } from '@/models/RaceRankingItemProps';
import React from 'react';
import { Image, Text, View } from 'react-native';

import raceRankingResponse from '@/data/race-rankings.json';
import { styles } from './styles';
const raceRakings = raceRankingResponse.data.raceRankings.response

type Props = {
    item: (typeof raceRakings)[0];
}

export function RankingListItem({ item }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.position}>{item.position}</Text>
            <Image source={{ uri: item.driver.image }} style={styles.driverImage} />
            <View style={{ flex: 1 }}>
                <Text style={styles.name}>{item.driver.name}</Text>
                <Text >{item.team.name}</Text>
            </View>
            <Text style={styles.time}>{item.time}</Text>
        </View>
    );
}


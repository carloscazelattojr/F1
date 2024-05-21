import React from 'react';
import { Pressable, Text, View } from 'react-native';
import dayjs from 'dayjs';

import { ColorsApp } from '@/constants/colors';
import { RaceItemProps } from '@/models/RaceItemProps';

import { Entypo } from '@expo/vector-icons';
import { styles } from './styles';
import { Link } from 'expo-router';

type Props = RaceItemProps & {
    round: number;
}

export function RaceListItem({ item, round }: Props) {

    const isFutureDate = dayjs(item.date).isBefore(dayjs(), 'day');

    return (
        <Link href={`/race/${item.id}`} asChild >
            <Pressable style={styles.itemContainer}>

                <View style={styles.datesContainer}>
                    <Text style={styles.date}>
                        {dayjs(item.date).subtract(2, 'days').format('DD')}-
                        {dayjs(item.date).format('DD')}
                    </Text>
                    <Text style={styles.month}>{dayjs(item.date).format('MMM')}</Text>
                </View>

                <View style={{ flex: 1 }}>
                    <Text style={[styles.round, isFutureDate ? styles.colorPrimary : styles.colorSecondary]}>Round {round}</Text>

                    <Text style={isFutureDate ? styles.country : styles.countryFuture}>{item.competition.location.country}</Text>

                    <Text style={styles.description}>Formula 1 {item.competition.name} {item.season} </Text>
                </View>

                <Entypo name='chevron-right' size={24} color={isFutureDate ? ColorsApp.primary : ColorsApp.secondary} />

            </Pressable>
        </Link>
    )
}
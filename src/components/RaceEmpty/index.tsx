import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

export function RaceEmpty() {
    return (
        <View style={styles.container}>
            <Text style={styles.info}>Waiting for the race to happen!</Text>
            <Text style={styles.info2}>More details after the race.</Text>

        </View>
    );
}
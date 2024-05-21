import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import { styles } from './styles';
import { ColorsApp } from '@/constants/colors';

export function Loading() {
    return (
        <View style={styles.container}>
            <ActivityIndicator style={styles.loading} size={40} color={ColorsApp.primary} />
        </View>
    );
}
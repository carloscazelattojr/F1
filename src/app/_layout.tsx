import { ColorsApp } from "@/constants/colors";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { ActivityIndicator } from "react-native";
import { StatusBar } from "expo-status-bar";
import ApolloClientProvider from "@/providers/ApolloClientProvider";

export default function RootLayout() {

    const [fontsLoaded] = useFonts({
        'F1-Black': require("@/fonts/Formula1-Black.ttf"),
        'F1-Bold': require('@/fonts/Formula1-Bold_web.ttf'),
        'F1-Italic': require('@/fonts/Formula1-Italic.ttf'),
        'F1-Regular': require('@/fonts/Formula1-Regular-1.ttf'),
        'F1-Wide': require('@/fonts/Formula1-Wide.ttf'),
    })

    if (!fontsLoaded) {
        return <ActivityIndicator />
    }
    return (
        <ApolloClientProvider>
            <Stack screenOptions={{
                headerStyle: { backgroundColor: ColorsApp.primary },
                headerTitleStyle: { color: '#fff', fontFamily: 'F1-Bold' },
                headerTitleAlign: 'center',
                headerTintColor: '#fff',


            }} >
                <Stack.Screen name="index" options={{ title: 'Racing' }} />
            </Stack>
            <StatusBar style="light" />

        </ApolloClientProvider>
    )
}
import { Stack, withLayoutContext } from "expo-router"

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ColorsApp } from "@/constants/colors";

const Tab = createMaterialTopTabNavigator();
const TopTabs = withLayoutContext(Tab.Navigator);

export default function RaceLayout() {
    return (
        <>
            <Stack.Screen options={{ title: 'Racing Details' }} />
            <TopTabs screenOptions={{
                tabBarLabelStyle: {
                    fontFamily: 'F1-Bold',
                },
                tabBarStyle: { backgroundColor: ColorsApp.primary },
                tabBarInactiveTintColor: 'gainsboro',
                tabBarActiveTintColor: '#fff',
                tabBarIndicatorStyle: {
                    backgroundColor: '#fff'
                }
            }} >
                <TopTabs.Screen name="index" options={{ title: "Details" }} />
            </TopTabs>
        </>
    )
}
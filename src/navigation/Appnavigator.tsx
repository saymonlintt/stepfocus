import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootStackParamList = {
    Home: undefined;
    GoalConfig: undefined;
    WalkTracker: undefined;
}

// minhas telas
import HomeScreen from '../screens/HomeScreen';
import GoalConfigScreen from '../screens/GoalConfigScreen';
import WalkTrackerScreen from '../screens/WalkTrackerScreen'

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>

            <Stack.Screen name="Home" component={HomeScreen} />

            <Stack.Screen name="GoalConfig" component={GoalConfigScreen} />

            <Stack.Screen name="WalkTracker" component={WalkTrackerScreen} />

        </Stack.Navigator>
    );
}
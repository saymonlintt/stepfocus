import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/Appnavigator';
import { GoalProvider } from './src/context/GoalContext';

export default function App() {
  return (
    <GoalProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </GoalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
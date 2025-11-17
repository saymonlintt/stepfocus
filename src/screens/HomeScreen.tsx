/*HomeScreen*/

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/Appnavigator';

type HomeNavProps = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
    const navigation = useNavigation<HomeNavProps>();

    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24 }}>Olá Mundo!</Text>

      <Button
        title="Ir para configurar meta"
        onPress={() => navigation.navigate('GoalConfig')}
      />

      <Button
        title="Ir para rastreador"
        onPress={() => navigation.navigate('WalkTracker')}
      />
    </View>
    )
}
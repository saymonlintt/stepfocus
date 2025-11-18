/*HomeScreen*/

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/Appnavigator';
import { useGoal } from '../context/GoalContext';

type HomeNavProps = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
    const navigation = useNavigation<HomeNavProps>();
    const { meta, progresso, appsBloqueados } = useGoal();

    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24 }}>Olá Mundo!</Text>

      <Text style={{ fontSize: 18, marginTop: 20 }}>
        Meta Diária: {meta} KM
      </Text>

      <Text style={{ fontSize: 16 }}>
        progresso atual: {progresso} KM
      </Text>

      <Text style={{ fontSize: 16}}>
        Apps Bloqueados: {appsBloqueados.length}
      </Text>

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
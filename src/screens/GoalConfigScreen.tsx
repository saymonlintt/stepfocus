/*GoalConfigScreen*/

/*HomeScreen*/

import { useState } from 'react'
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { useGoal } from '../context/GoalContext';

export default function GoalConfigScreen() {
    const { meta, setMeta } = useGoal();
    const { progresso, incrementarProgresso } = useGoal();

    const [value, setValue] = useState(String(meta || ""));

    function handleSave() {
        const km = Number(value)
        if (!isNaN(km) && km > 0) {
            setMeta(km);
            alert("Meta atualizada!")
        } else {
            alert("digite um valor válido (km).")
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Meta diária em (KM)</Text>

            <TextInput
                style={styles.input}
                value={value}
                onChangeText={setValue}
                keyboardType="numeric"
                placeholder="Ex: 5KM"
            />
            <View style={{marginBottom: 10}}>
                <Button title="salvar meta" onPress={handleSave}/>
            </View>
            <Button title="Testar Progresso +1" onPress={() => incrementarProgresso(+1)} />
        </View>
        
    )  
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, justifyContent: "center" },
    label: { fontSize: 18, marginBottom: 10},
    input: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 20,
    borderRadius: 8,
    fontSize: 18,
  },
});
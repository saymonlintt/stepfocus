import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@stepfocus_state";

export async function saveState(state: any) {
    try {
        const json = JSON.stringify(state);
        await AsyncStorage.setItem(STORAGE_KEY, json);
    } catch (error) {

    }
}

export async function loadState() {
    try {
        const json  = await AsyncStorage.getItem(STORAGE_KEY);
        return json ? JSON.parse(json) : null; 
    } catch (error) {
        return null;
    }
}

export async function clearState() {
    try {
        await AsyncStorage.removeItem(STORAGE_KEY);
    } catch (error) {

    }
}
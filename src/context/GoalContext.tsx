import { createContext, useContext, useEffect, useState } from "react";
import { saveState, loadState } from "../services/storageService";

type AppState = {
    meta: number;
    progresso: number;
    appsBloqueados: string[];
}

type GoalProviderProps = {
    children: React.ReactNode;
};

const GoalContext = createContext<any>(null);

export const GoalProvider = ({ children }: GoalProviderProps) => {
    const [state, setState] = useState<AppState>({
       meta: 5,
       progresso: 2,
       appsBloqueados: [ ]
    });

    // carregar estado salvo
    useEffect(() => {
        async function init() {
            const saved = await loadState();
            if(saved) {
                setState(saved);
            }
        }
        init();
    }, []);

    // salvar sempre que mudar
    useEffect(() => {
        saveState(state);
    }, [state]);

    const setMeta = (km: number) => {
        setState(prev => ({ ...prev, meta: km }));
    };

    const incrementarProgresso = (km: number) => {
        setState(prev => ({...prev, progresso: prev.progresso + km}));
    }

    const resetarProgresso = () => {
        setState(prev => ({...prev, progresso: 0}));
    };

    const adicionarAppBloqueado = (appId: string) => {
        setState(prev => ({
            ...prev,
            appsBloqueados: [...prev.appsBloqueados, appId]
        }));
    }

    const removerAppBloqueado = (appId: string) => {
        setState(prev => ({
            ...prev,
            appsBloqueados: prev.appsBloqueados.filter(a => a !== appId)
        }))
    }
    
    const metaBatida = () => {
        return state.progresso >= state.meta;
    }

    return (
        <GoalContext.Provider value={{
            ...state,
            setMeta,
            incrementarProgresso,
            resetarProgresso,
            adicionarAppBloqueado,
            removerAppBloqueado,
            metaBatida
        }}>
            {children}
        </GoalContext.Provider>
    )
};

export const useGoal = () => useContext(GoalContext);
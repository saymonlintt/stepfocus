Architecture

*Este documento registra as principais decisões de arquitetura tomadas durante o desenvolvimento do MVP do aplicativo.*

1. Escolha do Framework

Decisão: Utilizar Expo como base do aplicativo.
Motivo: Permite desenvolvimento rápido, hot reload, fácil integração com GPS e mapas. Ideal para um MVP.

2. Estrutura de Pastas

Decisão: Adotar uma estrutura dentro de /src contendo:

components/
screens/
services/
hooks/
utils/
context/
assets/

Motivo: Organiza o projeto de forma clara, facilita manutenção e escala sem complexidade desnecessária.

3. Armazenamento de Dados

Decisão: Utilizar AsyncStorage para persistir dados localmente.
Motivo: O MVP não terá login ou backend, então armazenamento local é suficiente e simples.

4. Biblioteca de Mapas

Decisão: Usar react-native-maps.
Motivo: É amplamente utilizada, madura, bem documentada e funciona com Expo.

5. Biblioteca de Localização/GPS

Decisão: Usar expo-location.
Motivo: Permite acessar a posição do usuário de maneira simples e precisa, suportando cálculo de distâncias.

6. Gerenciamento de Estado

Decisão: Usar Context API.
Motivo: A aplicação é pequena e não necessita de Redux ou Zustand neste estágio. O Context mantém o projeto simples e escalável para o MVP.

7. UI / Design System

Decisão: Usar NativeWind (Tailwind para React Native).
Motivo: Aumenta a velocidade de prototipação e permite estilos consistentes sem criar muitos arquivos de estilo.

8. Funcionamento Offline

Decisão: O aplicativo será totalmente offline.
Motivo: O MVP não exigirá servidor ou internet. Somente o GPS é necessário.

9. Tela de Bloqueio do App

Decisão: Utilizar uma tela de bloqueio que bloqueia completamente o app quando a meta do dia não foi atingida.
Motivo: Impede bypass e mantém o propósito principal do app de produtividade + exercício.

10. Sem Login / Sem Conta

Decisão: Não implementar sistema de autenticação.
Motivo: Reduz complexidade e não é necessário para validar o MVP.

11. Sem Anúncios

Decisão: Não adicionar qualquer sistema de monetização nesta fase.
Motivo: O foco é validação da funcionalidade principal, não monetização.

12. Sem Histórico Avançado

Decisão: Armazenar apenas as informações mínimas necessárias para a meta diária.
Motivo: Estatísticas e histórico completo não são essenciais para o MVP.
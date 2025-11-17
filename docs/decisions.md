1. Plataforma

Decisão: Focar exclusivamente em Android no MVP.
Motivo: O iOS não permite bloqueio de apps por limitações da sandbox. O Android permite via Accessibility + Overlay.

2. Método de Bloqueio de Apps

Decisão: Bloqueio será feito usando:

AccessibilityService → para detectar qual app está sendo aberto.

Overlay (draw over other apps) → para exibir a tela de bloqueio por cima do app selecionado.

Motivo:

É a forma mais viável no Android para controlar apps sem root.

Simples o suficiente para um MVP.

Evita a complexidade inicial do Device Admin + profile owner.

Consequência:
O StepFocus não fecha o app bloqueado; ele apenas impede o uso mostrando a tela de bloqueio por cima.

3. Apps Bloqueados

Decisão: O usuário deve escolher manualmente quais apps deseja bloquear dentro do StepFocus.

Motivo:

Evita bloquear apps essenciais por engano.

Dá ao usuário controle total.

Foca no objetivo principal: bloquear distrações.

Consequência:
O StepFocus nunca se bloqueia.
Somente apps escolhidos são monitorados.

4. Meta Diária

Decisão: A meta será sempre diária no MVP.
Motivo: Simplicidade e foco na principal funcionalidade.

Consequência:

Não haverá metas semanais ou mensais agora.

Reset automático de progresso a cada novo dia.

5. Rastreamento de Caminhada

Decisão: Utilizar:

expo-location

expo-task-manager

expo-background-task

Motivo:

Permite rastrear passos/quilômetros mesmo com a tela apagada.

Simples para MVP.

Compatível com Expo (mantém dev rápido).

Consequência:
A precisão pode variar, mas é aceitável para o MVP.

6. Persistência de Dados

Decisão: Usar AsyncStorage para:

Progresso diário

Meta atual

Lista de apps bloqueados

Latitude/longitude da caminhada (se necessário)

Motivo:

Sem complexidade de backend no MVP.

Rápido para implementar.

Consequência:
No futuro, poderá ser migrado para backend com sincronização.

7. Sem Login

Decisão: Nenhum sistema de autenticação no MVP.

Motivo:

Não é necessário para demonstrar a feature principal.

Mantém fluxo simples.

Consequência:
Todos os dados são locais do dispositivo.

8. Sem Telas Secundárias

Decisão: Não haverá:

Tela de perfil

Tema escuro/claro

Estatísticas avançadas

Ranking

Histórico de caminhada

Gamificação

Notificações push

Anúncios

Motivo:
Evitar escopo excessivo e manter o MVP focado.

9. UI e Navegação

Decisão: Navegação simples com React Navigation (Stack ou Tabs minimalistas).

Motivo:

Fácil de entender

Não exige estrutura complexa

Telas essenciais:

GoalConfigScreen – Definir meta diária + apps que serão bloqueados

WalkTrackerScreen – Acompanhamento da distância

LockedAppOverlay – Tela de bloqueio por cima dos apps selecionados

HomeScreen (opcional) – Painel simples da meta

10. Gerenciamento de Estado

Decisão: Context API.

Motivo:

Redux é overkill para o MVP.

Context já resolve meta, progresso e lista de apps bloqueados.

11. Segurança e Permissões

Permissões necessárias:

Localização em segundo plano

Overlay (draw over apps)

AccessibilityService

Decisão: Pedir permissões somente quando o usuário ativar o bloqueio.

Motivo:

Gera menos atrito

Usuário entende claramente o porquê da permissão

12. Reset Diário

Decisão: O app reseta automaticamente o progresso quando o dia troca.

Motivo:
Meta diária = objetivo principal do MVP.

Consequência:
Se o usuário não caminhar naquele dia, todos os apps escolhidos permanecerão bloqueados.
Visão Geral

O objetivo deste roadmap é guiar o desenvolvimento do MVP do StepFocus:
um app que rastreia caminhada e bloqueia apps selecionados até a meta diária ser atingida.

O foco é lançar rápido, demonstrar a funcionalidade principal e evitar escopo desnecessário.

🟧 Fase 1 — Fundação do Projeto (Setup Inicial)

Criar projeto Expo

Configurar estrutura padrão do /src

Criar pastas: screens, components, context, services, utils

Configurar React Navigation

Criar Context API base (meta + progresso + apps bloqueados)

Criar estilo visual inicial (cores, fontes, layout base)

🟧 Fase 2 — Core do Tracking (Rastreamento da Caminhada)

Implementar solicitação de permissão de localização

Implementar captura de posição em intervalo

Implementar cálculo de km via fórmula Haversine

Mostrar progresso em tempo real na tela

Implementar salvamento do progresso no AsyncStorage

Implementar reset diário automático

Implementar feedback visual (barra de progresso, texto)

Entrega esperada: Caminhada rastreando + progresso diário salvo.

🟧 Fase 3 — Sistema de Bloqueio dos Apps

Criar interface para listar apps instalados

Permitir seleção dos apps a serem bloqueados

Solicitar permissões: Accessibility + Overlay

Implementar monitoramento do app atual via AccessibilityService

Detectar quando o app aberto está na lista bloqueada

Criar OverlayScreen personalizada

Exibir Overlay por cima dos apps selecionados

Desbloquear automaticamente ao atingir meta

Entrega esperada: Apps escolhidos ficam bloqueados até a meta ser concluída.

🟧 Fase 4 — Telas do MVP

GoalConfigScreen

Definir meta diária

Escolher apps a serem bloqueados

Mostrar status das permissões

WalkTrackerScreen

Mostrar mapa (opcional no MVP)

Mostrar distância, km restantes e progresso

LockedAppOverlay

Mensagem fixa (“Caminhe X km para desbloquear”)

Botão Voltar ao StepFocus

HomeScreen

Painel simples da meta diária

Entrega esperada: Fluxo do app funcionando do início ao fim.

🟧 Fase 5 — Testes e Ajustes Finais

Testar consumo de bateria

Testar em smartphone físico

Testar permissão de overlay

Testar comportamento quando o usuário fecha o StepFocus

Testar precisão do tracking

Ajustar limites de bloqueio (ex: delay para transição suave)

Verificar bugs simples (reset diário, crash, loops)

Entrega esperada: MVP estável e apresentável.

🟧 Fase 6 — Entrega do MVP

Gravar vídeo demonstrando o passo a passo

Criar README com instruções

Criar build Android (APK ou AAB)

Teste final com usuário real (amigo / voluntário)

🟦 Futuras Fases (Pós-MVP, não no escopo agora)
Fase 7 — Qualidade de Vida

Melhorar UI/UX

Adicionar sistema de notificações push

Histórico básico de caminhadas

Ajuste fino de precisão GPS

Fase 8 — Conta e Sincronização

Login via Google

Sincronizar metas e progresso na nuvem

Backups automáticos

Fase 9 — Gamificação

Recompensas, streaks, níveis, badges

Lembretes motivacionais
## Definição clara do projeto
- Praticar atividades fisicas logo de manhã antes de abrir as redes sociais.

## Obetivo do MVP
- Validar, lançamento rápido, coleta de feedbacks reais e geração de valor imediato.

## Quem vai usar?
- Jovens e adultos que querem reduzir seu tempo de tela e praticar exercicios.

## Regras básicas

1. Organização de Arquivos

Usar uma estrutura de pastas fixa.

Cada módulo/funcionalidade deve ficar na sua própria pasta.

Nada de arquivos soltos fora da src.

2. Clean Code Simples

Uma função = uma responsabilidade.

Nada de lógica longa nos componentes.

Evitar duplicação de código.

Nomear arquivos e funções de forma clara.

3. Commits e Git

Commits curtos e descritivos.

Criar branch para features, não trabalhar direto na main.

Nunca commitar .env.

4. Documentação Mínima

Qualquer mudança de fluxo importante → atualizar planning.

Antes de criar uma feature, escrever 2–3 linhas explicando o que ela deve fazer.

5. Arquitetura Simples

Nada de lógica de negócio dentro de telas.

Separar:

UI (telas e componentes)

Lógica (services/hooks)

Dados (api, storage)

6. Erros e Logs

Usar try/catch para partes críticas.

Logar erros com contexto.

Não deixar erros silenciosos.

7. Escopo do MVP

Só entra o que for resolver o problema principal.

Nada de adicionar features “porque seria legal”.

Simplicidade > perfeição.

8. Refatoração Mínima

Se algo ficar muito grande ou confuso → parar e quebrar em partes menores.

## O que não será feito agora
- Login / Autenticação
- Tela de perfil
- Sistema de anuncios
- Sistema de estátisticas avançadas
- Gamificação / Conquistas
- Histórico completo da caminhada

## Principais features
- Step tracker (registrar distância e tempo de caminhada.)
- Bloquear app até que a meta de caminhada seja atingida.

## Requisitos funcionais
RF01 — Registrar caminhada/corrida
O app deve registrar a distância percorrida pelo usuário usando GPS.

RF02 — Exibir distância percorrida
O app deve mostrar em tempo real quantos quilômetros já foram feitos.

RF03 — Mapear o trajeto
O app deve exibir o trajeto do usuário em um mapa simples.

RF04 — Definir meta diária de distância
O usuário deve conseguir definir sua meta (ex: 5km/dia).

RF05 — Bloquear/desbloquear o app baseado na meta
Se não bater a meta, o app deve exibir a tela de bloqueio.
Se bater a meta, deve liberar o uso.

RF06 — Salvar o progresso localmente
O app deve salvar as informações no armazenamento local do celular.

## Requisitos não funcionais
RNF01 — O app deve funcionar offline
Somente o GPS é necessário; sem internet ele precisa rodar.

RNF02 — Deve ser rápido ao iniciar
O tempo de carregamento deve ser inferior a 3 segundos.

RNF03 — Interface simples e objetiva
O design deve ser limpo, com foco na função principal.

RNF04 — Baixo consumo de bateria
O uso do GPS deve ser otimizado para não drenar demais a bateria.

RNF05 — Compatível com Android (versão mínima X)
Defina a versão mínima — exemplo: Android 8 ou 10.

RNF06 — Armazenar dados localmente com segurança
Nada de dados sensíveis, mas deve evitar perda de registros.
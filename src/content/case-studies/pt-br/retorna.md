# Retorna

## Visão geral

Retorna é um produto SaaS e marketplace de serviços voltado a relacionamentos recorrentes com clientes e acompanhamento de serviços.

## Contexto do problema

Empresas de serviço frequentemente perdem receita porque o acompanhamento de clientes depende de memória, planilhas ou mensagens informais. O produto organiza informações de clientes e serviços para criar um contato recorrente baseado no ciclo de cada serviço.

Com a evolução de um modelo SaaS mais tradicional para uma plataforma orientada a marketplace, o desafio passou a envolver onboarding, autenticação, posicionamento e fluxos de produto com baixa fricção.

## Responsabilidades

- Ownership técnico e de produto em toda a stack.
- Desenvolvimento frontend e fluxos de UX.
- Backend, APIs e recursos persistidos em banco de dados.
- Autenticação, incluindo login com Google.
- Fluxos de marketplace, onboarding, deploy e iteração em produção.
- Decisões técnicas orientadas por feedback de prospects.

## Desafios técnicos

O trabalho exigiu equilibrar descoberta de produto, simplicidade técnica e uma experiência de entrada com pouca fricção, sem transferir a confiança da aplicação inteiramente para o cliente.

## Decisões de engenharia

### Ownership ponta a ponta

Uma funcionalidade só está completa quando frontend, regras de backend, persistência, autenticação e deploy funcionam como um todo.

### Simplificação de autenticação

O login com Google reduziu a fricção de cadastro preservando o modelo de sessão e a validação no backend.

### Arquitetura orientada ao produto

As regras de produto permaneceram explícitas e a infraestrutura desnecessária foi postergada, permitindo mudanças de modelo sem uma reescrita completa.

## Confiabilidade e trade-offs

O equilíbrio é manter velocidade nos estágios iniciais sem criar atalhos que tornem mudanças futuras caras. Limites claros são preferíveis a abstrações prematuras.

## Tecnologias

- Frontend web e APIs backend
- Autenticação e Google OAuth
- Persistência em banco de dados
- Fluxos SaaS e marketplace
- Deploy e integrações de terceiros

## O que isso demonstra

Capacidade de trabalhar além de tarefas isoladas: entender o produto, tomar decisões técnicas, entregar funcionalidades ponta a ponta e adaptar a aplicação quando o modelo de negócio muda.

## Confidencialidade

O conteúdo descreve conceitos de produto e engenharia sem expor configurações de produção, credenciais ou dados operacionais privados.

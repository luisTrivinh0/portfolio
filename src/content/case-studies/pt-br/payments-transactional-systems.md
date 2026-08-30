# Pagamentos e Sistemas Transacionais

## Visão geral

Este estudo resume a experiência no desenho e manutenção de fluxos financeiros e de pagamento em produção, com pontos de integração no frontend e backend, callbacks assíncronos e investigação de incidentes.

## Contexto do problema

Sistemas de pagamento precisam lidar com respostas atrasadas de provedores, callbacks duplicados, falhas parciais, retentativas, antifraude, desafios de autenticação, reembolsos, chargebacks, conversão de moeda e atualizações inconsistentes de estado.

O desafio de engenharia é preservar uma fonte de verdade confiável sem tornar a experiência de checkout ambígua para quem está usando o produto.

## Responsabilidades

- Construir e manter fluxos de checkout no frontend.
- Integrar provedores de pagamento e antifraude.
- Consumir e expor APIs REST.
- Tratar atualizações assíncronas via webhooks.
- Modelar estados pagos, reembolsados, chargeback e intermediários.
- Investigar falhas em produção entre frontend, backend e provedores externos.

## Desafios técnicos

Estados financeiros não podem depender apenas do que o navegador observou durante o checkout. Confirmações externas e estado persistido no backend precisam permanecer autoritativos, mesmo quando a interface perde a conexão.

## Decisões de engenharia

### Estados transacionais explícitos

O estado do pagamento é modelado de forma clara para evitar que uma resposta visual momentânea se transforme em verdade de negócio.

### Processamento idempotente

Callbacks e retentativas podem chegar mais de uma vez. Operações transacionais usam identificadores estáveis e processamento seguro para repetição.

### UX preparada para falhas

Serviços externos podem falhar de forma independente. A interface diferencia falhas recuperáveis de resultados finais de negócio.

### Integrações observáveis

Logs úteis e identificadores de correlação permitem acompanhar uma transação entre cliente, API e provedor sem expor dados sensíveis.

## Confiabilidade e trade-offs

Os cenários relevantes incluem entrega duplicada de webhook, timeout do provedor após cobrança bem-sucedida, timeout do frontend enquanto o backend continua processando, estado desatualizado, falha de antifraude, falha de autenticação, concorrência em conversão de moeda e eventos de reembolso ou chargeback.

## Tecnologias

- React
- TypeScript / JavaScript
- Serviços Node.js e Python
- APIs REST e Webhooks
- SQL
- Gateways de pagamento, antifraude e autenticação

## O que isso demonstra

Experiência com sistemas em que a correção importa além do comportamento da interface: coordenar múltiplos sistemas, preservar um modelo transacional consistente e manter uma experiência previsível.

## Confidencialidade

Este estudo não inclui código proprietário, credenciais, URLs internas, dados de clientes ou detalhes de implementação pertencentes a sistemas privados.

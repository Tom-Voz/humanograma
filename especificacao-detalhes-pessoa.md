# Especificação: Detalhes da Pessoa

**Sistema:** Humanograma  
**Módulo:** Gestão de Pessoas  
**Versão:** 1.1  
**Data:** 15/04/2026  
**Atualização:** Aplicado UI Kit SP.GOV.BR e Manual de Tom e Voz

---

## 1. Visão Geral

### 1.1 Descrição
Tela que exibe as informações completas de uma pessoa vinculada a estruturas organizacionais, mostrando seus dados pessoais, vínculos ativos e inativos, e a linha do tempo de atualizações.

### 1.2 Acesso
- **URL:** `/pessoas/detalhes/{id}`
- **Permissões:** Usuários autenticados com acesso à Gestão de Pessoas
- **Origem:** Clique no nome de uma pessoa na lista de vínculos

### 1.3 Atores
- Gestor de estrutura
- Administrador do sistema
- RH
- Usuário com permissão de visualização

---

## 2. Layout e Componentes

### 2.1 Estrutura da Página

```
┌─────────────────────────────────────────────────────────────┐
│ HEADER (padrão do sistema)                                  │
├─────────────────────────────────────────────────────────────┤
│ BREADCRUMB: Home > Gestão de estrutura > Detalhes > Pessoa  │
├─────────────────────────────────────────────────────────────┤
│ ← Detalhes da pessoa                                        │
├──────────────────┬──────────────────────────────────────────┤
│                  │                                          │
│  SIDEBAR         │  ÁREA PRINCIPAL                          │
│  ┌────────────┐  │                                          │
│  │  Avatar    │  │  ▼ Informações pessoais                  │
│  │            │  │  ┌────────────────────────────────────┐  │
│  │  Nome      │  │  │ CPF | RG | Data nascimento | Email │  │
│  │  ● Status  │  │  └────────────────────────────────────┘  │
│  └────────────┘  │                                          │
│                  │  Vínculos                                │
│  Últimas         │  ┌────────────────────────────────────┐  │
│  atualizações    │  │ Card Vínculo 1 (expandível)        │  │
│  ─────────────   │  │ ▼ Indicador + Status + [⋮]         │  │
│  │ item 1       │  └────────────────────────────────────┘  │
│  │ item 2       │  ┌────────────────────────────────────┐  │
│  │ item 3       │  │ Card Vínculo 2 (expandível)        │  │
│  │ item 4       │  └────────────────────────────────────┘  │
│                  │                                          │
└──────────────────┴──────────────────────────────────────────┘
```

### 2.2 Componentes Utilizados

| Componente | Origem | Uso na tela |
|------------|--------|-------------|
| Header | UI Kit SP.GOV.BR | Navegação principal |
| Breadcrumb | UI Kit SP.GOV.BR | Navegação hierárquica |
| Avatar | UI Kit SP.GOV.BR | Foto da pessoa |
| Badge | UI Kit SP.GOV.BR | Status (Ativo/Inativo) |
| Collapsible Section | Humanograma | Informações pessoais |
| Vínculo Card | Humanograma | Card expandível de vínculo |
| Timeline | Humanograma | Últimas atualizações |
| Status Indicator | Humanograma | Indicador colorido lateral |
| Dropdown Menu | UI Kit SP.GOV.BR | Ações do vínculo |
| Progress Bar | UI Kit SP.GOV.BR | Progresso do processo |

---

## 3. Sidebar - Identificação da Pessoa

### 3.1 Elementos

| Elemento | Tipo | Descrição |
|----------|------|-----------|
| Avatar | Imagem | 120x120px, circular, fallback com iniciais |
| Nome completo | Texto | Nome da pessoa |
| Status | Badge | "Ativo" ou "Inativo" |
| Timeline | Lista | Últimas atualizações |

### 3.2 Badge de Status

| Status | Cor | Condição |
|--------|-----|----------|
| Ativo | Verde (#2e7d32) | Possui ao menos 1 vínculo em exercício |
| Inativo | Vermelho (#c62828) | Nenhum vínculo em exercício |

### 3.3 Timeline - Últimas Atualizações

**Estrutura do item:**
```
┌─────────────────────────────────────┐
│ Título da atualização               │
│ 11/11/2024 - 11:46                  │
└─────────────────────────────────────┘
```

**Tipos de atualização:**
| Tipo | Exemplo de título |
|------|-------------------|
| Novo vínculo | "Novo vínculo em [Estrutura]" |
| Fim de vínculo | "Fim do vínculo em [Estrutura]" |
| Atualização cadastral | "Atualização de dados pessoais" |
| Posse | "Posse em [Estrutura]" |
| Nomeação | "Nomeação publicada" |
| Exoneração | "Exoneração de [Estrutura]" |

**Limite:** Exibir últimas 5 atualizações com link "Ver todas" se houver mais.

---

## 4. Seção: Informações Pessoais

### 4.1 Comportamento
- Seção colapsável (accordion)
- Estado padrão: expandido
- Clique no header alterna estado

### 4.2 Campos Exibidos

| Campo | Tipo | Formato | Visibilidade |
|-------|------|---------|--------------|
| CPF | Texto | XXX.XXX.XXX-XX | Mascarado por padrão |
| RG | Texto | XX.XXX.XXX-X | Sempre visível |
| Data de nascimento | Data | DD/MM/AAAA | Sempre visível |
| E-mail institucional | E-mail | email@sp.gov.br | Sempre visível |

### 4.3 Máscara de CPF

- **Visualização padrão:** •••.•••.XXX-XX (últimos 5 dígitos)
- **Visualização completa:** Clique em ícone "olho" para exibir
- **Permissão:** Apenas usuários com permissão "ver_cpf_completo"

### 4.4 Layout dos Campos

```
┌─────────────────────────────────────────────────────────────┐
│ ▼ Informações pessoais                                      │
├─────────────────────────────────────────────────────────────┤
│ CPF                 RG                                      │
│ •••.•••.123-45 👁   12.345.678-9                            │
│                                                             │
│ Data de nascimento  E-mail institucional                    │
│ 01/01/1990          pessoa@sp.gov.br                        │
└─────────────────────────────────────────────────────────────┘
```

---

## 5. Seção: Vínculos

### 5.1 Descrição
Lista de todos os vínculos da pessoa (ativos e inativos), cada um em um card expandível.

### 5.2 Card de Vínculo - Colapsado

```
┌─────────────────────────────────────────────────────────────┐
│ ▼  Coordenador de Núcleo - Núcleo de Gestão de Estrutura   │
│ │                                                     [⋮]  │
│ █  Cargo | Estrutura                               Status   │
└─────────────────────────────────────────────────────────────┘
```

### 5.3 Indicador de Status (Borda Lateral)

| Status | Cor | Código |
|--------|-----|--------|
| Em exercício | Verde | #2e7d32 |
| Em atribuição | Amarelo | #f9a825 |
| Inativo | Cinza | #9e9e9e |

### 5.4 Card de Vínculo - Expandido

```
┌─────────────────────────────────────────────────────────────┐
│ ▼  Coordenador de Núcleo - Núcleo de Gestão de Estrutura   │
│ █                                                     [⋮]  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Informações do cargo                                       │
│  ───────────────────────────────────────────                │
│  Cargo             Estrutura vinculada                      │
│  [valor]           [link]                                   │
│                                                             │
│  Tipo de vínculo   Número da vaga                           │
│  [valor]           [valor]                                  │
│                                                             │
│  Tipo de recrutamento   Tipo de alocação                    │
│  [valor]               [valor]                              │
│                                                             │
│  Regime            Matrícula                                │
│  [valor]           [valor]                                  │
│                                                             │
│  Informações do vínculo                                     │
│  ───────────────────────────────────────────                │
│  Nomeação          Posse              Exercício             │
│  [data]            [data]             [data]                │
│                                                             │
│  [Para vínculos inativos:]                                  │
│  Fim do exercício  Motivo do fim                            │
│  [data]            [valor]                                  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 5.5 Campos do Card Expandido

**Informações do cargo:**

| Campo | Tipo | Descrição |
|-------|------|-----------|
| Cargo | Texto | Nome do cargo |
| Estrutura vinculada | Link | Link para detalhes da estrutura |
| Tipo de vínculo | Texto | Ex: Servidor, Comissionado |
| Número da vaga | Número | Identificador da vaga |
| Tipo de recrutamento | Texto | Ex: Ampla, Restrita |
| Tipo de alocação | Texto | Ex: Permanente, Temporária |
| Regime | Texto | CLT, Estatutário, etc. |
| Matrícula | Texto | Número da matrícula |

**Informações do vínculo:**

| Campo | Tipo | Descrição |
|-------|------|-----------|
| Nomeação | Data | Data da publicação em DO |
| Posse | Data | Data da posse |
| Exercício | Data | Data de início do exercício |
| Fim do exercício | Data | (Apenas inativos) Data de término |
| Motivo do fim | Texto | (Apenas inativos) Motivo do encerramento |

### 5.6 Menu de Ações do Vínculo [⋮]

**Para vínculos em exercício:**

| Ação | Ícone | Destino |
|------|-------|---------|
| Editar vínculo | ✎ | `/vinculos/editar/{id}` |
| Transferir | ↗ | Modal de transferência |
| Exonerar | ⊘ | Modal de confirmação |

**Para vínculos em atribuição:**

| Ação | Ícone | Destino |
|------|-------|---------|
| Ver processo | 👁 | Detalhes do processo |
| Cancelar atribuição | ✕ | Modal de confirmação |

**Para vínculos inativos:**

| Ação | Ícone | Destino |
|------|-------|---------|
| Ver histórico | 👁 | Histórico do vínculo |

---

## 6. Vínculo Em Atribuição - Detalhes Extras

### 6.1 Componentes Adicionais

Para vínculos com status "Em atribuição", exibir dentro do card:

```
┌─────────────────────────────────────────────────────────────┐
│  Status do processo                                         │
│  ───────────────────────────────────────────                │
│  [●●●●●○○○] Aguardando análise do processo                  │
│             Última atualização: 11/11/2024 - 11:46          │
└─────────────────────────────────────────────────────────────┘
```

### 6.2 Etapas do Processo

| Etapa | Ordem |
|-------|-------|
| Indicação enviada | 1 |
| Resposta da indicação | 2 |
| Prova de vida realizada | 3 |
| Documentos enviados | 4 |
| Processo analisado | 5 |
| Aprovadores indicados | 6 |
| Publicação no DO | 7 |
| Posse | 8 |

### 6.3 Barra de Progresso

- Etapas concluídas: preenchidas com cor primária (#FF161F)
- Etapa atual: pulsante
- Etapas pendentes: cinza (#e0e0e0)

---

## 7. Estados da Tela

### 7.1 Estados Globais

| Estado | Comportamento |
|--------|---------------|
| Loading | Skeleton do sidebar e cards |
| Erro | Mensagem + botão "Tentar novamente" |
| Pessoa não encontrada | Mensagem + link para voltar |

### 7.2 Estados dos Vínculos

| Estado | Mensagem |
|--------|----------|
| Sem vínculos | "Esta pessoa não possui vínculos registrados." |
| Todos inativos | Exibir todos com indicador cinza |

### 7.3 Estado: Pessoa Inativa

Quando pessoa não tem nenhum vínculo ativo:
- Badge vermelho "● Inativa" no sidebar
- Todos os cards com indicador cinza
- Menus de ação limitados a "Ver histórico"

---

## 8. Regras de Negócio

### RN01 - Ordenação de vínculos
Vínculos são exibidos na ordem:
1. Em exercício (mais recente primeiro)
2. Em atribuição (mais recente primeiro)
3. Inativos (mais recente primeiro)

### RN02 - Status da pessoa
Pessoa é "Ativa" se possuir ao menos 1 vínculo com status "Em exercício".

### RN03 - Exibição de CPF
CPF completo só é visível para usuários com permissão específica.

### RN04 - Múltiplos vínculos ativos
Uma pessoa pode ter múltiplos vínculos ativos simultaneamente (acúmulo permitido em certos casos).

### RN05 - Transferência
Transferência move o vínculo para outra estrutura, mantendo histórico.

### RN06 - Exoneração
Exoneração encerra o vínculo e registra motivo e data.

### RN07 - Timeline
Timeline exibe no máximo 5 itens, ordenados do mais recente ao mais antigo.

---

## 9. Integrações

### 9.1 APIs Necessárias

| Endpoint | Método | Descrição |
|----------|--------|-----------|
| `/api/pessoas/{id}` | GET | Dados da pessoa |
| `/api/pessoas/{id}/vinculos` | GET | Lista de vínculos |
| `/api/pessoas/{id}/timeline` | GET | Atualizações recentes |
| `/api/vinculos/{id}` | GET | Detalhes do vínculo |
| `/api/vinculos/{id}` | PUT | Atualizar vínculo |
| `/api/vinculos/{id}/transferir` | POST | Transferir vínculo |
| `/api/vinculos/{id}/exonerar` | POST | Exonerar vínculo |
| `/api/vinculos/{id}/cancelar` | POST | Cancelar atribuição |

### 9.2 Parâmetros de Query

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| include_cpf | boolean | Retorna CPF completo (requer permissão) |

---

## 10. UX Writing

> Baseado no Manual de Tom e Voz SP.GOV.BR: https://www.cms.sp.gov.br/cms/tomevoz

### 10.1 Textos de Interface

| Elemento | Texto | Justificativa |
|----------|-------|---------------|
| Título da página | "Detalhes da pessoa" | Simples e direto |
| Seção colapsável | "Informações pessoais" | Agrupa dados do indivíduo |
| Sub-seção vínculo | "Informações do cargo" | Mais claro que "Dados corporativos" |
| Timeline de vínculo | "Linha do tempo" | Termo acessível |
| Nome social vazio | "Não informado" | Evita traço (-) sem contexto |
| Link para estrutura | "[Nome da estrutura]" | Link descritivo |
| Sidebar título | "Cadastro e atualizações" | Indica conteúdo misto |

### 10.2 Labels dos Campos

| Campo técnico | Label exibido |
|---------------|---------------|
| cpf | "CPF" |
| rg | "RG" |
| data_nascimento | "Data de nascimento" |
| email_institucional | "E-mail institucional" |
| cargo | "Cargo" |
| estrutura_id | "Estrutura vinculada" |
| tipo_vinculo | "Tipo de vínculo" |
| numero_vaga | "Número da vaga" |
| tipo_recrutamento | "Tipo de recrutamento" |
| tipo_alocacao | "Tipo de alocação" |
| regime | "Regime" |
| matricula | "Matrícula" |
| nomeacao_data | "Nomeação" |
| posse_data | "Posse" |
| exercicio_data | "Exercício" |
| fim_exercicio_data | "Fim do exercício" |
| motivo_fim | "Motivo do fim" |

### 10.3 Mensagens de Feedback

| Situação | Mensagem |
|----------|----------|
| Sucesso ao transferir | "Vínculo transferido com sucesso." |
| Sucesso ao exonerar | "Vínculo exonerado com sucesso." |
| Sucesso ao cancelar | "Atribuição cancelada." |
| Erro genérico | "Não foi possível completar a ação. Tente novamente." |
| Confirmação exonerar | "Tem certeza que deseja exonerar este vínculo?" |
| Confirmação cancelar | "Tem certeza que deseja cancelar esta atribuição?" |

### 10.4 Estados Vazios

| Estado | Mensagem |
|--------|----------|
| Sem vínculos | "Esta pessoa não possui vínculos registrados." |
| Sem atualizações | "Nenhuma atualização recente." |

---

## 11. Acessibilidade

> Implementação completa com ARIA e semântica HTML5

### 11.1 Navegação por Teclado

| Tecla | Ação |
|-------|------|
| Tab | Navegar entre elementos focáveis |
| Enter | Expandir/colapsar seção, ativar botões |
| Escape | Fechar dropdown |
| Setas | Navegar em menus |
| Space | Ativar checkboxes e toggles |

### 11.2 ARIA Labels (Implementados)

| Elemento | aria-label | aria-* |
|----------|------------|--------|
| Botão voltar | "Voltar para detalhes da estrutura" | - |
| Seção colapsável | - | `aria-labelledby` + `aria-expanded` |
| Botão expandir/colapsar | "Expandir detalhes" / "Recolher detalhes" | `aria-expanded` |
| Botão ver CPF | "Exibir CPF completo" / "Ocultar CPF" | Dinâmico via JS |
| Menu de ações | "Mais ações do vínculo" | `aria-haspopup` |
| Cards de vínculo | "Vínculo em exercício" etc. | `aria-label` |

### 11.3 Semântica HTML5

| Elemento | Tag |
|----------|-----|
| Breadcrumb | `<nav aria-label="Navegação">` |
| Seções colapsáveis | `<section aria-labelledby>` |
| Cards de vínculo | `<article aria-label>` |
| Status | `<span role="status">` |
| Indicadores visuais | `aria-hidden="true"` |

### 11.4 Mascaramento de CPF

- **Padrão:** `•••.868.110-••` (parcialmente oculto)
- **Interação:** Botão com ícone de olho para revelar
- **Toggle:** aria-label muda dinamicamente
- **Permissão:** Verificar no backend antes de exibir

### 11.5 Contraste (WCAG 2.1 AA)

| Indicador | Cor | Acessório | Status |
|-----------|-----|-----------|--------|
| Verde (exercício) | #2e7d32 | - | ✓ AA |
| Amarelo (atribuição) | #f9a825 | Badge com texto escuro | ✓ AA |
| Cinza (inativo) | #9e9e9e | Badge com texto | ✓ AA |

---

## 12. Responsividade

### 12.1 Breakpoints

| Breakpoint | Comportamento |
|------------|---------------|
| Desktop (>1024px) | Layout 2 colunas (sidebar + principal) |
| Tablet (768-1024px) | Sidebar no topo, área principal abaixo |
| Mobile (<768px) | Stack vertical, cards ocupam 100% |

### 12.2 Mobile

- Avatar centralizado no topo
- Timeline horizontal com scroll
- Cards expandem verticalmente
- Menu de ações em bottom sheet

---

## 13. Critérios de Aceite

### Funcional

- [ ] Exibir dados corretos da pessoa
- [ ] Exibir avatar ou iniciais como fallback
- [ ] Badge de status condizente com vínculos
- [ ] Timeline exibindo últimas 5 atualizações
- [ ] Seção "Informações pessoais" colapsável
- [ ] CPF mascarado por padrão
- [ ] Botão para exibir CPF completo (com permissão)
- [ ] Lista de vínculos ordenada corretamente
- [ ] Cards de vínculo expandíveis
- [ ] Indicador de cor correto por status
- [ ] Menu de ações funcional para cada tipo de vínculo
- [ ] Link para estrutura navega corretamente
- [ ] Barra de progresso para vínculos em atribuição
- [ ] Exibir campos de vínculo inativo (fim + motivo)

### Visual

- [ ] Layout conforme Figma
- [ ] Avatar circular com fallback
- [ ] Cores dos indicadores corretas
- [ ] Cards expandem com animação suave
- [ ] Responsivo em tablet e mobile

### Performance

- [ ] Carregamento inicial < 2 segundos
- [ ] Expansão de card < 200ms
- [ ] Busca de timeline < 500ms

---

## 14. Casos de Teste

### CT01 - Visualização básica
**Pré-condição:** Pessoa com 1 vínculo ativo  
**Passos:**
1. Acessar página de detalhes
2. Verificar sidebar
3. Verificar seção de informações
4. Verificar card do vínculo

**Resultado esperado:** Todos os dados exibidos corretamente

### CT02 - Múltiplos vínculos
**Pré-condição:** Pessoa com 2 vínculos ativos, 1 em atribuição, 3 inativos  
**Passos:**
1. Acessar página de detalhes
2. Verificar ordenação dos cards

**Resultado esperado:** Cards ordenados: ativos (2), em atribuição (1), inativos (3)

### CT03 - Expansão de card
**Pré-condição:** Página carregada  
**Passos:**
1. Clicar no header do card
2. Verificar conteúdo expandido
3. Clicar novamente

**Resultado esperado:** Card expande e colapsa corretamente

### CT04 - Mascaramento de CPF
**Pré-condição:** Usuário com permissão de ver CPF  
**Passos:**
1. Verificar CPF mascarado
2. Clicar no ícone de olho
3. Verificar CPF completo

**Resultado esperado:** CPF alterna entre mascarado e completo

### CT05 - Exoneração de vínculo
**Pré-condição:** Pessoa com vínculo ativo  
**Passos:**
1. Abrir menu de ações
2. Clicar em "Exonerar"
3. Confirmar no modal
4. Verificar atualização do card

**Resultado esperado:** Card muda para indicador cinza, dados de fim preenchidos

### CT06 - Vínculo em atribuição
**Pré-condição:** Pessoa com vínculo em atribuição  
**Passos:**
1. Expandir card do vínculo
2. Verificar barra de progresso
3. Verificar etapa atual

**Resultado esperado:** Progresso exibido corretamente com etapa destacada

---

## 15. Histórico de Versões

| Versão | Data | Autor | Alterações |
|--------|------|-------|------------|
| 1.0 | 15/04/2026 | - | Versão inicial |

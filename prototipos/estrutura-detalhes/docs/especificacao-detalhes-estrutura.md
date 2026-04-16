# Especificação: Detalhes da Estrutura

**Sistema:** Humanograma  
**Módulo:** Gestão Organizacional  
**Versão:** 1.2  
**Data:** 15/04/2026  
**Atualização:** Correções + Deploy Vercel  
**URL:** https://humanograma.vercel.app/index.html

---

## 1. Visão Geral

### 1.1 Descrição
Tela que exibe as informações completas de uma estrutura organizacional, permitindo visualizar vínculos de pessoas, informações cadastrais e histórico de alterações.

### 1.2 Acesso
- **URL:** `/gestao-estrutura/detalhes/{id}`
- **Permissões:** Usuários autenticados com acesso à Gestão Organizacional
- **Origem:** Clique em uma estrutura na árvore de "Gestão de estrutura"

### 1.3 Atores
- Gestor de estrutura
- Administrador do sistema
- Usuário com permissão de visualização

---

## 2. Layout e Componentes

### 2.1 Estrutura da Página

```
┌─────────────────────────────────────────────────────────────┐
│ HEADER (padrão do sistema)                                  │
├─────────────────────────────────────────────────────────────┤
│ BREADCRUMB: Home > Gestão de estrutura > Detalhes           │
├─────────────────────────────────────────────────────────────┤
│ ← Detalhes da estrutura                                     │
├─────────────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ CARD DA ESTRUTURA                                       │ │
│ │ Nome completo da estrutura                    ● Status  │ │
│ │ Sigla | Código | Centro custo | Estruturas | Pessoas [⋮]│ │
│ └─────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│ [Vínculos] [Informações da estrutura] [Histórico]           │
├─────────────────────────────────────────────────────────────┤
│ CONTEÚDO DA TAB SELECIONADA                                 │
├─────────────────────────────────────────────────────────────┤
│ FOOTER                                                      │
└─────────────────────────────────────────────────────────────┘
```

### 2.2 Componentes Utilizados

| Componente | Origem | Uso na tela |
|------------|--------|-------------|
| Header | UI Kit SP.GOV.BR | Navegação principal |
| Breadcrumb | UI Kit SP.GOV.BR | Navegação hierárquica |
| Card | Humanograma | Card da estrutura |
| Tabs | UI Kit SP.GOV.BR | Navegação entre seções |
| Table | UI Kit SP.GOV.BR | Lista de vínculos |
| Segment Filter | Humanograma | Filtro Ativos/Em atribuição/Inativos |
| Search Box | UI Kit SP.GOV.BR | Busca de pessoas |
| Dropdown Menu | UI Kit SP.GOV.BR | Menus de ações |
| Modal | UI Kit SP.GOV.BR | Filtros avançados |
| Badge | UI Kit SP.GOV.BR | Status (Ativo/Extinta) |
| Pagination | UI Kit SP.GOV.BR | Navegação de lista |

---

## 3. Card da Estrutura

### 3.1 Campos Exibidos

| Campo | Tipo | Descrição |
|-------|------|-----------|
| Nome | Texto | Nome completo da estrutura |
| Sigla | Texto | Sigla da estrutura |
| Código | Número | Código identificador |
| Centro de custo | Texto | Código do centro de custo |
| Estruturas vinculadas | Número | Quantidade de subestruturas |
| Pessoas ativas | Número | Quantidade de vínculos ativos |
| Status | Badge | "Ativo" (verde) ou "Extinta" (vermelho) |

### 3.2 Menu de Ações [⋮]

| Ação | Ícone | Destino | Condição |
|------|-------|---------|----------|
| Editar estrutura | ✎ | `/gestao-estrutura/editar/{id}` | Status = Ativo |
| Transferir estrutura | ↗ | `/gestao-estrutura/transferir/{id}` | Status = Ativo |
| Extinguir estrutura | ⊘ | Modal de confirmação | Status = Ativo |

---

## 4. Tab: Vínculos

### 4.1 Filtro Segmentado

| Segmento | Descrição | Colunas específicas |
|----------|-----------|---------------------|
| **Ativos** | Pessoas em exercício | Nomeação, Posse, Exercício |
| **Em atribuição** | Aguardando alguma etapa | Status do processo |
| **Inativos** | Vínculos encerrados | Fim do exercício, Motivo |

### 4.2 Colunas da Tabela - Ativos

| Coluna | Tipo | Ordenável | Largura |
|--------|------|-----------|---------|
| Checkbox | Seleção | Não | 40px |
| Pessoa vinculada | Link | Sim | Auto |
| Cargo | Texto | Não | Auto |
| Matrícula | Texto | Não | 100px |
| Nomeação | Data | Sim | 100px |
| Posse | Data | Sim | 100px |
| Exercício | Data | Sim | 100px |
| Ações | Menu | Não | 48px |

### 4.3 Colunas da Tabela - Em Atribuição

| Coluna | Tipo | Descrição |
|--------|------|-----------|
| Pessoa vinculada | Link | Nome com link |
| Cargo | Texto | Cargo pretendido |
| Status | Badge | Status do processo |
| Ações | Menu | Menu contextual |

**Status possíveis:**
- Aguardando resposta da indicação
- Aguardando prova de vida
- Aguardando envio dos documentos
- Aguardando análise do processo
- Aguardando indicação de aprovadores
- Aguardando publicação no Diário Oficial
- Aguardando tomar posse

### 4.4 Colunas da Tabela - Inativos

| Coluna | Tipo | Descrição |
|--------|------|-----------|
| Pessoa vinculada | Link | Nome com link |
| Cargo | Texto | Cargo ocupado |
| Matrícula | Texto | Número |
| Nomeação | Data | Data de nomeação |
| Posse | Data | Data de posse |
| Exercício | Data | Início do exercício |
| Fim do exercício | Data | Data de encerramento |
| Motivo do fim | Texto | Motivo do desligamento |
| Ações | Menu | Menu contextual |

**Motivos possíveis:**
- Atribuição expirada
- Falecimento
- Exoneração
- Aposentadoria
- Atribuição cancelada

### 4.5 Menu de Ações do Vínculo

| Ação | Ícone | Destino |
|------|-------|---------|
| Editar vínculo | ✎ | `/vinculos/editar/{id}` |
| Transferir pessoa | ↗ | Modal de transferência |
| Exonerar | ⊘ | Modal de confirmação |

### 4.6 Menu de Ações em Massa [⋮]

| Ação | Ícone | Descrição |
|------|-------|-----------|
| Baixar lista completa | ↓ | Exporta CSV/Excel |
| Editar todos | ✎ | Edição em lote |
| Exonerar todos | ⊘ | Exoneração em lote |

### 4.7 Modal: Filtrar Vínculos

**Campos do filtro:**

| Campo | Tipo | Placeholder |
|-------|------|-------------|
| Nome da pessoa | Input | "Digite o nome da pessoa" |
| Matrícula | Input | "123456" |
| Cargo | Select | "Selecione" |
| Número da vaga | Select | "Selecione" |
| Data de nomeação | Date | "dd/mm/aaaa" |
| Data de posse | Date | "dd/mm/aaaa" |
| Data de exercício | Date | "dd/mm/aaaa" |

**Botões:**
- Cancelar (texto)
- Limpar (outline)
- Filtrar (primário)

---

## 5. Tab: Informações da Estrutura

### 5.1 Layout

```
┌─────────────────────────────────────┬─────────────────────┐
│ COLUNA PRINCIPAL                    │ SIDEBAR             │
│                                     │                     │
│ Informações da estrutura            │ Contato             │
│ ─────────────────────               │ ─────────           │
│ Legislação: [link]                  │ 📞 (11) 98765-9987  │
│                                     │ 📱 (11) 98765-9987  │
│ Tipo de administração: Direta       │ ✉️ email@sp.gov.br  │
│ Secretaria municipal                │ 🌐 prefeitura.sp... │
│                                     │                     │
│ Atribuições:                        │ Quadro de cargos    │
│ [texto com "Exibir mais"]           │ ─────────────────   │
│                                     │ Secretário    20/20 │
│ Finalidade:                         │ ████████████████    │
│ [texto com "Exibir mais"]           │ Gerente       35/40 │
│                                     │ █████████████░░░    │
└─────────────────────────────────────┴─────────────────────┘
```

### 5.2 Campos da Coluna Principal

| Campo | Tipo | Comportamento |
|-------|------|---------------|
| Legislação | Link | Abre documento da legislação |
| Tipo de administração | Texto | Direta/Indireta/Órgão colegiado + subtipo |
| Atribuições | Texto longo | Truncado com "Exibir mais" |
| Finalidade | Texto longo | Truncado com "Exibir mais" |

### 5.3 Sidebar - Contato

| Campo | Ícone | Formato |
|-------|-------|---------|
| Telefone | 📞 | (XX) XXXX-XXXX |
| WhatsApp | 📱 | (XX) XXXXX-XXXX |
| E-mail | ✉️ | texto@dominio.gov.br |
| Site | 🌐 | Link clicável |

### 5.4 Sidebar - Quadro de Cargos

| Elemento | Descrição |
|----------|-----------|
| Nome do cargo | Texto |
| Ocupadas/Total | "20 / 20" |
| Barra de progresso | Preenchimento proporcional |

---

## 6. Tab: Histórico de Alterações

### 6.1 Layout

Timeline vertical com itens ordenados por data.

### 6.2 Estrutura do Item

```
┌─────────────────────────────────────────────────────────┐
│ [ícone]  Título da alteração                            │
│          Responsável pelo registro: Nome                │
│          Origem da alteração: Tipo                      │
│          11/11/2024 - 11:46                             │
└─────────────────────────────────────────────────────────┘
```

### 6.3 Tipos de Alteração

| Tipo | Ícone | Descrição |
|------|-------|-----------|
| Cadastro da estrutura | 👤 | Criação inicial |
| Alteração no cadastro | ✎ | Edição de dados |
| Alteração de vínculo | 👤 | Mudança em pessoa |
| Novo vínculo | + | Adição de pessoa |
| Vínculo encerrado | - | Remoção de pessoa |

### 6.4 Menu de Ordenação

| Opção | Ícone | Comportamento |
|-------|-------|---------------|
| Ordenar do mais antigo ao mais novo | ↓ | ASC por data |
| Ordenar do mais novo ao mais antigo | ↑ | DESC por data |

---

## 7. Estados da Tela

### 7.1 Estados Globais

| Estado | Comportamento |
|--------|---------------|
| Loading | Skeleton da estrutura e tabs |
| Erro | Mensagem + botão "Tentar novamente" |
| Estrutura não encontrada | Mensagem + link para lista |

### 7.2 Estados da Tab Vínculos

| Estado | Mensagem |
|--------|----------|
| Lista vazia (Ativos) | "Nenhum vínculo ativo encontrado." |
| Lista vazia (Em atribuição) | "Nenhuma pessoa em processo de atribuição." |
| Lista vazia (Inativos) | "Nenhum vínculo inativo registrado." |
| Filtro sem resultados | "Nenhum resultado para os filtros aplicados." |

### 7.3 Estado: Estrutura Extinta

Quando status = "Extinta":
- Badge vermelho "● Extinta"
- Menu de ações desabilitado (somente visualização)
- Valores de "Estruturas vinculadas" e "Pessoas ativas" = 0
- Tab Vínculos mostra apenas Inativos

---

## 8. Regras de Negócio

### RN01 - Visualização de vínculos
O usuário só pode visualizar vínculos de estruturas às quais tem permissão de acesso.

### RN02 - Ações em estrutura extinta
Estruturas com status "Extinta" não permitem:
- Edição
- Transferência
- Adição de vínculos

### RN03 - Contagem de pessoas
"Pessoas ativas" conta apenas vínculos com status "Em exercício".

### RN04 - Exoneração em lote
Exoneração em lote requer confirmação com motivo obrigatório.

### RN05 - Transferência de pessoa
Transferência só é permitida para estruturas ativas.

---

## 9. Integrações

### 9.1 APIs Necessárias

| Endpoint | Método | Descrição |
|----------|--------|-----------|
| `/api/estruturas/{id}` | GET | Dados da estrutura |
| `/api/estruturas/{id}/vinculos` | GET | Lista de vínculos |
| `/api/estruturas/{id}/historico` | GET | Histórico de alterações |
| `/api/estruturas/{id}/cargos` | GET | Quadro de cargos |
| `/api/vinculos/{id}` | PUT | Atualizar vínculo |
| `/api/vinculos/{id}` | DELETE | Exonerar vínculo |
| `/api/estruturas/{id}/extinguir` | POST | Extinguir estrutura |

### 9.2 Parâmetros de Query - Vínculos

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| status | enum | ativos, em_atribuicao, inativos |
| page | number | Página atual |
| per_page | number | Itens por página |
| sort | string | Campo de ordenação |
| order | enum | asc, desc |
| nome | string | Filtro por nome |
| matricula | string | Filtro por matrícula |
| cargo | string | Filtro por cargo |

---

## 10. UX Writing

> Baseado no Manual de Tom e Voz SP.GOV.BR: https://www.cms.sp.gov.br/cms/tomevoz

### 10.1 Textos de Interface

| Elemento | Texto | Justificativa |
|----------|-------|---------------|
| Título da página | "Detalhes da estrutura" | Simples e direto |
| Tab 1 | "Vínculos" | Termo técnico padronizado |
| Tab 2 | "Informações da estrutura" | Descritivo sem jargão |
| Tab 3 | "Histórico de alterações" | Específico sobre o conteúdo |
| Placeholder busca | "Buscar pelo nome ou matrícula" | Ação clara + opções |
| Botão filtrar (modal) | "Aplicar filtros" | Verbo de ação específico |
| Botão limpar (modal) | "Limpar filtros" | Contexto da ação |
| Botão cancelar (modal) | "Cancelar" | Padrão de interface |
| Menu ações em massa | "Editar selecionados" / "Exonerar selecionados" | Especifica o escopo |

### 10.2 Mensagens de Feedback

| Situação | Mensagem |
|----------|----------|
| Sucesso ao exonerar | "Vínculo exonerado com sucesso." |
| Sucesso ao transferir | "Pessoa transferida com sucesso." |
| Erro genérico | "Não foi possível completar a ação. Tente novamente." |
| Confirmação exonerar | "Tem certeza que deseja exonerar [nome]? Esta ação não pode ser desfeita." |
| Confirmação extinguir | "Tem certeza que deseja extinguir esta estrutura? Todos os vínculos ativos serão encerrados." |

### 10.3 Labels dos Campos

| Campo técnico | Label exibido |
|---------------|---------------|
| created_at | "Data de criação" |
| updated_at | "Última atualização" |
| nomeacao_data | "Nomeação" |
| posse_data | "Posse" |
| exercicio_data | "Exercício" |
| fim_exercicio_data | "Fim do exercício" |
| motivo_fim | "Motivo do fim" |

---

## 11. Acessibilidade

> Implementação completa com ARIA e semântica HTML5

### 11.1 Navegação por Teclado

| Tecla | Ação |
|-------|------|
| Tab | Navegar entre elementos focáveis |
| Enter | Ativar botão/link |
| Escape | Fechar modal/dropdown |
| Setas | Navegar em tabs/menus |
| Space | Ativar checkboxes e botões |

### 11.2 ARIA Labels (Implementados)

| Elemento | aria-label | aria-* |
|----------|------------|--------|
| Botão voltar | "Voltar para gestão de estrutura" | - |
| Menu da estrutura | "Abrir menu de ações da estrutura" | `aria-haspopup="true"` |
| Filtro segmentado | - | `role="group"` + `aria-label` |
| Botões de filtro | - | `aria-pressed="true/false"` |
| Tabs | - | `role="tablist"` + `aria-selected` |
| Tabelas | "Lista de vínculos ativos" | `aria-label` |
| Modal | "Filtrar vínculos" | `role="dialog"` + `aria-modal` |

### 11.3 Semântica HTML5

| Elemento | Tag |
|----------|-----|
| Navegação de tabs | `<nav role="tablist">` |
| Breadcrumb | `<nav aria-label="Navegação">` |
| Conteúdo de tab | `<div role="tabpanel">` |
| Menus dropdown | `<div role="menu">` |
| Itens de menu | `<a role="menuitem">` |

### 11.4 Contraste (WCAG 2.1 AA)

| Par de cores | Ratio | Status |
|--------------|-------|--------|
| #1a1a1a / #FFFFFF | 17.4:1 | ✓ AAA |
| #666666 / #FFFFFF | 5.7:1 | ✓ AA |
| #FF161F / #FFFFFF | 4.6:1 | ✓ AA |
| #2e7d32 / #FFFFFF | 5.1:1 | ✓ AA |

### 11.5 Estados e Feedback

- Todos os elementos interativos têm estados `:focus` visíveis
- Mensagens de status usam `role="status"`
- Badges de status incluem `aria-label` descritivo

---

## 12. Critérios de Aceite

### Funcional

- [ ] Exibir dados corretos da estrutura no card
- [ ] Navegar entre as 3 tabs corretamente
- [ ] Filtrar vínculos por Ativos/Em atribuição/Inativos
- [ ] Buscar pessoas por nome
- [ ] Aplicar filtros avançados
- [ ] Paginar resultados
- [ ] Abrir menu de ações da estrutura
- [ ] Abrir menu de ações do vínculo
- [ ] Executar ações em massa
- [ ] Ordenar histórico por data
- [ ] Clicar no nome da pessoa e navegar para detalhes
- [ ] Exibir estado correto quando estrutura extinta

### Visual

- [ ] Card da estrutura conforme Figma
- [ ] Tabs conforme UI Kit SP.GOV.BR
- [ ] Tabela conforme padrão
- [ ] Badges de status com cores corretas
- [ ] Modal de filtro conforme design
- [ ] Responsividade em tablet e mobile

### Performance

- [ ] Carregamento inicial < 2 segundos
- [ ] Troca de tabs < 500ms
- [ ] Aplicação de filtro < 1 segundo

---

## 13. Histórico de Versões

| Versão | Data | Autor | Alterações |
|--------|------|-------|------------|
| 1.0 | 15/04/2026 | - | Versão inicial |
| 1.1 | 15/04/2026 | - | UI Kit SP.GOV.BR + Manual de Tom e Voz + Acessibilidade |
| 1.2 | 15/04/2026 | - | Deploy no Vercel + URLs de acesso |

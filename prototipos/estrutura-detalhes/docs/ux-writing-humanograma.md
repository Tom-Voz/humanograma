# Guia de UX Writing - Humanograma

**Sistema:** Humanograma  
**Baseado em:** Manual de Tom e Voz SP.GOV.BR  
**Referência:** https://www.cms.sp.gov.br/cms/tomevoz  
**Versão:** 1.0  
**Data:** 15/04/2026  

---

## 1. Fundamentos

### 1.1 Nossa Voz

A voz do Humanograma segue os princípios do Governo do Estado de São Paulo:

| Característica | Descrição |
|----------------|-----------|
| **Simples** | Priorizamos resolução de problemas e comunicação eficaz |
| **Respeitosa** | Tratamos todas as pessoas com respeito, sem informalidade excessiva |
| **Consistente** | Mantemos a mesma identidade em todos os pontos de contato |
| **Eficaz** | Focamos no que o usuário precisa saber para agir |

### 1.2 Tom por Contexto

| Contexto | Tom | Exemplo |
|----------|-----|---------|
| Ações normais | Direto, informativo | "Vínculo atualizado." |
| Erros | Empático, solucionador | "Não foi possível salvar. Verifique sua conexão e tente novamente." |
| Confirmações | Claro, preciso | "Tem certeza que deseja exonerar este vínculo?" |
| Sucesso | Breve, positivo | "Alterações salvas com sucesso." |
| Orientações | Acolhedor, instrutivo | "Selecione a estrutura de destino para a transferência." |

---

## 2. Princípios de Escrita

### 2.1 Linguagem Simples

❌ **Evitar:**
- "Efetuar a submissão do formulário"
- "Proceder com a operação de exclusão"
- "Favor informar os dados solicitados"

✅ **Usar:**
- "Enviar formulário"
- "Excluir"
- "Preencha os campos"

### 2.2 Ser Específico

❌ **Evitar:**
- "Clique aqui"
- "Saiba mais"
- "Continuar"

✅ **Usar:**
- "Ver detalhes do vínculo"
- "Ver todas as atualizações"
- "Continuar para revisão"

### 2.3 Usar Segunda Pessoa

❌ **Evitar:**
- "O usuário deve preencher..."
- "É necessário que se informe..."

✅ **Usar:**
- "Preencha..."
- "Informe..."
- "Selecione..."

---

## 3. Padrões por Componente

### 3.1 Títulos de Página

| Padrão | Exemplo |
|--------|---------|
| Substantivo + contexto | "Detalhes da estrutura" |
| Verbo + objeto | "Editar estrutura" |
| Objeto + ação | "Vínculos - Adicionar" |

### 3.2 Labels de Campos

| Padrão | Exemplo |
|--------|---------|
| Substantivo curto | "Nome", "CPF", "Cargo" |
| Composto se necessário | "Data de nascimento" |
| Evitar abreviações | "Telefone" (não "Tel.") |

### 3.3 Placeholders

| Tipo | Formato |
|------|---------|
| Texto livre | "Digite o nome da pessoa" |
| Formato específico | "DD/MM/AAAA" |
| Busca | "Procure pelo nome ou matrícula" |
| Seleção | "Selecione" |

### 3.4 Botões

| Tipo | Padrão | Exemplos |
|------|--------|----------|
| Ação primária | Verbo no infinitivo | "Salvar", "Enviar", "Filtrar" |
| Ação secundária | Verbo no infinitivo | "Cancelar", "Voltar", "Limpar" |
| Ação destrutiva | Verbo específico | "Excluir", "Exonerar", "Extinguir" |
| Ação de navegação | Contexto claro | "Ver detalhes", "Ir para estrutura" |

### 3.5 Links

| Tipo | Padrão | Exemplo |
|------|--------|---------|
| Inline | Texto descritivo | "Ver todas as atualizações" |
| Lista | Nome do destino | "Núcleo de Gestão de Estrutura" |
| Ação | Verbo + objeto | "Baixar lista completa" |

---

## 4. Mensagens de Sistema

### 4.1 Sucesso

```
✓ [Ação] realizada com sucesso.
```

| Ação | Mensagem |
|------|----------|
| Criar | "Estrutura criada com sucesso." |
| Editar | "Alterações salvas com sucesso." |
| Excluir | "Vínculo exonerado com sucesso." |
| Transferir | "Pessoa transferida com sucesso." |

### 4.2 Erro

```
Não foi possível [ação]. [Causa ou solução].
```

| Situação | Mensagem |
|----------|----------|
| Conexão | "Não foi possível salvar. Verifique sua conexão e tente novamente." |
| Validação | "Não foi possível enviar. Preencha os campos obrigatórios." |
| Permissão | "Você não tem permissão para realizar esta ação." |
| Não encontrado | "Estrutura não encontrada. Ela pode ter sido removida." |
| Genérico | "Ocorreu um erro. Tente novamente em alguns instantes." |

### 4.3 Alerta / Aviso

```
[Informação importante]. [Orientação, se necessário].
```

| Situação | Mensagem |
|----------|----------|
| Ação irreversível | "Esta ação não pode ser desfeita." |
| Sessão expirando | "Sua sessão expira em 5 minutos. Salve seu trabalho." |
| Manutenção | "O sistema estará indisponível das 22h às 6h para manutenção." |

### 4.4 Confirmação

```
Tem certeza que deseja [ação]? [Consequência].
```

| Ação | Mensagem |
|------|----------|
| Exonerar | "Tem certeza que deseja exonerar [Nome]? O vínculo será encerrado." |
| Extinguir | "Tem certeza que deseja extinguir esta estrutura? Todos os vínculos ativos serão encerrados." |
| Cancelar atribuição | "Tem certeza que deseja cancelar esta atribuição? O processo será interrompido." |
| Sair sem salvar | "Você tem alterações não salvas. Deseja sair mesmo assim?" |

---

## 5. Estados Vazios

### 5.1 Padrão

```
[Descrição do estado]. [Ação sugerida, se aplicável].
```

| Contexto | Mensagem |
|----------|----------|
| Lista vazia | "Nenhum vínculo encontrado." |
| Filtro sem resultados | "Nenhum resultado para os filtros aplicados. Tente ajustar os critérios." |
| Histórico vazio | "Nenhuma alteração registrada." |
| Busca sem resultados | "Nenhuma pessoa encontrada para '[termo]'." |

### 5.2 Por Segmento (Vínculos)

| Segmento | Mensagem |
|----------|----------|
| Ativos | "Nenhum vínculo ativo nesta estrutura." |
| Em atribuição | "Nenhuma pessoa em processo de atribuição." |
| Inativos | "Nenhum vínculo inativo registrado." |

---

## 6. Labels Específicos do Humanograma

### 6.1 Mapeamento Técnico → Exibição

| Campo no banco | Label exibido |
|----------------|---------------|
| `estrutura_nome` | Nome |
| `estrutura_sigla` | Sigla |
| `estrutura_codigo` | Código |
| `centro_custo` | Centro de custo |
| `tipo_administracao` | Tipo de administração |
| `subtipo_administracao` | (sem label, complementa o tipo) |
| `atribuicoes` | Atribuições |
| `finalidade` | Finalidade |
| `legislacao_url` | Legislação |
| `nomeacao_data` | Nomeação |
| `posse_data` | Posse |
| `exercicio_data` | Exercício |
| `fim_exercicio_data` | Fim do exercício |
| `motivo_fim` | Motivo do fim |
| `tipo_vinculo` | Tipo de vínculo |
| `numero_vaga` | Número da vaga |
| `tipo_recrutamento` | Tipo de recrutamento |
| `tipo_alocacao` | Tipo de alocação |
| `regime` | Regime |
| `matricula` | Matrícula |
| `cpf` | CPF |
| `rg` | RG |
| `data_nascimento` | Data de nascimento |
| `email_institucional` | E-mail institucional |
| `telefone` | Telefone |
| `whatsapp` | WhatsApp |
| `site` | Site |

### 6.2 Status e Badges

| Status técnico | Label exibido | Cor |
|----------------|---------------|-----|
| `ativo` | Ativo | Verde |
| `inativo` | Inativo | Vermelho |
| `extinto` | Extinta | Vermelho |
| `em_exercicio` | Em exercício | Verde |
| `em_atribuicao` | Em atribuição | Amarelo |
| `aguardando_indicacao` | Aguardando indicação | Amarelo |
| `aguardando_documentos` | Aguardando documentos | Amarelo |

### 6.3 Ações no Menu

| Ação técnica | Label exibido | Contexto |
|--------------|---------------|----------|
| `edit` | Editar | Estrutura, Vínculo |
| `transfer` | Transferir | Estrutura, Pessoa |
| `extinguish` | Extinguir | Estrutura |
| `exonerate` | Exonerar | Vínculo |
| `download` | Baixar lista completa | Vínculos |
| `view_history` | Ver histórico | Vínculo inativo |
| `view_process` | Ver processo | Vínculo em atribuição |
| `cancel` | Cancelar atribuição | Vínculo em atribuição |

---

## 7. Microcopy

### 7.1 Tooltips

| Elemento | Tooltip |
|----------|---------|
| Ícone de olho (CPF) | "Exibir CPF completo" |
| Ícone de filtro | "Filtrar vínculos" |
| Ícone de ordenação | "Ordenar lista" |
| Ícone de menu (⋮) | "Mais ações" |
| Ícone de informação | "Mais informações" |

### 7.2 Textos de Ajuda

| Campo | Texto de ajuda |
|-------|----------------|
| Nomeação | "Data da publicação no Diário Oficial" |
| Posse | "Data em que a pessoa tomou posse do cargo" |
| Exercício | "Data de início efetivo das atividades" |
| Centro de custo | "Código contábil para alocação de despesas" |

### 7.3 Textos Truncados

| Elemento | Comportamento |
|----------|---------------|
| Texto longo (Atribuições) | Truncar + "Exibir mais" |
| Nome longo | Truncar com "..." no hover full |
| Timeline | Máx. 5 itens + "Ver todas" |

---

## 8. Acessibilidade Textual

### 8.1 Texto Alternativo (alt)

| Elemento | alt text |
|----------|----------|
| Avatar | "[Nome da pessoa]" ou "Foto de [Nome]" |
| Logo | "Logo do Sistema Humanograma" |
| Ícone decorativo | "" (vazio) |
| Ícone funcional | Descrição da função |

### 8.2 ARIA Labels

| Componente | aria-label |
|------------|------------|
| Botão voltar | "Voltar para [página anterior]" |
| Botão expandir | "Expandir detalhes de [item]" |
| Menu de ações | "Abrir menu de ações" |
| Campo de busca | "Buscar pessoas vinculadas" |
| Filtro segmentado | "Filtrar vínculos por status" |

### 8.3 Anúncios para Leitores de Tela

| Evento | Anúncio |
|--------|---------|
| Filtro aplicado | "Mostrando [N] vínculos [status]" |
| Ordenação alterada | "Lista ordenada por [critério]" |
| Card expandido | "[Cargo] - detalhes expandidos" |
| Sucesso | "[Ação] realizada com sucesso" |
| Erro | "Erro: [mensagem]" |

---

## 9. Vocabulário Controlado

### 9.1 Termos Preferidos

| Evitar | Usar |
|--------|------|
| Funcionário | Pessoa vinculada, Colaborador |
| Deletar | Excluir, Remover |
| Submeter | Enviar |
| Logar | Entrar |
| Deslogar | Sair |
| Resetar | Redefinir |
| Setar | Definir, Configurar |
| Salvar | Salvar (OK), Gravar |
| OK | Confirmar, Entendido |
| Click | Clique |

### 9.2 Verbos de Ação

| Ação | Verbo |
|------|-------|
| Criar novo | Adicionar, Criar, Cadastrar |
| Modificar | Editar, Alterar |
| Remover | Excluir, Remover |
| Encerrar vínculo | Exonerar |
| Encerrar estrutura | Extinguir |
| Mover para outra estrutura | Transferir |
| Ver mais informações | Ver detalhes, Expandir |
| Pesquisar | Buscar, Procurar |
| Aplicar filtro | Filtrar |
| Remover filtro | Limpar |

---

## 10. Checklist de Revisão

Antes de finalizar qualquer texto de interface, verifique:

- [ ] O texto está em português correto?
- [ ] Evitou jargões técnicos desnecessários?
- [ ] Usou verbos no infinitivo para ações?
- [ ] O botão indica claramente o que vai acontecer?
- [ ] A mensagem de erro oferece solução?
- [ ] O texto é conciso sem perder clareza?
- [ ] Há consistência com outros textos do sistema?
- [ ] O tom é respeitoso e profissional?
- [ ] O texto funciona bem em diferentes tamanhos de tela?
- [ ] Os labels de acessibilidade estão adequados?

---

## 11. Referências

- Manual de Tom e Voz SP.GOV.BR: https://www.cms.sp.gov.br/cms/tomevoz/sobre
- UI Kit Poupatempo SP.GOV.BR
- Torrey Podmajersky - Redação Estratégica para UX (2019)

---

## 12. Histórico de Versões

| Versão | Data | Autor | Alterações |
|--------|------|-------|------------|
| 1.0 | 15/04/2026 | - | Versão inicial |

# Documentação - Protótipos Humanograma

**Sistema:** Humanograma  
**Módulo:** Gestão Organizacional  
**Última atualização:** 15/04/2026  
**Versão:** 1.2 - Deploy no Vercel + Correções

---

## Acesso aos Protótipos

### Produção (Vercel)

| Página | URL |
|--------|-----|
| Detalhes da Estrutura | https://humanograma.vercel.app/index.html |
| Detalhes da Pessoa | https://humanograma.vercel.app/colaborador-vinculado.html |
| Gestão de Estrutura | https://humanograma.vercel.app/gestao-estrutura.html |
| Editar Estrutura | https://humanograma.vercel.app/editar-estrutura.html |

### Repositório

- **GitHub:** https://github.com/Tom-Voz/humanograma

---

## Índice de Documentos

### Especificações Funcionais

| Documento | Descrição | Versão | Status |
|-----------|-----------|--------|--------|
| [Detalhes da Estrutura](./especificacao-detalhes-estrutura.md) | Especificação da página de detalhes de estrutura | 1.2 | ✅ Atualizado |
| [Detalhes da Pessoa](./especificacao-detalhes-pessoa.md) | Especificação da página de detalhes de pessoa | 1.2 | ✅ Atualizado |

### Guias de Design

| Documento | Descrição | Versão | Status |
|-----------|-----------|--------|--------|
| [UX Writing](./ux-writing-humanograma.md) | Guia de redação para interfaces | 1.0 | ✅ Concluído |

### Changelog

#### v1.2 (15/04/2026)
- Deploy no Vercel
- Correção do nome civil na página de pessoa
- Ajuste do campo CPF com botão de revelar inline
- Atualização das URLs de acesso

#### v1.1
- Aplicado design tokens (cores, espaçamentos, tipografia)
- Implementada acessibilidade completa (ARIA, roles, semântica HTML5)
- Textos revisados conforme Manual de Tom e Voz SP.GOV.BR
- Adicionado mascaramento de CPF com toggle
- Melhorada navegação por teclado
- Badges de status em vínculos colapsados

---

## Referências Externas

### Design System

- **UI Kit Poupatempo SP.GOV.BR:** [Figma](https://www.figma.com/design/JbsTL4lbVrCoDxDJZ1D6up/UI-Kit-Poupatempo-SP.GOV.BR)
- **Componentes Humanograma:** [Figma](https://www.figma.com/design/FlfKbQrOdNkdKSeoMvBl9F/Humanograma---Prodesp-V1)

### Tom e Voz

- **Manual SP.GOV.BR:** [cms.sp.gov.br/cms/tomevoz](https://www.cms.sp.gov.br/cms/tomevoz/sobre)

---

## Estrutura de Pastas

```
prototipos/
└── estrutura-detalhes/
    ├── docs/                          ← Você está aqui
    │   ├── README.md                  ← Índice
    │   ├── especificacao-detalhes-estrutura.md
    │   ├── especificacao-detalhes-pessoa.md
    │   └── ux-writing-humanograma.md
    ├── index.html                     ← Protótipo: Detalhes da Estrutura
    ├── colaborador-vinculado.html     ← Protótipo: Detalhes da Pessoa
    ├── gestao-estrutura.html          ← Protótipo: Árvore de Estruturas
    ├── editar-estrutura.html          ← Protótipo: Edição de Estrutura
    ├── styles.css                     ← Estilos globais
    ├── pages.css                      ← Estilos específicos de página
    └── script.js                      ← Interações JavaScript
```

---

## Design Tokens (CSS Custom Properties)

Os tokens estão definidos em `styles.css` como variáveis CSS:

### Cores

| Token | Valor | Uso |
|-------|-------|-----|
| `--color-primary` | #FF161F | Cor de destaque, links, ações primárias |
| `--color-success` | #2e7d32 | Status ativo, sucesso |
| `--color-warning` | #f9a825 | Status pendente, alertas |
| `--color-error` | #c62828 | Status inativo, erros |
| `--color-inactive` | #9e9e9e | Status encerrado |
| `--color-text` | #1a1a1a | Texto principal |
| `--color-text-secondary` | #666666 | Texto secundário |
| `--color-border` | #e0e0e0 | Bordas padrão |
| `--color-bg` | #FFFFFF | Fundo principal |

### Tipografia

| Token | Valor |
|-------|-------|
| `--font-family` | 'Rawline', system fonts |
| `--font-size-base` | 14px |
| `--font-size-lg` | 18px |
| `--font-size-xl` | 20px |

### Espaçamento

| Token | Valor |
|-------|-------|
| `--spacing-sm` | 8px |
| `--spacing-md` | 16px |
| `--spacing-lg` | 24px |
| `--spacing-xl` | 32px |

---

## Como Usar

### Visualizar Protótipos

1. Abra o arquivo HTML desejado no navegador
2. Navegue entre as páginas usando os links
3. Interaja com os componentes (tabs, menus, cards expansíveis)

### Compartilhar Protótipos

Opções para compartilhar com stakeholders:

1. **GitHub Pages** - Hospedar gratuitamente
2. **Netlify** - Deploy automático
3. **Vercel** - Deploy automático
4. **Compactar em ZIP** - Enviar arquivos diretamente

### Atualizar Documentação

1. Edite os arquivos Markdown
2. Mantenha a estrutura e formatação consistentes
3. Atualize a data de última atualização

---

## Próximos Passos

- [ ] Especificação: Gestão de Estrutura (árvore)
- [ ] Especificação: Editar Estrutura
- [ ] Cenários de teste detalhados
- [ ] Matriz de rastreabilidade (requisitos x telas)

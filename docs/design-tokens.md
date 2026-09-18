# Tokens de visual — Millabeauty

Paleta baseada no Instagram **@millabeauty_6** (bio: "💜 Tudo por apenas
R$ 10,00 | 💄 Maquiagem | Cosméticos | Acessórios"): loja de bazar/preço
baixo, tom descontraído, fotos de produto em fundo claro com grafismos
informativos. Isso é uma virada em relação ao tema escuro+dourado usado
antes (referência genérica de "bijuteria premium"), então troquei fundação
inteira: tema claro, roxo/rosa vibrante.

Trocado em `css/loja.css` (tokens em `:root`) e replicado nos hardcodes
de `css/admin.css`.

## Tokens

| Token | Valor | Uso |
|---|---|---|
| `--bg` | `#fef8fc` | fundo geral (branco levemente rosado) |
| `--bg-2` | `#f7ecf6` | seções secundárias (rodapé, drawer) |
| `--surface` | `#ffffff` | cards, inputs |
| `--surface-2` | `#f3e2f1` | hover de superfície |
| `--line` / `--line-2` | `rgba(123,31,130,.14 / .26)` | bordas (roxo bem diluído, não cinza puro) |
| `--txt` | `#2b1330` | texto principal (ameixa escuro, não preto puro) |
| `--txt-2` / `--txt-3` | `#6e5473` / `#a08ba3` | texto secundário/terciário |
| `--brand` | `#9c1fb0` | roxo — botões, links ativos, preço em destaque |
| `--brand-2` | `#c2299e` | hover do brand |
| `--brand-ink` | `#ffffff` | texto sobre fundo `--brand` |
| `--gold` | `#ff2e87` | rosa vibrante — estrelinhas de qualidade, tag "destaque" no admin |
| `--wa` | `#25d366` | verde do WhatsApp (não muda com a marca) |

## Onde teve hardcode fora do :root (ajustado manualmente)

- `.topbar` (faixa de avisos): fundo preto → `var(--brand)`, texto branco
- `.hdr` / `.adm__bar` (headers sticky): backdrop escuro translúcido → branco translúcido
- `.hero` / `.login` (gradiente radial de destaque): dourado → roxo/rosa
- `.rail__nav` (setas do carrossel): círculo escuro sólido → `var(--surface)` com borda, hover vira `var(--brand)`
- `.size.is-active` / `.tamanho.is-on`: fundo `var(--txt)` (que agora é escuro) → `var(--brand)` com texto branco
- `.demobar` (aviso de modo demonstração): âmbar escuro → rosa claro
- scrollbar: cinza escuro → lilás claro
- `js/admin.js`: fundo de canvas ao comprimir foto com transparência, `#17171c` → `#ffffff`
- `js/demo-data.js`: SVGs de produto de exemplo (`joia()`) — fundo escuro → gradiente claro rosado

## Identidade da loja (`CONFIG_PADRAO` em `js/config.js`)

Também trocado, já que o catálogo é a Millabeauty de verdade: nome,
slogan, aviso de delivery (São Luís em vez de "envio Brasil"), link do
Instagram e o texto do hero. Isso só vale como *fallback* — se algum dia
alguém salvar os "Dados da loja" pelo painel, o que estiver no Firestore
(`config/loja`) passa a mandar em vez destes valores. Até 18/09/2026 esse
documento ainda não existia no Firestore da millabeauty-86709, então essas
strings são o que está no ar agora.

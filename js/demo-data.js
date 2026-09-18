/* ============================================================
   DADOS DE DEMONSTRAÇÃO
   Usados só quando o Firebase ainda não foi configurado, para que
   o site já abra com conteúdo. Assim que a loja for populada pelo
   painel, esses dados deixam de aparecer.
   As imagens são desenhadas em SVG (nenhum arquivo externo).
   ============================================================ */

/** Gera uma imagem de joia em SVG (data URI) para os produtos de exemplo. */
function joia(corBase, corDetalhe, brilho = false) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#212127"/><stop offset="1" stop-color="#141418"/>
      </linearGradient>
      <radialGradient id="sh" cx="35%" cy="30%" r="70%">
        <stop offset="0" stop-color="${corBase}" stop-opacity=".9"/>
        <stop offset="1" stop-color="${corBase}" stop-opacity=".55"/>
      </radialGradient>
      <pattern id="mesh" width="16" height="16" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <path d="M0 0V16M0 0H16" stroke="#2b2b33" stroke-width="1.2" fill="none"/>
      </pattern>
    </defs>
    <rect width="400" height="400" fill="url(#bg)"/>
    <rect width="400" height="400" fill="url(#mesh)"/>
    <g transform="translate(200 190)">
      <circle r="86" fill="none" stroke="${corDetalhe}" stroke-width="3" opacity=".5"/>
      <path d="M0-58 30-30 30 30 0 58 -30 30 -30-30Z" fill="url(#sh)" stroke="${corDetalhe}" stroke-width="3" stroke-linejoin="round"/>
      <path d="M0-58 0 58M-30-30 30-30M-30 30 30 30" stroke="${corDetalhe}" stroke-width="1.6" opacity=".6"/>
      ${brilho ? `<circle cx="-22" cy="-24" r="7" fill="#ffffff" opacity=".75"/><circle cx="18" cy="10" r="4" fill="#ffffff" opacity=".5"/>` : ""}
    </g>
  </svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

export const CATEGORIAS_DEMO = [
  { id: "colares", nome: "Colares", slug: "colares", ordem: 1, ativa: true },
  { id: "brincos", nome: "Brincos", slug: "brincos", ordem: 2, ativa: true },
  { id: "aneis", nome: "Anéis", slug: "aneis", ordem: 3, ativa: true },
  { id: "pulseiras", nome: "Pulseiras", slug: "pulseiras", ordem: 4, ativa: true },
  { id: "conjuntos", nome: "Conjuntos", slug: "conjuntos", ordem: 5, ativa: true },
];

const base = {
  ativo: true,
  tamanhos: [],
  descricao:
    "Banhado a ouro 18k ou ródio, com camada protetora antialérgica.\nNão escurece nem descasca com o uso comum.\nProduto de primeira linha (1:1).",
};

let n = 0;
const p = (o) => ({ id: "demo" + ++n, ordem: n, criadoEm: Date.now() - n * 6e5, ...base, ...o });

export const PRODUTOS_DEMO = [
  p({ nome: "Colar Ponto de Luz Zircônia", categoria: "colares", preco: 39.9, precoAntigo: 79.9, estrelas: 2, thumb: joia("#e7c467", "#8a6a1f", true) }),
  p({ nome: "Colar Gargantilha Banhada a Ouro", categoria: "colares", preco: 44.9, precoAntigo: 89.9, estrelas: 2, embalagem: true, thumb: joia("#e9cf7a", "#7c5e1c") }),
  p({ nome: "Colar Choker Veludo", categoria: "colares", preco: 32.9, precoAntigo: 59.9, estrelas: 1, thumb: joia("#3a2f2f", "#c9a24a") }),
  p({ nome: "Colar Corrente Cadeado", categoria: "colares", preco: 49.9, precoAntigo: 99.9, estrelas: 2, thumb: joia("#d9d9de", "#6f7075") }),
  p({ nome: "Colar Pingente Coração", categoria: "colares", preco: 36.9, precoAntigo: 69.9, estrelas: 1, thumb: joia("#e2b8c4", "#8c3f56", true) }),
  p({ nome: "Colar Camadas Duplas", categoria: "colares", preco: 47.9, precoAntigo: 89.9, estrelas: 2, thumb: joia("#e7c467", "#8a6a1f") }),

  p({ nome: "Brinco Argola Média Dourada", categoria: "brincos", preco: 24.9, precoAntigo: 44.9, estrelas: 2, thumb: joia("#e9cf7a", "#7c5e1c") }),
  p({ nome: "Brinco Argola Grande Prata", categoria: "brincos", preco: 26.9, precoAntigo: 49.9, estrelas: 2, thumb: joia("#d9d9de", "#6f7075") }),
  p({ nome: "Brinco Ear Cuff Zircônia", categoria: "brincos", preco: 29.9, precoAntigo: 54.9, estrelas: 2, embalagem: true, thumb: joia("#e7c467", "#8a6a1f", true) }),
  p({ nome: "Brinco Gota Cristal", categoria: "brincos", preco: 27.9, precoAntigo: 49.9, estrelas: 1, thumb: joia("#b9d7e0", "#3d6b78", true) }),

  p({ nome: "Anel Solitário Zircônia", categoria: "aneis", preco: 34.9, precoAntigo: 64.9, estrelas: 2, thumb: joia("#e7c467", "#8a6a1f", true), tamanhos: ["14", "16", "18", "20", "22"] }),
  p({ nome: "Anel Trio Fininho", categoria: "aneis", preco: 29.9, precoAntigo: 54.9, estrelas: 1, thumb: joia("#d9d9de", "#6f7075"), tamanhos: ["14", "16", "18", "20", "22"] }),
  p({ nome: "Anel Ajustável Folha", categoria: "aneis", preco: 22.9, precoAntigo: 0, estrelas: 1, thumb: joia("#c7d9b8", "#4c6b34"), tamanhos: ["Único"] }),
  p({ nome: "Anel Banhado a Ouro Liso", categoria: "aneis", preco: 26.9, precoAntigo: 49.9, estrelas: 2, embalagem: true, thumb: joia("#e9cf7a", "#7c5e1c"), tamanhos: ["14", "16", "18", "20", "22"] }),

  p({ nome: "Pulseira Berloques", categoria: "pulseiras", preco: 32.9, precoAntigo: 59.9, estrelas: 2, thumb: joia("#e7c467", "#8a6a1f") }),
  p({ nome: "Pulseira Riviera Zircônia", categoria: "pulseiras", preco: 38.9, precoAntigo: 74.9, estrelas: 2, thumb: joia("#e9e9ee", "#7c7d82", true) }),
  p({ nome: "Pulseira Corrente Cadeado", categoria: "pulseiras", preco: 29.9, precoAntigo: 54.9, estrelas: 1, thumb: joia("#d9d9de", "#6f7075") }),
  p({ nome: "Pulseira Couro Trançado", categoria: "pulseiras", preco: 24.9, precoAntigo: 0, estrelas: 1, thumb: joia("#6b4a34", "#2c1d13") }),

  p({ nome: "Conjunto Colar + Brinco Cristal", categoria: "conjuntos", preco: 59.9, precoAntigo: 119.9, estrelas: 2, thumb: joia("#b9d7e0", "#3d6b78", true) }),
  p({ nome: "Conjunto Noiva Perolado", categoria: "conjuntos", preco: 89.9, precoAntigo: 169.9, estrelas: 2, embalagem: true, thumb: joia("#f2ecda", "#a68f5c", true) }),
  p({ nome: "Conjunto Dourado Clássico", categoria: "conjuntos", preco: 64.9, precoAntigo: 129.9, estrelas: 2, thumb: joia("#e7c467", "#8a6a1f") }),
  p({ nome: "Conjunto Prata Minimalista", categoria: "conjuntos", preco: 54.9, precoAntigo: 99.9, estrelas: 1, thumb: joia("#d9d9de", "#6f7075") }),
  p({ nome: "Conjunto Festa Zircônia", categoria: "conjuntos", preco: 79.9, precoAntigo: 149.9, estrelas: 2, embalagem: true, thumb: joia("#e7c467", "#8a6a1f", true) }),
  p({ nome: "Conjunto Madrinha Delicado", categoria: "conjuntos", preco: 69.9, precoAntigo: 129.9, estrelas: 1, thumb: joia("#e2b8c4", "#8c3f56") }),
];

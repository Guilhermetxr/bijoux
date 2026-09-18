/* ============================================================
   HOME
   Mostra uma amostra de cada categoria em carrossel. O estoque
   completo fica atrás do "Ver todos" — a vitrine nunca despeja
   tudo de uma vez.
   ============================================================ */

import { dados } from "./db.js";
import { LIMITE_HOME } from "./config.js";
import {
  montarLayout, cardProduto, skeletons, linkWhats, ico, esc, revelar, perks,
} from "./ui.js";

const $ = (s) => document.querySelector(s);

async function iniciar() {
  const { cfg, categorias } = await montarLayout({ ativo: "home" });

  /* ---------- hero ---------- */
  $("#heroTitulo").innerHTML = destacarUltimaPalavra(cfg.heroTitulo || cfg.nome);
  $("#heroTexto").textContent = cfg.heroTexto || cfg.slogan || "";
  $("#heroKicker").textContent = cfg.slogan || "Catálogo";
  $("#heroWhats").href = linkWhats(cfg);
  $("#heroWhats").innerHTML = `${ico.whats} Falar no WhatsApp`;

  /* ---------- esqueleto das seções (evita o "pulo" do layout) ---------- */
  const alvo = $("#secoes");
  alvo.innerHTML = categorias
    .map(
      (c) => `
      <section class="section reveal" id="sec-${esc(c.slug)}">
        <div class="section__head">
          <h2 class="section__title">${esc(c.nome)}</h2>
          <a class="section__all" href="categoria.html?c=${esc(c.slug)}">Ver todos ${ico.seta}</a>
        </div>
        <div class="rail">
          <button class="rail__nav rail__nav--prev" data-nav="prev" aria-label="Anterior">${ico.setaEsq}</button>
          <div class="rail__track" data-track="${esc(c.slug)}">${skeletons(4)}</div>
          <button class="rail__nav rail__nav--next" data-nav="next" aria-label="Próximo">${ico.seta}</button>
        </div>
      </section>`
    )
    .join("");

  revelar();

  /* ---------- carrega os produtos de cada seção ---------- */
  const vazias = [];
  await Promise.all(
    categorias.map(async (c) => {
      const track = alvo.querySelector(`[data-track="${CSS.escape(c.slug)}"]`);
      try {
        const { itens } = await dados.produtos({ categoria: c.slug, limite: LIMITE_HOME });
        if (!itens.length) {
          vazias.push(c.slug);
          return;
        }
        track.innerHTML =
          itens.map((p) => cardProduto(p, cfg)).join("") +
          `<a class="card" href="categoria.html?c=${esc(c.slug)}" style="justify-content:center">
             <div class="card__media" style="display:grid;place-items:center;text-align:center;gap:8px">
               <span style="color:var(--brand)">${ico.seta.replace("<svg", '<svg style="width:26px;height:26px"')}</span>
               <span style="font-size:13px;color:var(--txt-2);padding:0 14px">Ver todos os itens<br>de ${esc(c.nome)}</span>
             </div>
           </a>`;
        ligarRail(track);
      } catch (e) {
        console.error(e);
        track.innerHTML = `<p style="color:var(--txt-3);font-size:13.5px">Não foi possível carregar esta seção.</p>`;
      }
    })
  );

  /* seções sem produto somem — o catálogo não mostra prateleira vazia */
  vazias.forEach((slug) => document.getElementById("sec-" + slug)?.remove());

  if (!document.querySelector(".section")) {
    alvo.innerHTML = `
      <div class="empty">
        ${ico.caixaVazia}
        <h3>Catálogo em montagem</h3>
        <p>Ainda não há produtos publicados.</p>
        <a class="btn btn--brand" href="admin.html">Entrar no painel da loja</a>
      </div>`;
  }

  $("#faixaPerks").outerHTML = perks;
}

/** Deixa a última palavra do título em vermelho — dá ritmo à manchete. */
function destacarUltimaPalavra(titulo) {
  const partes = esc(titulo).trim().split(/\s+/);
  if (partes.length < 2) return `<em>${partes[0] || ""}</em>`;
  const ultima = partes.pop();
  return `${partes.join(" ")} <em>${ultima}</em>`;
}

/** Setas do carrossel (só aparecem no desktop). */
function ligarRail(track) {
  const rail = track.closest(".rail");
  const prev = rail.querySelector('[data-nav="prev"]');
  const next = rail.querySelector('[data-nav="next"]');
  /* a suavidade vem do scroll-behavior no CSS — mexer no scrollLeft
     direto funciona em qualquer navegador, com ou sem animação */
  const passo = () => (track.querySelector(".card")?.offsetWidth || 240) * 2 + 36;

  prev.addEventListener("click", () => (track.scrollLeft -= passo()));
  next.addEventListener("click", () => (track.scrollLeft += passo()));

  const atualizar = () => {
    prev.disabled = track.scrollLeft < 8;
    next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8;
  };
  track.addEventListener("scroll", atualizar, { passive: true });
  atualizar();
}

iniciar().catch((e) => {
  console.error(e);
  document.getElementById("secoes").innerHTML =
    `<div class="empty"><h3>Erro ao carregar</h3><p>${esc(e.message || e)}</p></div>`;
});

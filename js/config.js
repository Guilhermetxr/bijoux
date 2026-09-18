/* ============================================================
   CONFIGURAÇÃO DO PROJETO
   ------------------------------------------------------------
   1) Crie um projeto em https://console.firebase.google.com
   2) Ative  Authentication > Sign-in method > E-mail/senha
   3) Ative  Firestore Database (modo produção)
   4) Em "Configurações do projeto > Seus apps > Web", copie o
      objeto de configuração e cole abaixo, no lugar dos "COLE_AQUI".

   Enquanto os campos não forem preenchidos, o site roda em
   MODO DEMONSTRAÇÃO: os dados ficam salvos apenas no navegador
   (localStorage) e servem para testar o layout e o painel.
   ============================================================ */

export const firebaseConfig = {
  apiKey: "AIzaSyCaLw7nJbrUb_iGj9Wa7Xzj3V48Q7sC5YM",
  authDomain: "millabeauty-86709.firebaseapp.com",
  projectId: "millabeauty-86709",
  storageBucket: "millabeauty-86709.firebasestorage.app",
  messagingSenderId: "828991322830",
  appId: "1:828991322830:web:ed3c9b0911c0dd0cd46e9f",
  measurementId: "G-10T0755PT9"
};

/* Versão do SDK do Firebase carregada via CDN. */
export const FIREBASE_VERSION = "11.0.2";

/* Senha usada apenas no MODO DEMONSTRAÇÃO (sem Firebase configurado).
   Com o Firebase ativo, o login passa a ser o de verdade (e-mail + senha). */
export const DEMO_SENHA = "bijoux123";

/* Valores usados quando ainda não há nada salvo em "config/loja". */
export const CONFIG_PADRAO = {
  nome: "Millabeauty",
  slogan: "Maquiagem, cosméticos e acessórios",
  whatsapp: "5511999999999", // formato: 55 + DDD + número (só dígitos) — trocar pelo WhatsApp real
  mensagemPadrao: "Olá! Vi o catálogo e queria saber mais sobre:",
  instagram: "https://instagram.com/millabeauty_6",
  avisos: [
    "DELIVERY PARA TODA SÃO LUÍS",
    "PAGUE COM PIX E GANHE DESCONTO",
    "ATACADO A PARTIR DE 5 PEÇAS",
  ],
  heroTitulo: "Coleção 2026",
  heroTexto:
    "Colares, brincos, anéis, pulseiras e conjuntos. Escolha a peça e fale com a gente no WhatsApp — delivery para toda São Luís.",
  rodapeTexto:
    "Catálogo digital. Preços e disponibilidade sujeitos a alteração — confirme no WhatsApp antes de fechar o pedido.",
};

/* Quantos produtos aparecem por vez. A ideia é nunca despejar o
   estoque inteiro de uma vez: a home mostra uma amostra por seção
   e a página da categoria carrega aos poucos. */
export const LIMITE_HOME = 8;
export const LIMITE_PAGINA = 12;
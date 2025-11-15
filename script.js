// Abrir formulário flutuante
const openBtn = document.getElementById('openForm');
const floatingForm = document.getElementById('floatingForm');
const closeBtn = document.getElementById('closeForm');
const heroHiden = document.getElementById('heroHiden');

// Abrir com fade-in
openBtn.addEventListener('click', (e) => {
  e.preventDefault();
  floatingForm.classList.add('show');
  heroHiden.classList.add('hidden');
});

// Fechar com fade-out
closeBtn.addEventListener('click', () => {
  floatingForm.classList.remove('show');
  heroHiden.classList.remove('hidden');
});

// Fechar ao clicar fora do formulário
floatingForm.addEventListener('click', (e) => {
  if (e.target === floatingForm) {
    floatingForm.classList.remove('show');
    heroHiden.classList.remove('hidden');
  }
});

// Enviar dados para WhatsApp
const form = document.getElementById('leadForm');
form.addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;
  const mensagem = document.getElementById('mensagem').value;

  const numeroWhatsApp = '558191923121'; // altere aqui
  let texto = `Olá, gostaria de mais informações.%0A%0A` +
              `*Nome:* ${nome}%0A` +
              `*E-mail:* ${email}%0A` +
              `*Telefone:* ${telefone}%0A` +
              `*Mensagem:* ${mensagem || 'Não informado'}%0A`;

  const url = `https://wa.me/${numeroWhatsApp}?text=${texto}`;
  window.open(url, '_blank');

  floatingForm.style.display = 'none';
});


// === EFEITO PARALLAX LEVE ===
const hero = document.querySelector(".hero");
document.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth - e.pageX * 2) / 100;
  const y = (window.innerHeight - e.pageY * 2) / 100;
  hero.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
});

// === EFEITO FADE-IN AO ROLAR ===
function revelarElementos() {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const visiblePoint = 150;

    if (elementTop < windowHeight - visiblePoint) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", revelarElementos);
revelarElementos(); // inicial

// FORM COTAÇÃO
const formCotacao = document.getElementById("formCotacao");
const closeCotacao = document.getElementById("closeCotacao");

// Abrir formulário ao clicar em "Cotar plano"
document.querySelectorAll(".cotarBtn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    formCotacao.classList.add("show");
  });
});

// Fechar
closeCotacao.addEventListener("click", () => {
  formCotacao.classList.remove("show");
});

// Enviar WhatsApp
document.getElementById("cotacaoForm").addEventListener("submit", function(e){
  e.preventDefault();

  const nome = document.getElementById("cot_nome").value;
  const vidas = document.getElementById("cot_vidas").value;
  const cnpj = document.getElementById("cot_cnpj").value;

  const numeroWhatsApp = "5581992455058";

  const texto = 
    `Olá! Quero cotar um plano de saúde.%0A%0A` +
    `*Nome:* ${nome}%0A` +
    `*Vidas:* ${vidas}%0A` +
    `*Possui CNPJ:* ${cnpj}`;

  window.open(`https://wa.me/${numeroWhatsApp}?text=${texto}`, "_blank");

  formCotacao.classList.remove("show");
});

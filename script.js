document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const menu = document.getElementById("menu");

  if (!menuIcon || !menu) {
    console.warn("Elemento #menu-icon ou #menu não encontrado.");
    return;
  }

  menuIcon.addEventListener("click", function () {
    console.log("Clicou no menu!"); // ver no console para confirmar
    menu.classList.toggle("ativo");

    // Acessibilidade: atualizar atributos
    const expanded = menu.classList.contains("ativo");
    menuIcon.setAttribute("aria-expanded", expanded ? "true" : "false");
    menu.setAttribute("aria-hidden", expanded ? "false" : "true");
  });
});


const carrossel = document.querySelector(".carrossel");
let imagens = document.querySelectorAll(".carrossel img");

let index = 0;
const total = imagens.length;

// Clona a primeira imagem e adiciona no final (para o looping suave)
const primeira = imagens[0].cloneNode(true);
carrossel.appendChild(primeira);

// Atualiza a lista com a imagem clonada
imagens = document.querySelectorAll(".carrossel img");

function trocarImagem() {
  index++;
  carrossel.style.transition = "transform 1s ease";
  carrossel.style.transform = `translateX(-${index * 100}vw)`; // <-- usa vw agora

  // Quando chegar na imagem clonada, reseta sem transição
  if (index === imagens.length - 1) {
    setTimeout(() => {
      carrossel.style.transition = "none";
      carrossel.style.transform = "translateX(0)";
      index = 0;
    }, 1000);
  }
}

setInterval(trocarImagem, 5000); // troca a cada 4 segundos




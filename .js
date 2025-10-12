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

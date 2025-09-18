// Elementos do DOM
const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;
const accordionHeaders = document.querySelectorAll(".accordion__header");
const menuLinks = document.querySelectorAll(".menu__link");

// Função para alternar tema
function changeTheme() {
  const currentTheme = rootHtml.getAttribute("data-theme");
  rootHtml.setAttribute("data-theme", currentTheme === "dark" ? "light" : "dark");

  if (toggleTheme) {
    toggleTheme.classList.toggle("bi-sun");
    toggleTheme.classList.toggle("bi-moon-stars");
  }
}

// Adiciona evento de click no toggleTheme, se existir
if (toggleTheme) {
  toggleTheme.addEventListener("click", changeTheme);
}

// Accordion funcional
if (accordionHeaders.length > 0) {
  accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
      const accordionItem = header.parentElement;
      accordionItem.classList.toggle("active");
    });
  });
}

// Menu links ativos
if (menuLinks.length > 0) {
  menuLinks.forEach(item => {
    item.addEventListener("click", () => {
      menuLinks.forEach(i => i.classList.remove("active"));
      item.classList.add("active");
    });
  });
}

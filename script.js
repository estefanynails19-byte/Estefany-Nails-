
 // Estefany Nails: menú móvil, filtros de galería y contacto por WhatsApp.

const WHATSAPP_NUMBER = "50366915428";

const whatsappLink = document.getElementById("whatsappLink");

const message = encodeURIComponent(
  "Hola, Estefany Nails. Quisiera consultar información sobre sus diseños, servicios, precios y disponibilidad."
);

// WhatsApp
if (whatsappLink) {
  if (/^\d{8,15}$/.test(WHATSAPP_NUMBER)) {
    whatsappLink.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    whatsappLink.target = "_blank";
    whatsappLink.rel = "noopener noreferrer";
  } else {
    whatsappLink.addEventListener("click", (event) => {
      event.preventDefault();
      alert("Revisa el número de WhatsApp en el archivo script.js.");
    });
  }
}

// Menú móvil
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Cerrar menú" : "Abrir menú"
    );

    menuToggle.textContent = isOpen ? "×" : "☰";
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menú");
      menuToggle.textContent = "☰";
    });
  });
}

// Filtros de la galería
const filterButtons = document.querySelectorAll(".filter");
const designCards = document.querySelectorAll(".design-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => {
      item.classList.toggle("active", item === button);
    });

    const selected = button.dataset.filter || "todos";

    designCards.forEach((card) => {
      card.hidden =
        selected !== "todos" &&
        card.dataset.category !== selected;
    });
  });
});

// Año actual
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}


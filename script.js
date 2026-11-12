// ==========================
// MODO OSCURO / CLARO
// ==========================
const botonTema = document.getElementById("theme-toggle");
const temaGuardado = localStorage.getItem("tema") || "light";

document.documentElement.setAttribute("data-theme", temaGuardado);
actualizarIcono();

botonTema.addEventListener("click", () => {
    const temaActual = document.documentElement.getAttribute("data-theme");
    const nuevoTema = temaActual === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", nuevoTema);
    localStorage.setItem("tema", nuevoTema);
    actualizarIcono();
});

function actualizarIcono() {
    const tema = document.documentElement.getAttribute("data-theme");
    botonTema.textContent = tema === "dark" ? "Modo Claro" : "Modo Oscuro";
}

// ==========================
// MENÚ HAMBURGUESA RESPONSIVE
// ==========================
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            // Alterna la clase 'is-active' para mostrar u ocultar el menú
            navMenu.classList.toggle("is-active");
        });
    }
});


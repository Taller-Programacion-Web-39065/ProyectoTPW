const botonTema = document.getElementById("theme-toggle");

// Recuperar tema guardado
const temaGuardado = localStorage.getItem("tema") || "light";

// Aplicar tema
document.documentElement.setAttribute("data-theme", temaGuardado);

// Actualizar icono
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



// Lógica de Control del Menú Responsivo
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');

  if (menuToggle && ) {
    // Alternar visibilidad al hacer clic en el botón hamburguesa
    menuToggle.addEventListener('click', () => {
      const isActive = navMenu.classList.toggle('is-active');
      menuToggle.classList.toggle('is-active');
      
      // Actualización accesible para lectores de pantalla
      menuToggle.setAttribute('aria-expanded', String(isActive));
    });

    // Cierre automático al seleccionar un enlace
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('is-active');
        menuToggle.classList.remove('is-active');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
});

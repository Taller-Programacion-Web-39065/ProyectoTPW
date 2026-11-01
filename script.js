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
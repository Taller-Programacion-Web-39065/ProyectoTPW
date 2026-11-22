const { useState } = React;

const SERVICIOS_DATA = [
  {
    id: 1,
    titulo: "Reposteros Aéreos",
    categoria: "Cocina",
    imagen: "repostero_aereo.jpg",
    alt: "Repostero Aéreo",
    descripcion: "Diseño y fabricación a medida de reposteros aéreos modernos, optimizando el espacio y aportando elegancia a tu cocina.",
    alcance: "Fabricación según medidas de muro, herrajes resistentes y acabados adaptados al estilo de tu cocina."
  },
  {
    id: 2,
    titulo: "Mueble Dormitorio",
    categoria: "Dormitorio",
    imagen: "mueble_dormitorio.jpg",
    alt: "Mueble Dormitorio",
    descripcion: "Transformamos tu lugar de descanso en un espacio más cómodo, funcional y adaptado a tu estilo.",
    alcance: "Diseño ergonómico, distribución de cajonería o closets y acabados durables para uso diario."
  },
  {
    id: 3,
    titulo: "Repostero Aéreo de Cocina",
    categoria: "Cocina",
    imagen: "repostero_aereo_cocina.jpg",
    alt: "Repostero Aéreo de Cocina",
    descripcion: "Repostero ideal para organizar y guardar utensilios de cocina con acabados resistentes y modernos.",
    alcance: "Compartimentos pensados para vajilla, especieros y utensilios, con fácil limpieza y montaje firme."
  },
  {
    id: 4,
    titulo: "Repostero de Cuatro Puertas",
    categoria: "Almacenamiento",
    imagen: "repostero_cuatro_puertas.jpg",
    alt: "Repostero de cuatro puertas",
    descripcion: "Amplia capacidad de almacenamiento ideal para mantener el orden y la estética de tu hogar.",
    alcance: "Gran volumen de guardado para cocina, comedor o despensa, con puertas alineadas y cierre suave."
  },
  {
    id: 5,
    titulo: "Repostero de tres Puertas",
    categoria: "Dormitorio",
    imagen: "imgane20.jpg", // Verifica que coincida con el nombre exacto en GitHub
    alt: "Repostero de tres puertas",
    descripcion: "dormitorio ideal para guardar cosas personales.",
    alcance: "adecuado para guardado utencilios de cocina, comedor o despensa, con puertas alineadas y cierre suave."
  }
];

function ServiciosApp() {
  const [filtro, setFiltro] = useState("Todos");
  const [detalleAbiertoId, setDetalleAbiertoId] = useState(null);

  const categorias = ["Todos", "Cocina", "Dormitorio", "Almacenamiento"];

  const serviciosFiltrados =
    filtro === "Todos"
      ? SERVICIOS_DATA
      : SERVICIOS_DATA.filter((item) => item.categoria === filtro);

  const toggleDetalle = (id) => {
    setDetalleAbiertoId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className="servicios-modulo">
      <h1>Nuestros Servicios</h1>

      <div className="servicios-filtros">
        {categorias.map((cat) => (
          <button
            key={cat}
            type="button"
            className={filtro === cat ? "filtro-btn activo" : "filtro-btn"}
            onClick={() => {
              setFiltro(cat);
              setDetalleAbiertoId(null);
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="lista-servicios">
        {serviciosFiltrados.map((servicio) => {
          const estaAbierto = detalleAbiertoId === servicio.id;

          return (
            <div key={servicio.id} className="item-servicio">
              <div className="columna-imagen">
                <img
                  src={servicio.imagen}
                  alt={servicio.alt}
                  className="img-servicio"
                />

                {estaAbierto && (
                  <div className="servicio-detalle-box">
                    <h3>{servicio.titulo}</h3>
                    <p>{servicio.alcance}</p>
                    <button
                      type="button"
                      className="servicio-cerrar"
                      onClick={() => setDetalleAbiertoId(null)}
                    >
                      Cerrar
                    </button>
                  </div>
                )}
              </div>

              <div className="texto-servicio">
                <h2>{servicio.titulo}</h2>
                <p>{servicio.descripcion}</p>
                <div className="acciones-servicio">
                  <button
                    type="button"
                    className="btn-detalle"
                    onClick={() => toggleDetalle(servicio.id)}
                  >
                    {estaAbierto ? "Ocultar detalles" : "Ver detalles"}
                  </button>
                  <a href="Contacto.html" className="btn-cotizar">
                    Cotizar &rarr;
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

const rootServicios = ReactDOM.createRoot(document.getElementById("servicios-react"));
rootServicios.render(<ServiciosApp />);

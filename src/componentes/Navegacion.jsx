/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navegacion.css";

const Navegacion = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [notificaciones, setNotificaciones] = useState(2);
  const [notificacionesAbiertas, setNotificacionesAbiertas] = useState(false);

  // Cambia el texto del botón azul cada 2 segundos
  const mensajesBotonAzul = [
    "Calcula tu crédito hipotecario",
    "Mejora tu crédito con nosotros",
  ];
  const [mensajeBotonAzul, setMensajeBotonAzul] = useState(mensajesBotonAzul[0]);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setMensajeBotonAzul((prev) =>
        prev === mensajesBotonAzul[0] ? mensajesBotonAzul[1] : mensajesBotonAzul[0]
      );
    }, 2000);
    return () => clearInterval(intervalo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  const toggleNotificaciones = () => {
    setNotificacionesAbiertas((prev) => !prev);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <nav className="navegacion">
        <button className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? "✖" : "☰"}
        </button>
        <div className="logo">
          <Link to="/">inmobiliarias y mas...</Link>
        </div>
        <div className="menu-desktop">
          <div className="dropdown">
            <button onClick={() => toggleDropdown("comprar")} className="dropdown-btn">
              Comprar ▼
            </button>
            {dropdownOpen === "comprar" && (
              <div className="dropdown-menu">
                <Link to="/casas">Casas</Link>
                <Link to="/departamentos">Departamentos</Link>
                <Link to="/terrenos">Terrenos</Link>
              </div>
            )}
          </div>
          <div className="dropdown">
            <button onClick={() => toggleDropdown("alquilar")} className="dropdown-btn">
              Alquilar ▼
            </button>
            {dropdownOpen === "alquilar" && (
              <div className="dropdown-menu">
                <Link to="/casas-renta">Casas</Link>
                <Link to="/departamentos-renta">Departamentos</Link>
              </div>
            )}
          </div>
          <div className="dropdown">
            <button onClick={() => toggleDropdown("servicios")} className="dropdown-btn">
              Servicios ▼
            </button>
            {dropdownOpen === "servicios" && (
              <div className="dropdown-menu">
                <Link to="/rentar">Rentar</Link>
                <Link to="/vender">Vender</Link>
              </div>
            )}
          </div>
          <Link to="/buscar-propiedades">Buscar propiedades</Link>
        </div>
        <div className="botones-header">
          <Link to="/credimejora" className="boton-azul">{mensajeBotonAzul}</Link>
          <div className="icono-campana-container">
            <button className="icono-campana" onClick={toggleNotificaciones}>
              🔔
              {notificaciones > 0 && (
                <span className="contador-notificaciones">{notificaciones}</span>
              )}
            </button>
            {notificacionesAbiertas && (
              <div className="notificaciones-menu mostrar">
                <h4>Notificaciones</h4>
                {notificaciones > 0 ? (
                  <ul>
                    <li>Tienes {notificaciones} nuevas notificaciones</li>
                  </ul>
                ) : (
                  <p>¡No tienes notificaciones!</p>
                )}
              </div>
            )}
          </div>
          <Link to="/contactos" className="boton-secundario">Mis contactos</Link>
          <Link to="/publicar" className="boton-secundario">Publicar</Link>
          <Link to="/ingresar" className="boton-principal">Ingresar</Link>
        </div>
      </nav>
      <div className={`menu-movil ${menuOpen ? "open" : ""}`}>
        <button className="menu-cerrar" onClick={toggleMenu}>✖</button>
        <div className="menu-lateral">
          <div className="logo">
            <Link to="/">Inmobiliarias y mas ...</Link>
          </div>
          <Link to="/buscar-propiedades">Buscar propiedades</Link>
          <div className="dropdown">
            <button onClick={() => toggleDropdown("comprar")} className="dropdown-btn">
              Comprar ▼
            </button>
            {dropdownOpen === "comprar" && (
              <div className="dropdown-menu">
                <Link to="/casas">Casas</Link>
                <Link to="/departamentos">Departamentos</Link>
                <Link to="/terrenos">Terrenos</Link>
              </div>
            )}
          </div>
          <div className="dropdown">
            <button onClick={() => toggleDropdown("alquilar")} className="dropdown-btn">
              Alquilar ▼
            </button>
            {dropdownOpen === "alquilar" && (
              <div className="dropdown-menu">
                <Link to="/casas-renta">Casas</Link>
                <Link to="/departamentos-renta">Departamentos</Link>
              </div>
            )}
          </div>
          <div className="dropdown">
            <button onClick={() => toggleDropdown("servicios")} className="dropdown-btn">
              Servicios ▼
            </button>
            {dropdownOpen === "servicios" && (
              <div className="dropdown-menu">
                <Link to="/rentar">Rentar</Link>
                <Link to="/vender">Vender</Link>
              </div>
            )}
          </div>
          <Link to="/credimejora" className="boton-azul">{mensajeBotonAzul}</Link>
          <div className="icono-campana-container">
            <button className="icono-campana" onClick={toggleNotificaciones}>🔔</button>
            {notificacionesAbiertas && (
              <div className="notificaciones-menu mostrar">
                <h4>Notificaciones</h4>
                {notificaciones > 0 ? <ul><li>Tienes {notificaciones} nuevas notificaciones</li></ul> : <p>¡No tienes notificaciones!</p>}
              </div>
            )}
          </div>
          <Link to="/contactos" className="boton-secundario">Mis contactos</Link>
          <Link to="/publicar" className="boton-secundario">Publicar</Link>
          <Link to="/ingresar" className="boton-principal">Ingresar</Link>
        </div>
      </div>
    </header>
  );
};

export default Navegacion;

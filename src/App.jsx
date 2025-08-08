import { useState } from "react";
import "./App.css";
import Navegacion from "./componentes/Navegacion"; // 🔹 Importamos el componente de navegación

export default function InmueblesClone() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("Rentar");

  return (
    <div className="app-container">
      {/* 🔹 Menú de navegación (con hamburguesa en móviles) */}
      <Navegacion />

      
      {/* Buscador con pestañas */}
      <div className="hero-section">
        <h2>Encuentra tu hogar</h2>
        <div className="search-box">
          <div className="tabs">
            {["Rentar", "Comprar", "Desarrollos", "Remate"].map((tab) => (
              <button
                key={tab}
                className={activeTab === tab ? "active" : ""}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="search-fields">
            <select>
              <option>Departamento</option>
              <option>Casa</option>
              <option>Oficina</option>
            </select>
            <input
              type="text"
              placeholder="Ingresa ubicación o características..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="search-button">Buscar</button>
          </div>
        </div>
      </div>

      {/* Lista de Propiedades */}
      <div className="properties-grid">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="property-card">
            <img
              src={`https://via.placeholder.com/300x200.png?text=Casa+${i+1}`}
              alt={`Casa ${i+1}`}
            />
            <h3>Casa en venta #{i + 1}</h3>
            <p>Ubicación: Ciudad X</p>
            <p className="price">$1,500,000 MXN</p>
            <button>Ver más</button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer>
        <p>© 2025 Inmuebles  - Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

import React from "react";
import { NavLink } from "react-router-dom";

export default function myComponent() {
  return (
    <nav class="navbar is-dark" role="navigation" aria-label="dropdown navigation">
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-item">Appzinho do Edu</div>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <NavLink to="/" activeClassName="is-active" className="navbar-item">
              Inicio
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

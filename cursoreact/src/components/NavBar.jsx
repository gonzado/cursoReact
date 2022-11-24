/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const NavBar = () => {
    return (
<nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src="img/LogoPNGNegroBueno.png" alt="Logo Empresa" width="125, 57"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#">Filosofía</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Carta</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Novedades</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Restaurantes</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Take Away</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
    )
}

export default NavBar;
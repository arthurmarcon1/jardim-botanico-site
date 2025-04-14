import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success py-3"> {/* Aumenta a altura */}
            <div className="container">
                <Link className="navbar-brand fs-4" to="/">Jardim Botânico UFSM</Link> {/* Aumenta fonte */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto"> {/* ms-auto para alinhar à direita */}
                        <li className="nav-item">
                            <Link className="nav-link fs-5" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fs-5" to="/mapa">Mapa</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fs-5" to="/sobre">Sobre</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fs-5" to="/animais">Animais</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fs-5" to="/telhado-verde">Telhado Verde</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

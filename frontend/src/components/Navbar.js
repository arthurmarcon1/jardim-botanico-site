import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <div className="container">
                <Link className="navbar-brand" to="/">Jardim Botânico UFSM</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/mapa">Mapa</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/sobre">Sobre</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/contato">Contato</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { user, logout } = useAuth();

    return (
        <>
            {/* Navbar desktop */}
            <nav className="navbar navbar-expand-lg navbar-dark py-3" style={{ backgroundColor: "#7CB342" }}>
                <div className="container">
                    <Link className="navbar-brand fs-4" to="/">Jardim Botânico UFSM</Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={() => setMenuOpen(true)} // Abre o menu mobile
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto align-items-lg-center">
                            <li className="nav-item">
                                <Link className="nav-link fs-5" to="/">Início</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-5" to="/sobre">Sobre</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-5" to="/animais">Espécies</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-5" to="/telhado-verde">Telhado Verde</Link>
                            </li>

                            {user ? (
                                <>
                                    <li className="nav-item">
                                        <span className="nav-link fs-5">Olá, {user.name}</span>
                                    </li>
                                    <li className="nav-item">
                                        <button
                                            onClick={logout}
                                            className="btn btn-danger btn-sm ms-2"
                                        >
                                            Logout
                                        </button>
                                    </li>
                                </>
                            ) : null}
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Navbar mobile (menu aberto) */}
            {menuOpen && (
                <div
                    className="position-fixed top-0 start-0 w-100 h-100 bg-success text-white d-flex flex-column align-items-center justify-content-center"
                    style={{ zIndex: 1050 }}
                >
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="position-absolute top-0 end-0 m-4 fs-1 btn-close-white"
                        style={{ background: 'none', border: 'none' }}
                    >
                        ×
                    </button>

                    <Link to="/" className="fs-4 mb-3 text-white" onClick={() => setMenuOpen(false)}>
                        Início
                    </Link>
                    <Link to="/sobre" className="fs-4 mb-3 text-white" onClick={() => setMenuOpen(false)}>
                        Sobre
                    </Link>
                    <Link to="/animais" className="fs-4 mb-3 text-white" onClick={() => setMenuOpen(false)}>
                        Espécies
                    </Link>
                    <Link to="/telhado-verde" className="fs-4 mb-3 text-white" onClick={() => setMenuOpen(false)}>
                        Telhado Verde
                    </Link>

                    {user ? (
                        <>
                            <span className="fs-5 mb-3">Olá, {user.name}</span>
                            <button
                                onClick={() => {
                                    logout();
                                    setMenuOpen(false);
                                }}
                                className="btn btn-danger btn-lg"
                            >
                                Logout
                            </button>
                        </>
                    ) : null }
                </div>
            )}
        </>
    );
};

export default Navbar;

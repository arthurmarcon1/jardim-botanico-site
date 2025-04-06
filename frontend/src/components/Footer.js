import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <footer className="bg-success text-white text-center py-4 mt-auto">
            <div className="container">
                <p className="mb-1">© {new Date().getFullYear()} Jardim Botânico UFSM</p>
                <p className="mb-0">Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;

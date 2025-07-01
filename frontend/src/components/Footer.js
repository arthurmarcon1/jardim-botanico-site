import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="text-white py-5 mt-auto"
        style={{backgroundColor: "#7CB342"}}>
            <div className="container">
                <div className="row g-4">
                    
                    {/* Contato */}
                    <div className="col-md-4">
                        <h5 className="mb-3">
                            <i className="bi bi-geo-alt-fill me-2"></i>Contato
                        </h5>
                        <address className="mb-0">
                            <p className="mb-1">Av. Roraima nº 1000</p>
                            <p className="mb-1">Cidade Universitária, Bairro Camobi</p>
                            <p className="mb-1">Santa Maria - RS, CEP: 97105-900</p>
                            <p className="mb-1">
                                <i className="bi bi-telephone-fill me-2"></i>
                                (55) 3220-8973 / (55) 99193-8183
                            </p>
                            <p className="mb-1">
                                <i className="bi bi-envelope-fill me-2"></i>
                                jardimbotanico@ufsm.br
                            </p>
                            <p className="mb-0">
                                <strong>Funcionamento:</strong><br />
                                Segunda à Sexta: 8:30 - 12h | 13:30 - 17h
                            </p>
                        </address>
                    </div>

                    {/* Redes Sociais + Direitos Autorais */}
                    <div className="col-md-4 d-flex flex-column justify-content-between align-items-center text-center">
                        <div>
                            <h5 className="mb-3">
                                <i className="bi bi-share-fill me-2"></i>Siga nas redes
                            </h5>
                            <div className="d-flex justify-content-center gap-4 mb-3">
                                <SocialIcon
                                    href="https://www.facebook.com/JardimBotanicoDeSantaMaria?_rdr"
                                    icon="facebook"
                                />
                                <SocialIcon
                                    href="https://www.instagram.com/jardimbotanicodaufsm"
                                    icon="instagram"
                                />
                                <SocialIcon
                                    href="https://www.youtube.com/c/JardimBot%C3%A2nicodaUFSM"
                                    icon="youtube"
                                />
                            </div>
                            <p>Nos acompanhe para novidades e eventos!</p>
                        </div>
                        <div className="mt-4">
                            <p className="mb-2">© {currentYear} Jardim Botânico UFSM</p>
                            <p className="mb-0">Todos os direitos reservados.</p>
                        </div>
                    </div>

                    {/* Logo UFSM */}
                    <div className="col-md-4 d-flex justify-content-md-end justify-content-center align-items-center">
                        <img
                            src="/imgs/UFSM.png"
                            alt="Logo UFSM"
                            className="img-fluid"
                            style={{ maxWidth: '200px', height: 'auto' }}
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
};

// Componente para redes sociais
const SocialIcon = ({ href, icon }) => (
    <a
        href={href}
        className="text-white"
        target="_blank"
        rel="noopener noreferrer"
    >
        <i className={`bi bi-${icon}`} style={{ fontSize: '1.8rem' }}></i>
    </a>
);

export default Footer;

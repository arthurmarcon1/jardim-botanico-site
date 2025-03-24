import React from "react";
import { FaInstagram, FaPhone, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Contato = () => {
    return (
        <div className="container mx-auto py-10 px-5 text-center">
            <h1 className="text-3xl font-bold mb-6">Entre em Contato</h1>
            <div className="flex flex-col items-center space-y-6 text-lg">
                
                {/* Instagram */}
                <a
                    href="https://www.instagram.com/jardimbotanicodaufsm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-pink-500 hover:text-pink-700 transition-transform transform hover:scale-110"
                >
                    <FaInstagram className="text-4xl" />
                    <span className="text-xl">@jardimbotanicodaufsm</span>
                </a>

                {/* Telefone */}
                <div className="flex items-center space-x-3">
                    <FaPhone className="text-blue-500 text-4xl" />
                    <span className="text-xl">(55) 3220-8973</span>
                </div>

                {/* WhatsApp */}
                <a
                    href="https://wa.me/5555991938183"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-green-500 hover:text-green-700 transition-transform transform hover:scale-110"
                >
                    <FaWhatsapp className="text-4xl" />
                    <span className="text-xl">(55) 99193-8183</span>
                </a>

                {/* Email (Agora Separado do WhatsApp) */}
                <a
                    href="mailto:jardimbotanico@ufsm.br"
                    className="flex items-center space-x-3 text-red-500 hover:text-red-700 transition-transform transform hover:scale-110"
                >
                    <FaEnvelope className="text-4xl" />
                    <span className="text-xl">jardimbotanico@ufsm.br</span>
                </a>
            </div>
        </div>
    );
};

export default Contato;

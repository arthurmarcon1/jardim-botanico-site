import React from 'react';
import { useParams, Link } from 'react-router-dom';

const dadosAnimais = [
    {
        id: 1,
        name: 'Bugiu Ruivo',
        description: 'Espécie de primata encontrada na América do Sul, conhecida por seu pelo avermelhado.',
        image: 'imgs/Bugiu-Ruivo.jpg',
        details: 'O bugio ruivo é um primata que habita florestas tropicais e subtropicais da América do Sul. Seu canto é um dos mais altos entre os mamíferos.'
    },
    {
        id: 2,
        name: 'Amanita Muscaria',
        description: 'Cogumelo icônico, conhecido por sua aparência vibrante e toxicidade.',
        image: 'imgs/Amanita_muscaria.jpg',
        details: 'Embora conhecido por sua aparência de conto de fadas, este cogumelo é venenoso e não deve ser consumido.'
    },
    {
        id: 3,
        name: 'Quero-Quero',
        description: 'Ave típica do Brasil, conhecida por seu canto e comportamento territorial.',
        image: 'imgs/quero-quero2.jpg',
        details: 'O quero-quero é comum em campos e pastagens, e é muito protetor de seu território.'
    },
    {
        id: 4,
        name: 'Tatu mulita',
        description: 'Espécie de tatu encontrada no sul Brasil, conhecida por seu tamanho grande e carapaça.',
        image: 'imgs/Dasypus-hybridus-1.jpg',
        details: 'A mulita é um tatu de hábitos noturnos, e cava buracos para se proteger e procurar alimentos.'
    },
    {
        id: 5,
        name: 'Tigre d’água',
        description: 'Espécie de tartaruga encontrada no Brasil, conhecida por viver em zonas de pântanos, banhados, lagos, riachos e rios.',
        image: 'imgs/tigre_dagua.jpg',
        details: 'Essas tartarugas são semiaquáticas e podem viver por muitos anos em cativeiro.'
    }
];

const AnimalDetalhe = () => {
    const { id } = useParams();
    const animal = dadosAnimais.find((a) => a.id === parseInt(id));

    if (!animal) {
        return <div>Animal não encontrado.</div>;
    }

    return (
        <div style={{ padding: '40px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>{animal.name}</h2>
            <img src={`/${animal.image}`} alt={animal.name} style={{ maxWidth: '400px', width: '100%', borderRadius: '10px', marginBottom: '20px' }} />
            <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>{animal.details}</p>

            {/* Botão de Voltar */}
            <div
                style={{
                    position: 'absolute',
                    top: '90px', // altura da barra verde, ajuste se necessário
                    left: '20px',
                    zIndex: 10,
                }}
            >
                <Link
                    to="/"
                    style={{
                        backgroundColor: '#8B4513', // marrom
                        color: '#fff',
                        padding: '10px 16px',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        fontWeight: '500',
                        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
                    }}
                >
                    ← Voltar para a Home
                </Link>
            </div>

        </div>
    );
};

export default AnimalDetalhe;

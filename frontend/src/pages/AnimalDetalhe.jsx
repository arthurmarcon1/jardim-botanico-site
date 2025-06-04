import React from 'react';
import { useParams, Link } from 'react-router-dom';

const dadosAnimais = [
    {
        id: 1,
        name: 'Bugiu Ruivo',
        sci_name: 'Alouatta guariba',
        caracteristics: 'Primata de médio porte, com pelagem avermelhada e cauda preênsil. Os machos são maiores que as fêmeas e possuem uma barba característica.',
        distribution: 'América do Sul, especialmente no Brasil, Argentina e Paraguai.',
        habits: 'Vive em grupos sociais, é diurno e arbóreo, alimentando-se principalmente de folhas, frutas e flores.',
        conservation_status: 'Vulnerável devido à perda de habitat e doenças como a febre amarela.',
        image: 'imgs/Bugiu-Ruivo.jpg',
    },
    {
        id: 2,
        name: 'Amanita Muscaria',
        sci_name: 'Amanita muscaria',
        caracteristics: 'PCogumelo conhecido por seu chapéu vermelho com manchas brancas. Possui um anel na haste e uma volva na base.',
        distribution: 'Encontrado em florestas temperadas e boreais do hemisfério norte, formando associação micorrízica com árvores.',
        habits: 'Cresce em simbiose com raízes de árvores, ajudando na absorção de nutrientes. Aparece principalmente no outono.',
        conservation_status: 'Não ameaçado, mas sua coleta deve ser evitada devido ao seu potencial tóxico.',
        image: 'imgs/Amanita_muscaria.jpg',
    },
    {
        id: 3,
        name: 'Quero-Quero',
        sci_name: 'Vanellus chilensis',
        caracteristics: 'Ave de médio porte com plumagem cinza e branca, crista preta e pernas longas. Possui esporões nas asas que usa para defesa.',
        distribution: 'Encontrado em todo o Brasil, especialmente em áreas abertas como campos, pastagens e áreas urbanas.',
        habits: 'Conhecido por seu canto característico "quero-quero". É territorial e protege agressivamente seu ninho e filhotes.',
        conservation_status: 'Não ameaçado de extinção, sendo uma espécie comum e bem adaptada a ambientes alterados pelo homem.',
        image: 'imgs/quero-quero2.jpg',
    },
    {
        id: 4,
        name: 'Tatu mulita',
        sci_name: 'Dasypus hybridus',
        caracteristics: 'Pequeno mamífero com carapaça óssea, medindo entre 30-40 cm de comprimento. Possui hábitos noturnos e é conhecido por sua capacidade de se enrolar em forma de bola quando ameaçado.',
        distribution: 'Encontrado no sul do Brasil, Uruguai, Paraguai e norte da Argentina, habitando principalmente campos e áreas abertas.',
        habits: 'Alimenta-se principalmente de insetos, larvas e pequenos invertebrados. Constrói tocas no solo e é mais ativo durante a noite.',
        conservation_status: 'Classificado como "Quase Ameaçado" devido à perda de habitat e caça predatória.',
        image: 'imgs/Dasypus-hybridus-1.jpg',
    },
    {
        id: 5,
        name: 'Tigre d’água',
        sci_name: 'Trachemys dorbigni',
        caracteristics: 'Tartaruga de água doce com carapaça achatada e padrão de listras amarelas e pretas. Pode atingir até 30 cm de comprimento.',
        distribution: 'Nativa do sul do Brasil, Uruguai e nordeste da Argentina, habitando rios, lagos e banhados.',
        habits: 'Onívora, alimentando-se de plantas aquáticas, peixes pequenos e invertebrados. Passa grande parte do tempo tomando sol em pedras ou troncos.',
        conservation_status: 'Classificada como "Quase Ameaçada" devido à perda de habitat e captura para comércio ilegal de animais.',
        image: 'imgs/tigre_dagua.jpg',
    }
];

const AnimalDetalhe = () => {
    const { id } = useParams();
    const animal = dadosAnimais.find((a) => a.id === parseInt(id));

    if (!animal) {
        return <div>Animal não encontrado.</div>;
    }

    return (
        <div
            style={{
                minHeight: '100vh',
                backgroundSize: 'cover',
                padding: '20px 20px 40px 20px',
                boxSizing: 'border-box',
                backgroundColor: 'rgb(250, 250, 250)',
            }}
        >
            {/* Estilo responsivo para mobile */}
            <style>{`
                @media (max-width: 768px) {
                    .especie-content {
                        display: flex !important;
                        flex-direction: column !important;
                        gap: 2rem !important;
                    }
                    .especie-imagem-container {
                        order: 0 !important;
                        margin-bottom: 1rem;
                    }
                    .especie-info {
                        order: 1 !important;
                    }
                }
            `}</style>
            <div
                style={{
                    backgroundColor: 'rgb(250, 250, 250)',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '40px',
                }}
            >
                <div className="especie-header" style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <h2 className="section-title" style={{ fontSize: '2.5rem', color: '#7CB342', marginBottom: '0.5rem' }}>
                        {animal.name}
                    </h2>    
                    <p className="nome-cientifico" style={{ fontSize: '1.2rem', fontStyle: 'italic', color: '#666' }}>
                        <em>{animal.sci_name}</em>
                    </p>
                </div>

                <div className="especie-content" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'stretch'}}>
                    <div className="especie-imagem-container" style={{ height: '100%', display: 'flex' }}>
                        <img 
                            src={`/${animal.image}`} 
                            alt={animal.name} 
                            className="especie-imagem"
                            style={{
                                width: '100%',
                                height: '100%', // Imagem ocupa 100% do container
                                objectFit: 'cover', // Mantém proporção e cobre área
                                borderRadius: '10px',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                            }}
                        />
                    </div>

                    <div className="especie-info" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div className="info-card" style={{
                            backgroundColor: 'white',
                            padding: '1.5rem',
                            borderRadius: '10px',
                            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                        }}>
                            <h3 className="info-title" style={{ fontSize: '1.3rem', color: '#7CB342', marginBottom: '0.5rem' }}>
                                Características
                            </h3>
                            <p className="info-text" style={{ lineHeight: '1.6', color: '#333' }}>
                                {animal.caracteristics}
                            </p>
                        </div>

                        <div className="info-card" style={{
                            backgroundColor: 'white',
                            padding: '1.5rem',
                            borderRadius: '10px',
                            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                        }}>
                            <h3 className="info-title" style={{ fontSize: '1.3rem', color: '#7CB342', marginBottom: '0.5rem' }}>
                                Distribuição
                            </h3>
                            <p className="info-text" style={{ lineHeight: '1.6', color: '#333' }}>
                                {animal.distribution}
                            </p>
                        </div>

                        <div className="info-card" style={{
                            backgroundColor: 'white',
                            padding: '1.5rem',
                            borderRadius: '10px',
                            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                        }}>
                            <h3 className="info-title" style={{ fontSize: '1.3rem', color: '#7CB342', marginBottom: '0.5rem' }}>
                                Hábitos
                            </h3>
                            <p className="info-text" style={{ lineHeight: '1.6', color: '#333' }}>
                                {animal.habits}
                            </p>
                        </div>

                        <div className="info-card" style={{
                            backgroundColor: 'white',
                            padding: '1.5rem',
                            borderRadius: '10px',
                            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                        }}>
                            <h3 className="info-title" style={{ fontSize: '1.3rem', color: '#7CB342', marginBottom: '0.5rem' }}>
                                Status de Conservação
                            </h3>
                            <p className="info-text" style={{ lineHeight: '1.6', color: '#333' }}>
                                {animal.conservation_status}
                            </p>
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: '30px', display: 'flex', gap: '16px' }}>
                    <Link
                        to="/"
                        style={{
                            backgroundColor: 'rgba(241, 31, 31, 0.9)',
                            color: '#fff',
                            padding: '10px 16px',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            fontWeight: '500',
                            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
                        }}
                    >
                        ← Voltar para o Início
                    </Link>
                    <Link
                        to="/animais"
                        style={{
                            backgroundColor: '#7CB342',
                            color: '#fff',
                            padding: '10px 16px',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            fontWeight: '500',
                            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
                        }}
                    >
                        ← Voltar para Espécies
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AnimalDetalhe;

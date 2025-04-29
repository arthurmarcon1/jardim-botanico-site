import React from 'react';
import { useParams, Link } from 'react-router-dom';

const dadosAnimais = [
    {
        id: 1,
        name: 'Bugiu Ruivo',
        description: 'Espécie de primata encontrada na América do Sul, conhecida por seu pelo avermelhado.',
        image: 'imgs/Bugiu-Ruivo.jpg',
        details: 'O bugio ruivo, também conhecido como Alouatta guariba, é um dos maiores primatas encontrados no Brasil. É facilmente reconhecido por sua pelagem avermelhada e por seus sons característicos que podem ser ouvidos a vários quilômetros de distância. Esses rugidos são usados principalmente para marcar território e evitar conflitos com outros grupos. O bugio vive em grupos sociais compostos por poucos indivíduos e tem hábitos predominantemente diurnos.\n\nAlimenta-se principalmente de folhas, frutas e flores, sendo um importante dispersor de sementes na floresta. Infelizmente, a espécie sofre com a perda de habitat devido ao desmatamento e à fragmentação florestal, além de ser vulnerável a doenças como a febre amarela. A proteção de seu ambiente natural é essencial para garantir sua sobrevivência a longo prazo.'
    },
    {
        id: 2,
        name: 'Amanita Muscaria',
        description: 'Cogumelo icônico, conhecido por sua aparência vibrante e toxicidade.',
        image: 'imgs/Amanita_muscaria.jpg',
        details: 'A Amanita muscaria é um dos cogumelos mais icônicos do mundo, conhecida por seu chapéu vermelho com pintas brancas, frequentemente retratado em livros infantis e jogos. Apesar de sua aparência encantadora, trata-se de um fungo tóxico que pode causar alucinações, náuseas e outros efeitos colaterais graves se ingerido. Ainda assim, em algumas culturas tradicionais da Sibéria, há relatos do uso ritualístico controlado desse cogumelo.\n\nEcologicamente, a Amanita muscaria desempenha um papel importante nas florestas temperadas e boreais, formando relações simbióticas com árvores como pinheiros e bétulas por meio da micorriza. Essas interações ajudam as árvores a absorver nutrientes do solo. Apesar do fascínio que causa, o consumo desse cogumelo deve ser evitado, principalmente por pessoas sem experiência com fungos silvestres.'
    },
    {
        id: 3,
        name: 'Quero-Quero',
        description: 'Ave típica do Brasil, conhecida por seu canto e comportamento territorial.',
        image: 'imgs/quero-quero2.jpg',
        details: 'O quero-quero (Vanellus chilensis) é uma ave muito conhecida no Brasil e facilmente identificável por seu canto estridente e seu comportamento defensivo. É comum encontrá-lo em áreas abertas como pastagens, campos de futebol e até aeroportos. O nome "quero-quero" deriva do som que emite, especialmente quando sente que seu território está sendo invadido.\n\nA ave é extremamente territorial e corajosa, sendo capaz de enfrentar animais muito maiores quando está protegendo seu ninho, que geralmente é construído diretamente no chão. Quando ameaçado, o quero-quero executa voos rasantes para afugentar intrusos. Por sua valentia, foi escolhido como símbolo de vários clubes e instituições militares no Brasil.'
    },
    {
        id: 4,
        name: 'Tatu mulita',
        description: 'Espécie de tatu encontrada no sul Brasil, conhecida por seu tamanho grande e carapaça.',
        image: 'imgs/Dasypus-hybridus-1.jpg',
        details: 'A mulita (Dasypus hybridus) é uma espécie de tatu encontrada principalmente na região Sul do Brasil, além de partes do Uruguai e Argentina. Tem hábitos noturnos e solitários, passando o dia escondida em tocas que ela mesma escava. A carapaça rígida, formada por placas ósseas, protege o animal de predadores naturais.\n\nAlimenta-se de insetos, larvas, raízes e pequenos frutos. Sua habilidade de cavar também ajuda a arejar o solo, desempenhando um papel ecológico relevante. Infelizmente, a espécie é frequentemente vítima de atropelamentos e da caça ilegal. A conservação da fauna nativa é essencial para proteger esse curioso e discreto habitante do solo sulista.'
    },
    {
        id: 5,
        name: 'Tigre d’água',
        description: 'Espécie de tartaruga encontrada no Brasil, conhecida por viver em zonas de pântanos, banhados, lagos, riachos e rios.',
        image: 'imgs/tigre_dagua.jpg',
        details: 'O tigre d’água, ou Trachemys dorbigni, é uma tartaruga semiaquática muito comum em banhados, rios e lagos do sul do Brasil. Com seu casco ovalado e listras amarelas no pescoço, é frequentemente adotado como animal de estimação. No entanto, quando solto na natureza após o crescimento, pode causar desequilíbrios ambientais.\n\nEsses animais são onívoros e se alimentam de pequenos invertebrados, peixes, plantas aquáticas e restos orgânicos. Vivem por muitas décadas em cativeiro e exigem cuidados específicos, como luz solar e alimentação equilibrada. A soltura irresponsável de tartarugas criadas em casa representa um risco para espécies nativas e ecossistemas locais.'
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
                background: `url(/${animal.image}) no-repeat center center fixed`,
                backgroundSize: 'cover',
                padding: '80px 20px 40px 20px',
                boxSizing: 'border-box',
            }}
        >
            <div
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    maxWidth: '800px',
                    margin: '0 auto',
                    padding: '40px',
                    borderRadius: '15px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                }}
            >
                <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '30px' }}>{animal.name}</h2>
                <img
                    src={`/${animal.image}`}
                    alt={animal.name}
                    style={{
                        maxWidth: '100%',
                        borderRadius: '10px',
                        marginBottom: '25px',
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                    }}
                />
                {animal.details.split('\n\n').map((paragrafo, index) => (
                    <p
                        key={index}
                        style={{
                            textAlign: 'justify',
                            textIndent: '2em',
                            fontSize: '1.1rem',
                            lineHeight: '1.7',
                            marginBottom: '20px',
                        }}
                    >
                        {paragrafo}
                    </p>
                ))}
                <div style={{ marginTop: '30px' }}>
                    <Link
                        to="/"
                        style={{
                            backgroundColor: '#8B4513',
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

                    <Link
                    to="/animais"
                    style={{
                        backgroundColor: '#006400',
                        color: '#fff',
                        padding: '10px 16px',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        fontWeight: '500',
                        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
                    }}
                >
                    ← Voltar para Animais
                </Link>
                </div>
            </div>
        </div>
    );
};

export default AnimalDetalhe;

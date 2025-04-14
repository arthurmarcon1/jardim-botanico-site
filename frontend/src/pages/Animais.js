import React from 'react';
import { Link } from 'react-router-dom'; // <-- Adicionado

const Animais = () => {
  const animais = [
    {
      id: 1,
      name: 'Bugiu Ruivo',
      description: 'Espécie de primata encontrada na América do Sul, conhecida por seu pelo avermelhado.',
      image: 'imgs/Bugiu-Ruivo.jpg',
    },
    {
      id: 2,
      name: 'Amanita Muscaria',
      description: 'Cogumelo icônico, conhecido por sua aparência vibrante e toxicidade.',
      image: 'imgs/Amanita_muscaria.jpg',
    },
    {
      id: 3,
      name: 'Quero-Quero',
      description: 'Ave típica do Brasil, conhecida por seu canto e comportamento territorial.',
      image: 'imgs/quero-quero2.jpg',
    },
    {
      id: 4,
      name: 'Tatu mulita',
      description: 'Espécie de tatu encontrada no sul Brasil, conhecida por seu tamanho grande e carapaça.',
      image: 'imgs/Dasypus-hybridus-1.jpg',
    },
    {
      id: 5,
      name: 'Tigre d’água',
      description: 'Espécie de tartaruga encontrada no Brasil, conhecida por viver em zonas de pântanos, banhados, lagos, riachos e rios.',
      image: 'imgs/tigre_dagua.jpg',
    }
  ];

  const sectionStyle = {
    padding: '60px 20px',
    backgroundColor: '#ffffff',
    textAlign: 'center'
  };

  const titleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#2d3748',
    marginBottom: '40px'
  };

  const gridStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const cardStyle = {
    backgroundColor: '#f7fafc',
    borderRadius: '16px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    transition: 'box-shadow 0.3s ease'
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    objectFit: 'contain'
  };

  const contentStyle = {
    padding: '20px',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column'
  };

  const headingStyle = {
    fontSize: '1.2rem',
    fontWeight: '600',
    color: '#2d3748',
    marginBottom: '10px'
  };

  const descStyle = {
    fontSize: '0.95rem',
    color: '#4a5568',
    marginBottom: '20px'
  };

  const buttonStyle = {
    marginTop: 'auto',
    backgroundColor: '#38a169',
    color: '#fff',
    padding: '10px 16px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'background-color 0.3s ease'
  };

  return (
    <section style={sectionStyle} id="animais">
      <h2 style={titleStyle}>Animais no Jardim Botânico</h2>
      <div style={gridStyle}>
        {animais.map((item) => (
          <div key={item.id} style={cardStyle}>
            <img src={item.image} alt={item.name} style={imageStyle} />
            <div style={contentStyle}>
              <h3 style={headingStyle}>{item.name}</h3>
              <p style={descStyle}>{item.description}</p>
              <Link to={`/animal/${item.id}`} style={buttonStyle}>Saiba mais</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Animais;

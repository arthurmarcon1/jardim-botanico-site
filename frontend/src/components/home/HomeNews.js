import React from 'react';

const HomeNews = () => {
  const news = [
    {
      id: 1,
      title: 'Nova espécie de planta é descoberta no Jardim Botânico',
      description: 'Pesquisadores da UFSM identificam uma nova espécie de planta nativa no Jardim Botânico.',
      image: '/imgs/fundo1.jpeg',
      link: '#'
    },
    {
      id: 2,
      title: 'Aberto programa de voluntariado 2025',
      description: 'Junte-se à equipe do Jardim Botânico e contribua para a preservação ambiental.',
      image: '/imgs/fundo2.jpg',
      link: '#'
    },
    {
      id: 3,
      title: 'Semana da Educação Ambiental',
      description: 'Atividades educativas com escolas e oficinas abertas ao público durante toda a semana.',
      image: '/imgs/fundo3.jpeg',
      link: '#'
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
    transition: 'box-shadow 0.3s ease',
  };

  const imageStyle = {
    width: '100%',
    height: '180px',
    objectFit: 'cover'
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
    <section style={sectionStyle} id="news">
      <h2 style={titleStyle}>Últimas Notícias</h2>
      <div style={gridStyle}>
        {news.map((item) => (
          <div key={item.id} style={cardStyle}>
            <img src={item.image} alt={item.title} style={imageStyle} />
            <div style={contentStyle}>
              <h3 style={headingStyle}>{item.title}</h3>
              <p style={descStyle}>{item.description}</p>
              <a href={item.link} style={buttonStyle}>Leia mais</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeNews;


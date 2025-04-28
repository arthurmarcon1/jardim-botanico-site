import React from 'react';

const HomeNews = () => {
  const news = [
    {
      id: 1,
      title: 'Jardim Botânico Celebra o Dia das Mulheres com Programação Especial',
      description: 'No dia 8 de março de 2025, o Jardim Botânico promoveu uma programação especial em celebração ao Dia Internacional da Mulher.',
      image: 'https://www.ufsm.br/app/uploads/sites/363/2025/03/foto2-819x1024.jpg',
      link: 'https://www.ufsm.br/orgaos-suplementares/jardim-botanico/2025/03/11/jardim-botanico-celebra-o-dia-das-mulheres-com-programacao-especial'
    },
    {
      id: 2,
      title: 'Edital para estudantes colaboradores DESCUBRA 2024',
      description: 'O Jardim Botânico torna pública a seleção para estudantes colaboradores durante o DESCUBRA UFSM 2024.',
      image: 'https://s1.static.brasilescola.uol.com.br/be/vestibular/-59d4d1236415e.jpg',
      link: 'https://www.ufsm.br/orgaos-suplementares/jardim-botanico/2024/09/05/edital-para-estudantes-colaboradores-descubra-2024'
    },
    {
      id: 3,
      title: 'Jardim Botânico da UFSM reabre agendamento das Visitas Guiadas',
      description: 'O Jardim Botânico da Universidade Federal de Santa Maria (UFSM) tem o prazer de anunciar a reabertura do agendamento para visitas guiadas.',
      image: 'https://static.planetaexo.com/wp-content/uploads/2024/10/CAPA-BLOG-2000-x-1600-px-3-1.jpg',
      link: 'https://www.ufsm.br/orgaos-suplementares/jardim-botanico/2024/07/22/jardim-botanico-da-ufsm-reabre-agendamento-visitas-guiadas'
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


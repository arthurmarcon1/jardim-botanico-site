import React, { useState, useEffect } from 'react';

const SobreVisitaçao = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleHover = (e, scale) => {
    e.currentTarget.style.transform = `scale(${scale})`;
  };

  const styles = {
    container: {
      width: isMobile ? '98vw' : '80vw',
      maxWidth: '1200px',
      minHeight: isMobile ? '320px' : '340px',
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#f0fdf4',
      padding: isMobile ? '24px 6px' : '40px 32px',
      gap: '32px',
      boxSizing: 'border-box',
      borderRadius: '18px',
      margin: '32px auto',
      boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
    },
    imageContainer: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: isMobile ? '0' : '40px',
      marginTop: isMobile ? '10px' : '0',
    },
    JardimBotanicoImg: {
      height: isMobile ? '180px' : '340px',
      objectFit: 'contain',
      transition: 'transform 0.3s ease',
      borderRadius: '14px',
      padding: '8px',
    },
    textContainer: {
      flex: 1,
      maxWidth: isMobile ? '100%' : '50%',
      paddingRight: isMobile ? '0' : '40px',
      marginBottom: isMobile ? '20px' : 0,
      textAlign: isMobile ? 'center' : 'left',
    },
    heading: {
      fontSize: isMobile ? '1.5rem' : '2.5rem',
      fontWeight: 'bold',
      transition: 'transform 0.3s ease',
      color: 'rgb(124, 179, 66)',
    },
    paragraph: {
      marginTop: '1rem',
      fontSize: isMobile ? '1rem' : '1.2rem',
      transition: 'transform 0.3s ease',
      color: 'rgb(32, 59, 2)',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img
          src="/imgs/Jardim-Botanico.jpg"
          alt="jardim botanico"
          style={styles.JardimBotanicoImg}
        />
      </div>

      <div style={styles.textContainer}>
        <h1
          style={styles.heading}
          onMouseEnter={(e) => handleHover(e, 1.05)}
          onMouseLeave={(e) => handleHover(e, 1)}
        >
          Telhado verde 🌱🌿
        </h1>
        <p
          style={styles.paragraph}
          onMouseEnter={(e) => handleHover(e, 1.05)}
          onMouseLeave={(e) => handleHover(e, 1)}
        >
          O projeto Telhado Verde do Jardim Botânico da UFSM é uma iniciativa sustentável que integra arquitetura e meio ambiente. Instalado sobre uma das edificações do local, o telhado é coberto por vegetação nativa, promovendo o isolamento térmico, a redução do impacto das chuvas e o aumento da biodiversidade urbana. Além disso, o projeto serve como espaço educativo e de pesquisa, incentivando a conscientização ambiental e práticas ecológicas entre estudantes, visitantes e a comunidade em geral. 
        </p>
      </div>
    </div>
  );
};

export default SobreVisitaçao;

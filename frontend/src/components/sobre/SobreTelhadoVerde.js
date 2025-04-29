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
      position: 'relative',
      width: '100%',
      overflow: 'hidden',
    },
    backgroundImage: {
      width: '100%',
      height: isMobile ? '400px' : '640px',
      objectFit: 'cover',
      filter: 'brightness(0.5)', // <<< escurece a imagem
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      padding: isMobile ? '20px' : '40px',
      color: 'white',
      textAlign: isMobile ? 'center' : 'left',
      gap: '20px',
    },
    imageContainer: {
      flex: 1,
      display: 'flex',
      justifyContent: isMobile ? 'center' : 'flex-start',
      marginTop: isMobile ? '20px' : '0',
    },
    JardimBotanicoImg: {
      height: isMobile ? '250px' : '400px',
      width: isMobile ? '250px' : '650px',
      objectFit: 'contain',
      transition: 'transform 0.3s ease',
    },
    textContainer: {
      flex: 1,
      maxWidth: isMobile ? '100%' : '50%',
      paddingRight: isMobile ? '0' : '60px',
    },
    heading: {
      fontSize: isMobile ? '1.8rem' : '2.5rem',
      fontWeight: 'bold',
      transition: 'transform 0.3s ease',
    },
    paragraph: {
      marginTop: '1rem',
      fontSize: isMobile ? '1rem' : '1.2rem',
      transition: 'transform 0.3s ease',
    },
  };

  return (
    <div style={styles.container}>
      <img
        src="/imgs/fundo1.jpeg"
        alt="Fundo do Jardim Botânico"
        style={styles.backgroundImage}
      />

      <div style={styles.overlay}>
        {/* Agora a imagem vem primeiro */}
        <div style={styles.imageContainer}>
          <img
            src="/imgs/telhahdo verde.jpg"
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
    </div>
  );
};

export default SobreVisitaçao;

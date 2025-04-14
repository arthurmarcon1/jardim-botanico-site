import React, { useState, useEffect } from 'react';

const SobreIntro = () => {
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
      filter: 'brightness(0.5)', // <<< aqui escurece a imagem

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
    textContainer: {
      flex: 1,
      maxWidth: isMobile ? '100%' : '50%',
      paddingLeft: isMobile ? '0' : '60px',
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
    imageContainer: {
      flex: 1,
      display: 'flex',
      justifyContent: isMobile ? 'center' : 'flex-start',
      marginLeft: isMobile ? '0' : '300px',
      marginTop: isMobile ? '20px' : '0',
    },
    jerivaldoImage: {
      height: isMobile ? '250px' : '500px',
      objectFit: 'contain',
      transition: 'transform 0.3s ease',
    },
  };

  return (
    <div style={styles.container}>
      <img
        src="/imgs/fundo2.jpg"
        alt="Fundo do Jardim Botânico"
        style={styles.backgroundImage}
      />

      <div style={styles.overlay}>
        <div style={styles.textContainer}>
          <h1
            style={styles.heading}
            onMouseEnter={(e) => handleHover(e, 1.05)}
            onMouseLeave={(e) => handleHover(e, 1)}
          >
            Sobre o Jardim Botânico🌿
          </h1>
          <p
            style={styles.paragraph}
            onMouseEnter={(e) => handleHover(e, 1.05)}
            onMouseLeave={(e) => handleHover(e, 1)}
          >
            O Jardim Botânico da Universidade Federal de Santa Maria (UFSM) é um espaço dedicado à conservação da biodiversidade,
            pesquisa científica e educação ambiental. Com uma vasta coleção de plantas nativas e exóticas, o Jardim Botânico
            desempenha um papel fundamental na preservação do meio ambiente e na conscientização da comunidade.
          </p>
        </div>

        <div style={styles.imageContainer}>
          <img
            src="/imgs/fundo3.jpeg"
            alt="Jerivaldo"
            style={styles.jerivaldoImage}
          />
        </div>
      </div>
    </div>
  );
};

export default SobreIntro;

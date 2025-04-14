import React, { useState, useEffect } from 'react';

const HomeIntro = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();

    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Estilos principais
  const styles = {
    container: {
      position: 'relative',
      width: '100%',
      maxWidth: '100%',
      overflow: 'hidden',
    },
    backgroundImage: {
      width: '100%',
      height: isMobile ? '400px' : '640px',
      objectFit: 'cover',
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
      cursor: 'default',
    },
    paragraph: {
      marginTop: '1rem',
      fontSize: isMobile ? '1rem' : '1.2rem',
      transition: 'transform 0.3s ease',
      cursor: 'default',
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
      transition: 'transform 0.3s ease', // necessário pro hover
      cursor: 'default',
    },
  };

  // Funções de hover
  const scaleUp = (e) => e.currentTarget.style.transform = 'scale(1.05)';
  const scaleDown = (e) => e.currentTarget.style.transform = 'scale(1)';

  return (
    <div style={styles.container}>
      <img
        src="/imgs/fundo3.jpeg"
        alt="Fundo do Jardim Botânico"
        style={styles.backgroundImage}
      />

      <div style={styles.overlay}>
        {/* Textos */}
        <div style={styles.textContainer}>
          <h1
            style={styles.heading}
            onMouseEnter={scaleUp}
            onMouseLeave={scaleDown}
          >
            Bem-vindo ao Jardim Botânico da UFSM 🌿
          </h1>
          <p
            style={styles.paragraph}
            onMouseEnter={scaleUp}
            onMouseLeave={scaleDown}
          >
            Explore a biodiversidade e a beleza natural do nosso espaço!
          </p>
        </div>

        {/* Imagem do Jerivaldo */}
        <div style={styles.imageContainer}>
          <img
            src="/imgs/Jerivaldo (1).png"
            alt="Jerivaldo"
            style={styles.jerivaldoImage}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeIntro;

import React, { useState, useEffect } from 'react';

const SobreIntro = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleHover = (e, scale) => {
    e.currentTarget.style.transform = `scale(${scale})`;
  };

  const styles = {
    container: {
      width: isMobile ? '98vw' : '80vw',
      maxWidth: '900px',
      minHeight: isMobile ? '320px' : '340px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#f0fdf4',
      padding: isMobile ? '24px 6px' : '40px 32px',
      gap: '24px',
      boxSizing: 'border-box',
      borderRadius: '18px',
      margin: '32px auto',
      boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
    },
    topRow: {
      width: '100%',
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: 'center',
      justifyContent: isMobile ? 'center' : 'flex-start',
      gap: isMobile ? '12px' : '24px',
      marginBottom: isMobile ? '10px' : '18px',
    },
    heading: {
      fontSize: isMobile ? '1.5rem' : '2.5rem',
      fontWeight: 'bold',
      color: 'rgb(6, 95, 70)',
      textAlign: isMobile ? 'center' : 'left',
      transition: 'transform 0.3s ease',
    },
    jerivaldoImage: {
      height: isMobile ? '90px' : '120px',
      objectFit: 'contain',
      transition: 'transform 0.3s ease',
      borderRadius: '12px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
      background: '#fff',
      padding: '6px',
      marginLeft: isMobile ? '0' : '18px',
    },
    paragraph: {
      marginTop: '0.5rem',
      fontSize: isMobile ? '1rem' : '1.2rem',
      color: 'rgb(6, 95, 70)',
      textAlign: isMobile ? 'center' : 'left',
      transition: 'transform 0.3s ease',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.topRow}>
        <h1
          style={styles.heading}
          onMouseEnter={(e) => handleHover(e, 1.05)}
          onMouseLeave={(e) => handleHover(e, 1)}
        >
          Sobre o Jardim Botânico🌿
        </h1>
        <img
          src="/imgs/fundo3.jpeg"
          alt="Jerivaldo"
          style={styles.jerivaldoImage}
        />
      </div>
      <p
        style={styles.paragraph}
        onMouseEnter={(e) => handleHover(e, 1.05)}
        onMouseLeave={(e) => handleHover(e, 1)}
      >
        O Jardim Botânico da UFSM é um espaço dedicado à conservação da biodiversidade, pesquisa e educação ambiental, promovendo a preservação do meio ambiente e a conscientização da comunidade.
      </p>
    </div>
  );
};

export default SobreIntro;

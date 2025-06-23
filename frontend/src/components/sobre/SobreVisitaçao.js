import React, { useState, useEffect } from 'react';

const SobreVisitaçao = () => {
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
      maxWidth: '1200px',
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
    contentRow: {
      width: '100%',
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: isMobile ? '18px' : '32px',
    },
    textBlock: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: isMobile ? 'center' : 'flex-start',
      justifyContent: 'center',
    },
    heading: {
      fontSize: isMobile ? '1.5rem' : '2.5rem',
      fontWeight: 'bold',
      color: 'rgb(124, 179, 66)',
      textAlign: isMobile ? 'center' : 'left',
      transition: 'transform 0.3s ease',
    },
    paragraph: {
      marginTop: '0.5rem',
      fontSize: isMobile ? '1rem' : '1.2rem',
      textAlign: isMobile ? 'center' : 'left',
      transition: 'transform 0.3s ease',
      color: 'rgb(32, 59, 2)',
    },
    sideImage: {
      width: isMobile ? '100%' : '340px',
      height: isMobile ? '180px' : '260px',
      objectFit: 'cover',
      borderRadius: '14px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.13)',
      marginLeft: isMobile ? '0' : '18px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.contentRow}>
        <img
          src="/imgs/fundo1.jpeg"
          alt="Jardim Botânico"
          style={styles.sideImage}
        />
        <div style={styles.textBlock}>
          <h1
            style={styles.heading}
            onMouseEnter={(e) => handleHover(e, 1.05)}
            onMouseLeave={(e) => handleHover(e, 1)}
          >
            Visitação🚶‍♂️🚶‍♀️
          </h1>
          <p
            style={styles.paragraph}
            onMouseEnter={(e) => handleHover(e, 1.05)}
            onMouseLeave={(e) => handleHover(e, 1)}
          >
            O Jardim Botânico está aberto ao público e recebe visitantes de todas as idades, oferecendo trilhas educativas,
          exposições e atividades interativas. Escolas e grupos podem agendar visitas guiadas para uma experiência mais
          aprofundada sobre a importância da biodiversidade.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SobreVisitaçao;

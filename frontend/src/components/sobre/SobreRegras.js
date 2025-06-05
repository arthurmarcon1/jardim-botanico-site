import React, { useState, useEffect } from 'react';

const SobreRegras = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const regras = [
    "Não jogue lixo no chão.",
    "Proibido fumar.",
    "Sem bebidas alcoólicas ou drogas.",
    "Pets só na guia e perto da sede.",
    "Carros só com autorização.",
    "Proibido armas e instrumentos de corte.",
    "Não abandone animais ou plante sem permissão.",
    "Não colha plantas, flores ou frutos.",
    "Não capture animais ou materiais biológicos.",
    "Não maltrate animais ou destrua patrimônio.",
    "Use fones para ouvir música.",
    "Assine o livro de visitas.",
    "Respeite horários.",
    "Respeite colegas e orientações.",
    "Preserve as espécies!"
  ];

  // Emojis temáticos para cada regra
  const regraEmojis = [
    '🗑️', // Não jogar lixo no chão
    '🚭', // Não fumar
    '🚫🍺', // Não bebidas alcoólicas
    '🐕‍🦺', // Pets na guia
    '🚗❌', // Não entrar com carro
    '🔪❌', // Não portar armas/instrumentos
    '🐾❌', // Não abandonar animais
    '🌸❌', // Não colher plantas
    '🦋❌', // Não capturar animais
    '🐒❌', // Não maltratar animais
    '🎧', // Usar fones de ouvido
    '📝', // Assinar livro de visita
    '⏰', // Respeitar horários
    '🤝', // Respeitar colegas
    '🌱', // Preservação
  ];

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
      gap: '32px',
      boxSizing: 'border-box',
      borderRadius: '18px',
      margin: '32px auto',
      boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
    },
    imageContainer: {
      flex: 'unset',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      marginTop: '18px',
    },
    image: {
        filter: 'brightness(0.96)', // <<< escurece a imagem
      height: isMobile ? '200px' : '350px',
      objectFit: 'contain',
    },
    speechBubble: {
      position: 'absolute',
      top: isMobile ? '-20px' : '-30px',
      left: isMobile ? '10%' : '-20px',
      backgroundColor: '#fff',
      color: '#065f46',
      padding: '15px 20px',
      borderRadius: '15px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
      maxWidth: isMobile ? '250px' : '220px',
      fontSize: '0.95rem',
      zIndex: 2,
    },
    speechBubbleTail: {
      position: 'absolute',
      bottom: '-10px',
      left: '30px',
      width: 0,
      height: 0,
      borderLeft: '10px solid transparent',
      borderRight: '10px solid transparent',
      borderTop: '10px solid #fff',
    },
    content: {
      flex: 2,
    },
    title: {
      fontSize: '2rem',
      marginBottom: '20px',
      color: '#065f46',
      textAlign: isMobile ? 'center' : 'left',
    },
    list: {
      listStyleType: 'none',
      padding: 0,
      margin: 0,
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
      gap: '18px',
      justifyItems: 'center',
    },
    listItem: {
      fontSize: '1.1rem',
      marginBottom: 0,
      lineHeight: '1.6',
      color: '#064e3b',
      background: '#fff',
      borderRadius: '10px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      padding: '18px 18px 18px 16px',
      minWidth: isMobile ? '90vw' : '0',
      maxWidth: isMobile ? '95vw' : '320px',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      flex: '1 1 0',
    },
    emoji: {
      fontSize: '2rem',
      flexShrink: 0,
    },
    regraText: {
      flex: 1,
      fontSize: '1.08rem',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h2 style={styles.title}>Regras de Visitação 🌿</h2>
        <ul style={styles.list}>
          {regras.map((regra, index) => (
            <li key={index} style={styles.listItem}>
              <span style={styles.emoji}>{regraEmojis[index] || '✅'}</span>
              <span style={styles.regraText}>{regra}</span>
            </li>
          ))}
        </ul>
      </div>
      <div style={styles.imageContainer}>
        <div style={styles.speechBubble}>
          Olá, visitante! 🌱<br />
          Fique de olho nas regras para proteger a natureza!
          <div style={styles.speechBubbleTail}></div>
        </div>
        <img
          src="/imgs/Jerivaldo (1).png"
          alt="Jerivaldo explicando as regras"
          style={styles.image}
        />
      </div>
    </div>
  );
};

export default SobreRegras;

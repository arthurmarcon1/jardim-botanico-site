import React, { useState, useEffect } from 'react';

const SobreRegras = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const regras = [
    "Não jogar lixo no chão.",
    "Não fumar.",
    "Não tomar bebidas alcoólicas, ou quaisquer substâncias ilícitas.",
    "Para passear com os pets, usar sempre a guia e permanecer nos entornos da sede.",
    "Não entrar com o carro sem autorização.",
    "Não portar armas, nem instrumentos destinados ao corte de vegetação, captura, caça, pesca ou quaisquer outras atividades prejudiciais à fauna e flora.",
    "Jamais abandonar animais, nem plantar em áreas abertas sem autorização.",
    "Jamais colher plantas, nem as flores, nem os frutos.",
    "Jamais capturar animais silvestres, insetos, peixes, ou qualquer outro material biológico, ainda que caídos no chão.",
    "Jamais maltratar animais silvestres, nem depredar e/ou destruir patrimônio público.",
    "Não utilizar aparelhos sonoros, a menos que utilize fones de ouvido.",
    "Sempre assinar o livro de visitações quando visitar o JB-UFSM.",
    "Respeitar as datas e horários de funcionamento.",
    "Respeitar os colegas e as orientações que são dadas durante a visitação.",
    "Lembrar sempre que um dos objetivos mais importantes do JB-UFSM é a preservação das espécies."
  ];

  const styles = {
    container: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px',
      backgroundColor: '#f0fdf4',
      borderRadius: '12px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      gap: '30px',
      maxWidth: '1000px',
      margin: '0 auto',
      position: 'relative',
    },
    imageContainer: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
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
    },
    listItem: {
      fontSize: '1.1rem',
      marginBottom: '12px',
      lineHeight: '1.6',
      color: '#064e3b',
    },
  };

  return (
    <div style={styles.container}>
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

      <div style={styles.content}>
        <h2 style={styles.title}>Regras de Visitação 🌿</h2>
        <ul style={styles.list}>
          {regras.map((regra, index) => (
            <li key={index} style={styles.listItem}>
              {index+1}. {regra}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SobreRegras;

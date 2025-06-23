import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

import { dadosAnimais } from '../dados/dadosSite';

const Animais = () => {
  const { user } = useAuth();

  const [animais, setAnimais] = useState(() => {
    const animaisSalvos = localStorage.getItem('animais');
    return animaisSalvos ? JSON.parse(animaisSalvos) : dadosAnimais;
  });

  const [showForm, setShowForm] = useState(false);

  // Estados do formulário
  const [novoNome, setNovoNome] = useState('');
  const [novaDescricao, setNovaDescricao] = useState('');
  const [novaImagem, setNovaImagem] = useState('');
  const [novoSciName, setNovoSciName] = useState('');
  const [novaCaracteristica, setNovaCaracteristica] = useState('');
  const [novaDistribuicao, setNovaDistribuicao] = useState('');
  const [novosHabitos, setNovosHabitos] = useState('');
  const [novoStatus, setNovoStatus] = useState('');

  useEffect(() => {
    localStorage.setItem('animais', JSON.stringify(animais));
  }, [animais]);

  const handleAddAnimal = (e) => {
    e.preventDefault();

    if (!novoNome || !novaDescricao || !novaImagem || !novoSciName || !novaCaracteristica || !novaDistribuicao || !novosHabitos || !novoStatus) {
      alert('Preencha todos os campos!');
      return;
    }

    const newId = animais.length ? Math.max(...animais.map(a => a.id)) + 1 : 1;

    const novoAnimal = {
      id: newId,
      name: novoNome,
      description: novaDescricao,
      image: novaImagem,
      sci_name: novoSciName,
      caracteristics: novaCaracteristica,
      distribution: novaDistribuicao,
      habits: novosHabitos,
      conservation_status: novoStatus,
    };

    setAnimais(prev => [...prev, novoAnimal]);
    setShowForm(false);

    setNovoNome('');
    setNovaDescricao('');
    setNovaImagem('');
    setNovoSciName('');
    setNovaCaracteristica('');
    setNovaDistribuicao('');
    setNovosHabitos('');
    setNovoStatus('');
  };

  // NOVA FUNÇÃO para deletar animal
  const handleDeleteAnimal = (id) => {
    if (window.confirm('Tem certeza que deseja excluir este animal?')) {
      setAnimais(prev => prev.filter(animal => animal.id !== id));
    }
  };

  // ... (estilos permanecem iguais)

  return (
    <section style={{ padding: '60px 20px', backgroundColor: '#ffffff', textAlign: 'center' }} id="animais">
      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'rgb(124, 179, 66)', marginBottom: '40px' }}>Espécies no Jardim Botânico</h2>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '30px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {animais.map((item) => (
          <div key={item.id} style={{
            backgroundColor: '#f7fafc',
            borderRadius: '16px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            overflow: 'hidden',
            width: '216px',
            display: 'flex',
            flexDirection: 'column',
            transition: 'box-shadow 0.3s ease'
          }}>
            <img src={item.image} alt={item.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
            <div style={{
              padding: '20px',
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column'
            }}>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: '600',
                color: 'rgb(32, 59, 2)',
                marginBottom: '10px'
              }}>{item.name}</h3>
              <p style={{
                fontSize: '0.95rem',
                color: 'rgb(32, 59, 2)',
                marginBottom: '20px'
              }}>{item.description}</p>
              <Link to={`/animal/${item.id}`} style={{
                marginTop: 'auto',
                backgroundColor: '#7CB342',
                color: '#fff',
                padding: '10px 16px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'background-color 0.3s ease'
              }}>Saiba mais</Link>

              {/* Botão Excluir só aparece para usuário logado */}
              {user && (
                <button
                  onClick={() => handleDeleteAnimal(item.id)}
                  style={{
                    marginTop: '10px',
                    backgroundColor: '#e53e3e',
                    color: '#fff',
                    border: 'none',
                    padding: '10px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: '600'
                  }}
                >
                  Excluir
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {user && (
        <>
          {!showForm ? (
            <div style={{ marginTop: '40px', textAlign: 'center' }}>
              <button
                className="btn btn-success btn-lg"
                onClick={() => setShowForm(true)}
              >
                Adicionar Novo Animal
              </button>
            </div>
          ) : (
            <form
              style={{
                marginTop: '40px',
                maxWidth: '400px',
                marginLeft: 'auto',
                marginRight: 'auto',
                textAlign: 'left',
                backgroundColor: '#f7fafc',
                padding: '20px',
                borderRadius: '16px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
              }}
              onSubmit={handleAddAnimal}
            >
              {/* Inputs do formulário iguais */}

              <label htmlFor="nome" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'rgb(32, 59, 2)' }}>Nome do Animal</label>
              <input
                id="nome"
                type="text"
                style={{ width: '100%', padding: '8px', marginBottom: '16px', borderRadius: '6px', border: '1px solid #ccc' }}
                value={novoNome}
                onChange={e => setNovoNome(e.target.value)}
              />

              <label htmlFor="descricao" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'rgb(32, 59, 2)' }}>Descrição</label>
              <textarea
                id="descricao"
                style={{ width: '100%', padding: '8px', marginBottom: '16px', borderRadius: '6px', border: '1px solid #ccc' }}
                rows="3"
                value={novaDescricao}
                onChange={e => setNovaDescricao(e.target.value)}
              />

              <label htmlFor="imagem" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'rgb(32, 59, 2)' }}>URL da Imagem</label>
              <input
                id="imagem"
                type="text"
                style={{ width: '100%', padding: '8px', marginBottom: '16px', borderRadius: '6px', border: '1px solid #ccc' }}
                value={novaImagem}
                onChange={e => setNovaImagem(e.target.value)}
                placeholder="Ex: imgs/nome-da-imagem.jpg"
              />

              <label htmlFor="sci_name" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'rgb(32, 59, 2)' }}>Nome Científico</label>
              <input
                id="sci_name"
                type="text"
                style={{ width: '100%', padding: '8px', marginBottom: '16px', borderRadius: '6px', border: '1px solid #ccc' }}
                value={novoSciName}
                onChange={e => setNovoSciName(e.target.value)}
              />

              <label htmlFor="caracteristics" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'rgb(32, 59, 2)' }}>Características</label>
              <textarea
                id="caracteristics"
                style={{ width: '100%', padding: '8px', marginBottom: '16px', borderRadius: '6px', border: '1px solid #ccc' }}
                rows="3"
                value={novaCaracteristica}
                onChange={e => setNovaCaracteristica(e.target.value)}
              />

              <label htmlFor="distribution" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'rgb(32, 59, 2)' }}>Distribuição</label>
              <textarea
                id="distribution"
                style={{ width: '100%', padding: '8px', marginBottom: '16px', borderRadius: '6px', border: '1px solid #ccc' }}
                rows="2"
                value={novaDistribuicao}
                onChange={e => setNovaDistribuicao(e.target.value)}
              />

              <label htmlFor="habits" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'rgb(32, 59, 2)' }}>Hábitos</label>
              <textarea
                id="habits"
                style={{ width: '100%', padding: '8px', marginBottom: '16px', borderRadius: '6px', border: '1px solid #ccc' }}
                rows="2"
                value={novosHabitos}
                onChange={e => setNovosHabitos(e.target.value)}
              />

              <label htmlFor="status" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'rgb(32, 59, 2)' }}>Status de Conservação</label>
              <input
                id="status"
                type="text"
                style={{ width: '100%', padding: '8px', marginBottom: '16px', borderRadius: '6px', border: '1px solid #ccc' }}
                value={novoStatus}
                onChange={e => setNovoStatus(e.target.value)}
              />

              <div style={{ textAlign: 'center' }}>
                <button type="submit" style={{
                  backgroundColor: '#7CB342',
                  color: '#fff',
                  padding: '10px 20px',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: '600'
                }}>Salvar Animal</button>{' '}
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowForm(false)}
                >
                  Cancelar
                </button>
              </div>
            </form>
          )}
        </>
      )}
    </section>
  );
};

export default Animais;

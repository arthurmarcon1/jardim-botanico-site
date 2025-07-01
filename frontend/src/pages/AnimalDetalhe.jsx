import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

const cardStyle = {
  backgroundColor: 'white',
  padding: '1.5rem',
  borderRadius: '10px',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
};

const infoTitleStyle = {
  fontSize: '1.3rem',
  color: '#7CB342',
  marginBottom: '0.5rem',
};

const infoTextStyle = {
  lineHeight: '1.6',
  color: '#333',
};

const linkBaseStyle = {
  color: '#fff',
  padding: '10px 16px',
  borderRadius: '8px',
  textDecoration: 'none',
  fontWeight: '500',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
};

const AnimalDetalhe = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [animais, setAnimais] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    sci_name: '',
    caracteristics: '',
    distribution: '',
    habits: '',
    conservation_status: '',
    image: '',
  });

  useEffect(() => {
    const animaisSalvos = localStorage.getItem('animais');
    if (animaisSalvos) {
      setAnimais(JSON.parse(animaisSalvos));
    }
  }, []);

  const animal = animais.find((a) => a.id === Number(id));

  useEffect(() => {
    if (animal) {
      setFormData({ ...animal });
    }
  }, [animal]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    const novosAnimais = animais.map((a) => {
      if (a.id === Number(id)) {
        return { ...formData };
      }
      return a;
    });

    setAnimais(novosAnimais);
    localStorage.setItem('animais', JSON.stringify(novosAnimais));
    setEditMode(false);
  };

  if (!animal)
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        Animal não encontrado.
      </div>
    );

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: 'rgb(250, 250, 250)',
        padding: '20px 20px 40px',
        boxSizing: 'border-box',
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          .especie-content {
            display: flex !important;
            flex-direction: column !important;
            gap: 2rem !important;
          }
          .especie-imagem-container {
            order: 0 !important;
            margin-bottom: 1rem;
          }
          .especie-info {
            order: 1 !important;
          }
        }
      `}</style>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: 40 }}>
        <header className="especie-header" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          {editMode ? (
            <>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                style={{
                  fontSize: '2.5rem',
                  color: '#7CB342',
                  marginBottom: 8,
                  textAlign: 'center',
                  border: 'none',
                  borderBottom: '2px solid #7CB342',
                  outline: 'none',
                  width: '100%',
                }}
              />
              <input
                type="text"
                value={formData.sci_name}
                onChange={(e) => handleChange('sci_name', e.target.value)}
                style={{
                  fontSize: '1.2rem',
                  fontStyle: 'italic',
                  color: '#666',
                  textAlign: 'center',
                  border: 'none',
                  borderBottom: '1px solid #ccc',
                  outline: 'none',
                  width: '100%',
                }}
              />
            </>
          ) : (
            <>
              <h2 style={{ fontSize: '2.5rem', color: '#7CB342', marginBottom: 8 }}>
                {formData.name}
              </h2>
              <p style={{ fontSize: '1.2rem', fontStyle: 'italic', color: '#666' }}>
                <em>{formData.sci_name}</em>
              </p>
            </>
          )}
        </header>

        <main className="especie-content" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <div className="especie-imagem-container" style={{ height: '100%', display: 'flex' }}>
            {editMode ? (
              <input
                type="text"
                value={formData.image}
                onChange={(e) => handleChange('image', e.target.value)}
                placeholder="Nome do arquivo da imagem (ex: animal.jpg)"
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  fontSize: '1rem',
                  borderRadius: '6px',
                  border: '1px solid #ccc',
                }}
              />
            ) : (
              <img
                src={`/${formData.image}`}
                alt={formData.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: 10,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                }}
              />
            )}
          </div>

          <div className="especie-info" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {['caracteristics', 'distribution', 'habits', 'conservation_status'].map((field) => (
              <section key={field} style={cardStyle}>
                <h3 style={infoTitleStyle}>
                  {{
                    caracteristics: 'Características',
                    distribution: 'Distribuição',
                    habits: 'Hábitos',
                    conservation_status: 'Status de Conservação',
                  }[field]}
                </h3>
                {editMode ? (
                  <textarea
                    rows={4}
                    value={formData[field]}
                    onChange={(e) => handleChange(field, e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.5rem',
                      fontSize: '1rem',
                      borderRadius: '6px',
                      border: '1px solid #ccc',
                    }}
                  />
                ) : (
                  <p style={infoTextStyle}>{formData[field]}</p>
                )}
              </section>
            ))}
          </div>
        </main>

        {user && (
          <div style={{ marginTop: 20, display: 'flex', gap: 10 }}>
            {editMode ? (
              <>
                <button
                  onClick={handleSave}
                  style={{
                    backgroundColor: '#7CB342',
                    color: '#fff',
                    padding: '10px 16px',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Salvar Alterações
                </button>
                <button
                  onClick={() => setEditMode(false)}
                  style={{
                    backgroundColor: '#ccc',
                    color: '#333',
                    padding: '10px 16px',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Cancelar
                </button>
              </>
            ) : (
              <button
                onClick={() => setEditMode(true)}
                style={{
                  backgroundColor: '#7CB342',
                  color: '#fff',
                  padding: '10px 16px',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Editar Informações
              </button>
            )}
          </div>
        )}

        <nav style={{ marginTop: 30, display: 'flex', gap: 16 }}>
          <Link to="/" style={{ ...linkBaseStyle, backgroundColor: 'rgba(241, 31, 31, 0.9)' }}>
            ← Voltar para o Início
          </Link>
          <Link to="/animais" style={{ ...linkBaseStyle, backgroundColor: '#7CB342' }}>
            ← Voltar para Espécies
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default AnimalDetalhe;

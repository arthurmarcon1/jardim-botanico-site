import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const fakeUser = {
    id: '1',
    email: 'admin@admin.com',
    name: 'Usuario Admin',
  };

  const login = async (email, password) => {
    // Simulação de autenticação
    if (email === 'admin@admin.com' && password === 'admin') {
      setUser(fakeUser);
      return { success: true };
    } else {
      return { success: false, message: 'Email ou senha incorretos.' };
    }
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

import React, { useState } from 'react';
import { login } from '../api/auth/authApi';

const LoginComponent = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleLogin = async () => {
    try {
      const user = await login(credentials);
      // Realizar acciones con el usuario autenticado
    } catch (error) {
      console.error('Error durante el inicio de sesión:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Usuario"
        value={credentials.username}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      />
      <button onClick={handleLogin}>Iniciar Sesión</button>
    </div>
  );
};

export default LoginComponent;

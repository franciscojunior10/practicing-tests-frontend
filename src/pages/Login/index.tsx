import React, { useState, useEffect, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('@tokenGenereted');

    if (token) {
      history.push('/formulario');
    }
  }, [history]);

  function handleLogin(event: FormEvent) {
    event.preventDefault();

    localStorage.setItem('@tokenGenereted', 'genereted');

    history.push('/formulario');
  }

  return (
    <Container>
      <div className="content">
        <h1>Bem Vindo, faça seu Login</h1>
        <form onSubmit={handleLogin}>
          <h3>E-mail</h3>
          <input
            value={email}
            required
            type="text"
            onChange={event => {
              setEmail(event.target.value);
            }}
          />
          <h3>Senha</h3>
          <input
            value={password}
            required
            type="password"
            onChange={event => {
              setPassword(event.target.value);
            }}
          />
          <button type="submit">ENTRAR</button>
        </form>
      </div>
    </Container>
  );
};

export default Login;

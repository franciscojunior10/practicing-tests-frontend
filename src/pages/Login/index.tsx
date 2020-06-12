import React, { useState, useEffect, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import crypto from 'crypto';
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

  function verifyEmail(email: string) {
    return !!email.match(/.+@.+/);
  }

  function handleLogin(event: FormEvent) {
    event.preventDefault();

    try {
      if (password.length < 4) {
        alert('Senha deve conter mais de 4 digítos.');
        return;
      }

      if (!verifyEmail(email)) {
        alert('E-mail inválido.');
        return;
      }

      const tokenEncrypted = crypto.randomBytes(6).toString('hex');

      localStorage.setItem('@tokenGenereted', tokenEncrypted);

      history.push('/formulario');
    } catch (error) {
      alert('Falha ao fazer login, tente novamente.');
    }
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

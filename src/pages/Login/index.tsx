import React, { useState, useEffect, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import crypto from 'crypto';
import { Container } from './styles';

import imageLogin from '../../assets/Headerheader.svg';

const Login: React.FC = () => {
  const { addToast } = useToasts();

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
        addToast('Senha deve conter mais de 4 digítos.', {
          appearance: 'error',
          autoDismiss: true,
        });
        return;
      }

      if (!verifyEmail(email)) {
        addToast('E-mail inválido.', { appearance: 'error', autoDismiss: true });
        return;
      }

      const tokenEncrypted = crypto.randomBytes(6).toString('hex');

      localStorage.setItem('@tokenGenereted', tokenEncrypted);

      history.push('/formulario');
    } catch (error) {
      addToast('Falha ao fazer login, tente novamente.', {
        appearance: 'error',
        autoDismiss: true,
      });
    }
  }

  return (
    <Container>
      <img src={imageLogin} alt="main-logo" />
      <div className="content">
        <h1>Bem Vindo, faça seu Login</h1>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">E-mail</label>
          <input
            data-cy="email"
            id="email"
            value={email}
            required
            type="text"
            onChange={event => {
              setEmail(event.target.value);
            }}
          />
          <label htmlFor="senha">Senha</label>
          <input
            data-cy="senha"
            id="senha"
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

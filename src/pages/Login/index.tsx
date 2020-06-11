import React from 'react';

import { Container } from './styles';

const Login: React.FC = () => {
    return (
        <Container>
            <div className="content">
                <h1>Bem Vindo, faça seu Login</h1>
                <form action="">
                    <h3>E-mail</h3>
                    <input
                        required
                        type="text"
                    />
                    <h3>Senha</h3>
                    <input
                        required
                        type="password"
                    />
                    <button>ENTRAR</button>
                </form>
            </div>
        </Container>
    );
}

export default Login;
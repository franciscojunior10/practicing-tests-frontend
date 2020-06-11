import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const Header: React.FC = () => {
    return (
        <Container>
            <header className="header">
                <h3>TOUSER</h3>

                <div className="div-group">
                    <Link to='/listagem'>
                        Ir para Listagem
                    </Link>

                    <Link to='/'>
                        Logout
                    </Link>
                </div>
            </header>
        </Container>
    );
};

export default Header;
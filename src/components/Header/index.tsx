import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

interface HeaderProps {
  nameButton: string;
}

const Header: React.FC<HeaderProps> = ({ nameButton }) => {
  return (
    <Container>
      <header className="header">
        <h3>TOUSER</h3>

        <div className="div-group">
          <Link to="/listagem">{nameButton}</Link>

          <Link to="/">Logout</Link>
        </div>
      </header>
    </Container>
  );
};

export default Header;

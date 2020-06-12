import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Container } from './styles';

interface HeaderProps {
  nameButton: string;
  namePagina: string;
}

const Header: React.FC<HeaderProps> = ({ nameButton, namePagina }) => {
  const history = useHistory();

  function handleLogout() {
    localStorage.clear();

    history.push('/');
  }

  return (
    <Container>
      <header data-testid="header" className="header">
        <h3>TOUSER</h3>

        <div className="div-group">
          <Link to={`/${namePagina}`}>{nameButton}</Link>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </header>
    </Container>
  );
};

export default Header;

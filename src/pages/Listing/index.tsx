import React from 'react';
import { FiSearch } from 'react-icons/fi';

import { Container } from './styles';

import Header from '../../components/Header';

const Listing: React.FC = () => {
  return (
    <>
      <Header nameButton="Voltar para Cadastro" namePagina="formulario" />
      <Container>
        <div className="content">
          <h1>Listagem</h1>

          <div className="search">
            <input type="text" placeholder="Pesquisar" />
            <button>
              <FiSearch />
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Listing;

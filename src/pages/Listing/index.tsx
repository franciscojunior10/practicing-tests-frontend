import React from 'react';
import { FiSearch, FiEdit, FiTrash } from 'react-icons/fi';

import { Container } from './styles';

import Header from '../../components/Header';

interface Row {
  nome: string;
  cpf: string;
  email: string;
  cidade: string;
}

const rows: Row[] = [
  {
    nome: 'Francisco junior',
    email: 'franciscojn@gamil.com',
    cidade: 'Picos',
    cpf: '07115789312',
  },
  {
    nome: 'Francisco junior',
    email: 'franciscojn@gamil.com',
    cidade: 'Picos',
    cpf: '07115789312',
  },
  {
    nome: 'Francisco junior',
    email: 'franciscojn@gamil.com',
    cidade: 'Picos',
    cpf: '07115789312',
  },
];

const Listing: React.FC = () => {
  function renderTable(linha: Row, index: number) {
    return (
      <tr
        style={{
          background: '#ffff',
        }}
        key={index + 'table'}
      >
        <td>{linha.nome}</td>
        <td>{linha.cpf}</td>
        <td>{linha.email}</td>
        <td>{linha.cidade}</td>
        <td>
          <button
            style={{
              textDecoration: 'none',
              border: 0,
              background: '#ffff',
            }}
          >
            <FiEdit />
          </button>
          <button
            style={{
              textDecoration: 'none',
              border: 0,
              background: '#ffff',
            }}
          >
            <FiTrash />
          </button>
        </td>
      </tr>
    );
  }
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
          <div className="div-table">
            <table>
              <tr className="titles">
                <th className="th">Nome</th>
                <th className="th">CPF</th>
                <th className="th">E-mail</th>
                <th className="th">Cidade</th>
                <th className="th">Ação</th>
              </tr>
              {rows.map(renderTable)}
            </table>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Listing;

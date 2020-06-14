import React, { useEffect, useState } from 'react';
import { FiSearch, FiEdit, FiTrash } from 'react-icons/fi';
import { useToasts } from 'react-toast-notifications';

import api from '../../services/api';

import { Container } from './styles';

import Header from '../../components/Header';
import ModalEditUser from '../../components/ModalEditUser';

interface UserProps {
  id: number;
  nome: string;
  cpf: string;
  email: string;
  endereco: {
    cidade: string;
  };
}

const Listing: React.FC = () => {
  const { addToast } = useToasts();
  const [users, setUsers] = useState<UserProps[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [nomeSearch, setNomeSearch] = useState<string>('');
  const [ID, setID] = useState<number>(0);

  useEffect(() => {
    loadUsers();
  }, []);

  function loadUsers() {
    api.get('/').then(res => {
      setUsers(res.data);
    });
  }

  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }

  function addId(id: number) {
    setID(id);
  }

  async function handleSearchUser() {
    try {
      const res = await api.get(`/?q=${nomeSearch}`);
      if (res.data.length !== 0) {
        setUsers(res.data);
      } else {
        addToast('Usuário não encontrado.', {
          appearance: 'info',
          autoDismiss: true,
        });
      }
    } catch (error) {
      alert('erro');
    }
  }

  async function handleDelete(id: number) {
    try {
      await api.delete(`/${id}`);
      loadUsers();
    } catch (error) {
      addToast('Erro ao deletar, tente novamente.', {
        appearance: 'error',
        autoDismiss: true,
      });
    }
  }

  function handleUsersRow(user: UserProps, index: number) {
    return (
      <tr className="rows" key={user.id + 'tabela' + index}>
        <td className="td-nome">{user.nome}</td>
        <td className="td-cpf">{user.cpf}</td>
        <td className="td-email">{user.email}</td>
        <td className="td-cidade">{user.endereco.cidade}</td>
        <td>
          <button
            className="button"
            onClick={() => {
              toggleModal();
              addId(user.id);
            }}
          >
            <FiEdit />
          </button>
          <button
            className="button"
            onClick={() => {
              handleDelete(user.id);
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
            <input
              value={nomeSearch}
              type="text"
              placeholder="Pesquisar"
              onChange={event => {
                setNomeSearch(event.target.value);
              }}
            />
            <button
              onClick={() => {
                handleSearchUser();
              }}
            >
              <FiSearch />
            </button>
          </div>
          <div className="div-table">
            <table>
              <tr className="titles">
                <th className="th-nome">Nome</th>
                <th className="th-cpf">CPF</th>
                <th className="th-email">E-mail</th>
                <th className="th-cidade">Cidade</th>
                <th className="th-acao">Ação</th>
              </tr>
              {users.map(handleUsersRow)}
            </table>
          </div>
        </div>
        <ModalEditUser isOpen={modalOpen} setIsOpen={toggleModal} idUser={ID} />
      </Container>
    </>
  );
};

export default Listing;

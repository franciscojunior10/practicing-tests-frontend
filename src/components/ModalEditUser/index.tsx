import React, { useState, FormEvent } from 'react';
import InputMask from 'react-input-mask';

import Modal from '../Modal';
import api from '../../services/api';

import { Container } from './styles';

interface ModalEditProps {
  isOpen: boolean;
  setIsOpen: () => void;
  idUser: number;
}

const ModalEditUser: React.FC<ModalEditProps> = ({ isOpen, setIsOpen, idUser }) => {
  const [nome, setNome] = useState<string>('');
  const [cpf, setCpf] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [cidade, setCidade] = useState<string>('');

  function verifyEmail(email: string) {
    return !!email.match(/.+@.+/);
  }

  async function handleEditUser(event: FormEvent) {
    event.preventDefault();

    try {
      if (!verifyEmail(email)) {
        alert('E-mail inválido.');
        return;
      }

      const data = {
        nome,
        cpf,
        email,
        endereco: {
          cidade,
        },
      };

      await api.put(`/${idUser}`, data);

      alert('Cadastro editado realizado com sucesso.');
    } catch (error) {
      alert('Erro ao editar o cadastro, tente novamente.');
    }
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Container>
        <div data-testid="modaledit" className="content">
          <form onSubmit={handleEditUser}>
            <h1>Editar</h1>

            <div className="input">
              <span>Nome:</span>
              <input
                value={nome}
                required
                type="text"
                onChange={event => {
                  setNome(event.target.value);
                }}
              />
            </div>

            <div className="input">
              <span>CPF:</span>
              <InputMask
                maskChar={null}
                value={cpf}
                mask="999.999.999-99"
                required
                type="text"
                onChange={event => {
                  setCpf(event.target.value);
                }}
              />
            </div>

            <div className="input">
              <span>E-mail:</span>
              <input
                value={email}
                required
                type="text"
                onChange={event => {
                  setEmail(event.target.value);
                }}
              />
            </div>

            <div className="input">
              <span>Cidade:</span>
              <input
                value={cidade}
                required
                type="text"
                onChange={event => {
                  setCidade(event.target.value);
                }}
              />
            </div>

            <button type="submit">SALVAR</button>
          </form>
        </div>
      </Container>
    </Modal>
  );
};

export default ModalEditUser;

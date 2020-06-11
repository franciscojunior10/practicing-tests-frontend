import React from 'react';

import Modal from '../Modal';

import { Container } from './styles';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

const ModalEditUser: React.FC<ModalProps> = ({ isOpen, setIsOpen }) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Container>
        <div className="content">
          <form action="">
            <h1>Editar</h1>

            <div className="input">
              <span>Nome: Usario Teste</span>
              <input required type="text" />
            </div>

            <div className="input">
              <span>CPF: 071.157.893.12</span>
              <input required type="text" />
            </div>

            <div className="input">
              <span>E-mail: teste@gmail.com</span>
              <input required type="text" />
            </div>

            <div className="input">
              <span>Cidade: Picos</span>
              <input required type="text" />
            </div>

            <button>SALVAR</button>
          </form>
        </div>
      </Container>
    </Modal>
  );
};

export default ModalEditUser;

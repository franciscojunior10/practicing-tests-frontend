import React from 'react';
import InputMask from 'react-input-mask';

import Header from '../../components/Header';
import { Container } from './styles';

const Form: React.FC = () => {
  return (
    <>
      <Header nameButton="Ir para Listagem" />
      <Container>
        <div className="content">
          <form action="">
            <h1>Cadastro</h1>

            <h3>Dados</h3>

            <div className="input">
              <h5>Nome</h5>
              <input required type="text" />
            </div>

            <div className="input-group">
              <div className="input">
                <h5>CPF</h5>
                <InputMask mask="999.999.999-99" required type="text" />
              </div>

              <div className="input">
                <h5>E-mail</h5>
                <input required type="text" />
              </div>
            </div>

            <h3>Endereço</h3>

            <div className="input-group">
              <div className="input">
                <h5>CEP</h5>
                <InputMask mask="99.999-999" required type="text" />
              </div>

              <div className="input">
                <h5>Rua</h5>
                <input required type="text" />
              </div>
            </div>

            <div className="input-group">
              <div className="input">
                <h5>Número</h5>
                <input required type="number" />
              </div>

              <div className="input">
                <h5>Bairro</h5>
                <input required type="text" />
              </div>

              <div className="input">
                <h5>Cidade</h5>
                <input required type="text" />
              </div>
            </div>

            <button>CADASTRAR</button>
          </form>
        </div>
      </Container>
    </>
  );
};

export default Form;

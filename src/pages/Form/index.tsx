import React, { useState, FormEvent, ChangeEvent } from 'react';
import InputMask from 'react-input-mask';
import axios from 'axios';

import { useToasts } from 'react-toast-notifications';

import api from '../../services/api';

import Header from '../../components/Header';
import { Container } from './styles';

interface ViaCep {
  bairro: string;
  localidade: string;
  logradouro: string;
  gia: string;
}

const Form: React.FC = () => {
  const { addToast } = useToasts();

  const [nome, setNome] = useState<string>('');
  const [cpf, setCpf] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [cep, setCep] = useState<number>();
  const [rua, setRua] = useState<string>('');
  const [numero, setNumero] = useState<number>();
  const [bairro, setBairro] = useState<string>('');
  const [cidade, setCidade] = useState<string>('');

  // function handleSelectCEP(event: ChangeEvent<HTMLInputElement>) {
  //   const cep = event.target.value.replace('.', '').replace('-', '');
  //   setCep(Number(cep));
  //   axios.get<ViaCep>(`https://viacep.com.br/ws/${cep}/json/`).then(res => {
  //     setCidade(res.data.localidade);
  //     // setBairro(res.data.bairro);
  //     // setRua(res.data.logradouro);
  //   });
  // }

  function verifyEmail(email: string) {
    return !!email.match(/.+@.+/);
  }

  async function handleRegister(event: FormEvent) {
    event.preventDefault();

    try {
      if (!verifyEmail(email)) {
        addToast('E-mail inválido.', { appearance: 'error', autoDismiss: true });
        return;
      }
      const data = {
        nome,
        cpf,
        email,
        endereco: {
          cep,
          rua,
          numero,
          bairro,
          cidade,
        },
      };

      await api.post('/', data);

      addToast('Cadastro realizado com sucesso.', { appearance: 'success', autoDismiss: true });

      setNome('');
      setCpf('');
      setEmail('');
      setCep(0);
      setRua('');
      setNumero(0);
      setBairro('');
      setCidade('');
    } catch (error) {
      addToast('Erro ao fazer o cadastro, tente novamente.', {
        appearance: 'error',
        autoDismiss: true,
      });
    }
  }

  return (
    <>
      <Header nameButton="Ir para Listagem" namePagina="listagem" />
      <Container>
        <div data-testid="form" className="content">
          <form onSubmit={handleRegister}>
            <h1>Cadastro</h1>

            <h3>Dados</h3>

            <div className="input">
              <label htmlFor="nome">Nome</label>
              <input
                data-cy="nome"
                id="nome"
                value={nome}
                required
                type="text"
                onChange={event => {
                  setNome(event.target.value);
                }}
              />
            </div>

            <div className="input-group">
              <div className="input">
                <label htmlFor="CPF">CPF</label>
                <InputMask
                  data-cy="cpf"
                  id="CPF"
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
                <label htmlFor="email">E-mail</label>
                <input
                  data-cy="email"
                  id="email"
                  value={email}
                  required
                  type="text"
                  onChange={event => {
                    setEmail(event.target.value);
                  }}
                />
              </div>
            </div>

            <h3>Endereço</h3>

            <div className="input-group">
              <div className="input">
                <label htmlFor="cep">CEP</label>
                <InputMask
                  data-cy="cep"
                  id="cep"
                  maskChar={null}
                  value={cep}
                  mask="99.999-999"
                  required
                  type="text"
                  // onChange={handleSelectCEP}
                />
              </div>

              <div className="input">
                <label htmlFor="rua">Rua</label>
                <input
                  data-cy="rua"
                  id="rua"
                  value={rua}
                  required
                  type="text"
                  onChange={event => {
                    setRua(event.target.value);
                  }}
                />
              </div>
            </div>

            <div className="input-group">
              <div className="input">
                <label htmlFor="numero">Número</label>
                <input
                  data-cy="numero"
                  id="numero"
                  value={numero}
                  required
                  type="number"
                  onChange={event => {
                    setNumero(Number(event.target.value));
                  }}
                />
              </div>

              <div className="input">
                <label htmlFor="bairro">Bairro</label>
                <input
                  data-cy="bairro"
                  id="bairro"
                  value={bairro}
                  required
                  type="text"
                  onChange={event => {
                    setBairro(event.target.value);
                  }}
                />
              </div>

              <div className="input">
                <label htmlFor="cidade">Cidade</label>
                <input
                  data-cy="cidade"
                  id="cidade"
                  value={cidade}
                  required
                  type="text"
                  onChange={event => {
                    setCidade(event.target.value);
                  }}
                />
              </div>
            </div>

            <button type="submit">CADASTRAR</button>
          </form>
        </div>
      </Container>
    </>
  );
};

export default Form;

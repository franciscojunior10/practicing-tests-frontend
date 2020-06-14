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
  const [cep, setCep] = useState<number | string>('');
  const [rua, setRua] = useState<string>('');
  const [numero, setNumero] = useState<number | string>('');
  const [bairro, setBairro] = useState<string>('');
  const [cidade, setCidade] = useState<string>('');

  function handleSelectCEP(event: ChangeEvent<HTMLInputElement>) {
    const cep = event.target.value.replace('.', '').replace('-', '');

    axios.get<ViaCep>(`https://viacep.com.br/ws/${cep}/json/`).then(res => {
      setCep(Number(cep));
      setCidade(res.data.localidade);
      setBairro(res.data.bairro);
      setRua(res.data.logradouro);
    });
  }

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
      setCep('');
      setCidade('');
      setBairro('');
      setNumero('');
      setRua('');
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
        <div className="content">
          <form onSubmit={handleRegister}>
            <h1>Cadastro</h1>

            <h3>Dados</h3>

            <div className="input">
              <h5>Nome</h5>
              <input
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
                <h5>CPF</h5>
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
                <h5>E-mail</h5>
                <input
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
                <h5>CEP</h5>
                <InputMask
                  maskChar={null}
                  value={cep}
                  mask="99.999-999"
                  required
                  type="text"
                  onChange={handleSelectCEP}
                />
              </div>

              <div className="input">
                <h5>Rua</h5>
                <input
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
                <h5>Número</h5>
                <input
                  value={numero}
                  required
                  type="number"
                  onChange={event => {
                    setNumero(Number(event.target.value));
                  }}
                />
              </div>

              <div className="input">
                <h5>Bairro</h5>
                <input
                  value={bairro}
                  required
                  type="text"
                  onChange={event => {
                    setBairro(event.target.value);
                  }}
                />
              </div>

              <div className="input">
                <h5>Cidade</h5>
                <input
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

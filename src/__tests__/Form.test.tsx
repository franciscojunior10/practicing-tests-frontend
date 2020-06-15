import React from 'react';

import { render } from '@testing-library/react';
import AxiosMock from 'axios-mock-adapter';
import api from '../services/api';
import { ToastProvider } from 'react-toast-notifications';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import Form from '../pages/Form';

const history = createMemoryHistory();

const apiMock = new AxiosMock(api);

describe('Form', () => {
  describe('Folder structure and data-testid attributes', () => {
    it('should be able to add a new user', async () => {
      apiMock.onGet('/').reply(200, []);

      const { getByTestId } = render(
        <ToastProvider>
          <Router history={history}>
            <Form />
          </Router>
        </ToastProvider>
      );

      const container = getByTestId('form');

      expect(container).toBeDefined();

      apiMock.onPost('/').reply(200, {
        nome: 'Francisco das Chagas dos Anjos Carvalho Júnior',
        cpf: '222.222.222-22',
        email: 'franciscojn49@gmail.com',
        endereco: {
          cep: 64308000,
          rua: '7 de setembro',
          numero: 34,
          bairro: 'canto do cedro',
          cidade: 'Lagoa do Sítio',
        },
      });

      expect(200).toBeTruthy();
    });
  });
});

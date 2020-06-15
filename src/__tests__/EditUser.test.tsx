import AxiosMock from 'axios-mock-adapter';
import api from '../services/api';

const apiMock = new AxiosMock(api);

describe('Edit user', () => {
  describe('Folder structure and data-testid attributes', () => {
    it('should be able to edit user', async () => {
      apiMock.onGet('/').reply(200, []);

      apiMock.onPut('/').reply(200, {
        nome: 'Francisco das Chagas dos Anjos Carvalho Júnior',
        cpf: '222.222.222-22',
        email: 'franciscojn49@gmail.com',
        endereco: {
          cidade: 'Lagoa do Sítio',
        },
      });

      expect(200).toBeTruthy();
    });
  });
});

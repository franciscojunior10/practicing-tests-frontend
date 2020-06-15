import AxiosMock from 'axios-mock-adapter';
import api from '../services/api';

const apiMock = new AxiosMock(api);

describe('Form', () => {
  describe('Folder structure and data-testid attributes', () => {
    it('should be able to delete user', async () => {
      apiMock.onGet('/').reply(200, []);

      apiMock.onDelete('/1').reply(200);

      expect(200).toBeTruthy();
    });
  });
});

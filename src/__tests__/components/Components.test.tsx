import React from 'react';

import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import Header from '../../components/Header';
import ModalEditUser from '../../components/ModalEditUser';

const history = createMemoryHistory();

describe('Components', () => {
  describe('Folder structure and data-testid attributes', () => {
    it('should render properly the <Header/> component', () => {
      const { getByTestId } = render(
        <Router history={history}>
          <Header nameButton="test" />
        </Router>
      );
      const container = getByTestId('header');

      expect(container).toBeDefined();
    });

    it('should render properly the <ModalEditUser/> component', () => {
      const { getByTestId } = render(
        <Router history={history}>
          <ModalEditUser isOpen setIsOpen={() => 'test'} />
        </Router>
      );
      const container = getByTestId('modaledit');

      expect(container).toBeDefined();
    });
  });
});

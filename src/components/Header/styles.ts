import styled from 'styled-components';

export const Container = styled.div`
  background: #ff6363;
  padding: 30px 0;
  width: 100%;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 150px;

    width: 100%;

    color: #ffffff;

    .div-group a {
      margin-right: 30px;
      color: #ffffff;
    }

    .div-group button {
      background: #ff6363;
      color: #ffffff;
      border: 0;
      display: inline-block;
      text-align: center;
      text-decoration: none;
    }
  }
`;

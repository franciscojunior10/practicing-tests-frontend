import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 1120px;
  margin: 50px auto;

  .content {
    display: flex;
    justify-content: center;
    flex-direction: column;

    width: 900px;
    padding: 50px;
    background: #fdf2f1;
    border-radius: 5px;
  }

  .content h1 {
    display: flex;
    justify-content: center;
  }

  .content input[type='text'] {
    flex: 1;
    background: #ffffff;
    border: 0;
    padding: 16px 24px;
    font-size: 16px;
    color: #6c6c80;
    width: 100%;
  }

  .content .div-pesquisar {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
  }

  .content .div-pesquisar button {
    background: #ffffff;
    border: 0;
    height: 50px;
    color: #6c6c80;
    font-weight: 700;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    transition: filter 0.2s;
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 1120px;
  margin: 200px auto;

  img {
    margin-right: 100px;
  }

  .content {
    display: flex;
    justify-content: center;
    flex-direction: column;

    padding: 50px;
    background: #fdf2f1;
    border-radius: 5px;
  }

  .content h1 {
    font-size: 36px;
  }

  .content form {
    margin-top: 50px;
  }

  .content form h3 {
    margin-top: 40px;
    line-height: 40px;
    color: #6c6c80;
  }

  .content form input[type='text'],
  .content form input[type='password'] {
    flex: 1;
    background: #ffffff;
    border-radius: 5px;
    border: 0;
    padding: 16px 24px;
    font-size: 16px;
    color: #6c6c80;
    width: 100%;
  }

  .content form button {
    margin-top: 40px;
    width: 100%;
    height: 60px;
    background: #ff6363;
    border: 0;
    border-radius: 5px;
    color: #ffffff;
    font-weight: 700;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    line-height: 60px;
    transition: filter 0.2s;
  }

  .content form button:hover {
    filter: brightness(90%);
  }
`;

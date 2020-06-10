import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
    
    * { 
        margin: 0;
        padding: 0; 
        outline: 0; 
        box-sizing: border-box; 
    }

    body {
        background-color: #FFFFFF;
    }

    body, input, button {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 500;
    }

    button {
        cursor: pointer;
    }

    ul {
        list-style: none;
    }
`;
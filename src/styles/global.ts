import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media(max-width: 1120px){
            font-size: 93.75%;
        }
        @media(max-width: 720px){
            font-size: 87.5%;
        }
    }

    body, input, input {
        font-family: sans-serif;
    }

    button {
        cursor: pointer;
    }

    [disebled] {
        cursor: not-allowed;
        opacity: 0.9;
    }
`
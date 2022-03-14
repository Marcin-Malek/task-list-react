import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
    }

    ::before, ::after {
    box-sizing: inherit;
    }

    body {
    font-family: 'Montserrat', sans-serif;
    word-break: break-word;
    max-width: 1000px;
    margin: auto;
    padding: 20px;
    background-color: ${({theme}) => theme.color.alto};
    }
`;
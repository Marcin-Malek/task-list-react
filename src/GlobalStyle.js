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
    background-color: ${({theme}) => theme.color.alto};
    }
`;
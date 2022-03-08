import styled from "styled-components";

export const ButtonsContainer = styled.div`
    @media (max-width: 700px) {  
        display: flex;
        margin-top: 10px;
        flex-direction: column;
    }
`;

export const Button = styled.button`
    margin-left: 15px;
    font-size: medium;
    background: none;
    border: none;
    color: hsl(180, 100%, 25%);
    transition: 1s;

    &:hover {
        color: hsl(180, 100%, 35%);
    }

    &:disabled { 
        color: #bbb;
    }

    @media (max-width: 700px) {  
        margin: 10px;
    }
`;
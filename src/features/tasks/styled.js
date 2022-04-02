import styled from "styled-components";

export const ButtonsContainer = styled.div`
    @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {  
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
    color: ${({theme}) => theme.color.teal};
    transition: 0.5s;

    &:hover {
        filter: brightness(120%);
    }

    &:disabled { 
        filter: none;
        color: ${({theme}) => theme.color.silver};
    }

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {  
        margin: 10px;
    }
`;
import styled, { css } from "styled-components";

export const Input = styled.input`
    flex-grow: 1;
    padding: 10px;
    border: 1.5px solid ${({ theme }) => theme.color.alto};

    ${({ contentPassed, autoFocus }) => (!contentPassed && autoFocus) && css`
        &:focus {
            outline-color: ${({ theme }) => theme.color.red};
        }
    `}

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        margin: 0 0 10px 0;
    }
    
`;

export const ButtonsContainer = styled.div`
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {  
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
    color: ${({ theme }) => theme.color.teal};
    transition: 0.5s;

    &:hover {
        filter: brightness(120%);
    }

    &:disabled { 
        filter: none;
        color: ${({ theme }) => theme.color.silver};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {  
        margin: 10px;
    }
`;
import styled, { css } from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: stretch;
    padding: 20px;
    background-color: white;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
        flex-direction: column;
    }
`;

export const Input = styled.input`
    flex-grow: 1;
    padding: 10px;
    border: 1.5px solid #ddd;
    margin-right: 20px;

    ${({ contentPassed }) => !contentPassed && css`
        &:focus {
            outline-color: red;
        }
    `}

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
        margin: 0 0 10px 0;
    }
    
`;

export const Button = styled.button`
    background-color: hsl(180, 100%, 25%);
    color: white;
    border: none;
    padding: 10px;
    transition: 1s;

    &:hover {
    background-color: hsl(180, 100%, 35%);
    transform: scale(1.1);
    }
`;
import styled, { css } from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: stretch;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
        flex-direction: column;
    }
`;

export const Input = styled.input`
    flex-grow: 1;
    padding: 10px;
    border: 1.5px solid ${({theme}) => theme.color.alto};
    margin-right: 20px;

    ${({ contentPassed }) => !contentPassed && css`
        &:focus {
            outline-color: ${({theme}) => theme.color.red};
        }
    `}

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
        margin: 0 0 10px 0;
    }
    
`;

export const Button = styled.button`
    background-color: ${({theme}) => theme.color.teal};
    color: white;
    border: none;
    padding: 10px;
    transition: 1s;

    &:hover {
        filter: brightness(120%);
        transform: scale(1.1);
    }
`;
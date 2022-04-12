import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        flex-direction: column;
    }
`;

export const Button = styled.button`
    background-color: ${({ theme }) => theme.color.teal};
    color: white;
    border: none;
    padding: 10px;
    margin-left: 20px;
    transition: 1s;
    cursor: pointer;

    &:hover {
        filter: brightness(120%);
        transform: scale(1.1);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        margin: 0;
    }
`;
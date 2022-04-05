import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import deleteIcon from "./img/delete.png";

export const List = styled.ul`
    margin: 0 20px;
    padding: 0;
    perspective: 100px;
`;

export const Item = styled.li`
    display: flex;
    border-bottom: 1.5px solid ${({ theme }) => theme.color.alto};
    align-items: center;
    list-style-type: none;
    transition: 2s;
    transition-timing-function: cubic-bezier(0.68, 0.14, 0.59, 0.88);

    &:hover {
        transform: translate3d(0, 0, 1px);
        box-shadow: 0 1px 2px 0;
    }
`;

export const Content = styled.span`
    flex-grow: 1;
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const StyledLink = styled(Link)`
    flex-grow: 1;
    padding: 1em;
    text-decoration: none;
    text-decoration-color: black;
    color: black;
`;

export const Button = styled.button`
    color: white;
    border: none;
    min-width: 30px;
    min-height: 30px;
    margin: 12px;
    background-color: ${({ theme }) => theme.color.japaneseLaurel};
    transition: 1s;

    ${({ remove }) => remove && css`
        background: url(${deleteIcon}) center center no-repeat;
        background-size: 16px;
        background-color: ${({ theme }) => theme.color.red};
        transition: 1s;
    `}

    &:hover {
        filter: brightness(120%);
    }
`;
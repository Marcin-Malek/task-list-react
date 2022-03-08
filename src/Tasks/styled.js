import styled, { css } from "styled-components";
import deleteIcon from "../img/delete.png";

export const List = styled.ul`
    margin: 0;
    background-color: white;
    padding: 20px 0 20px 0;
`;

export const Item = styled.li`
    display: flex;
    margin: 0 20px;
    border-bottom: 1.5px solid #ddd;
    align-items: center;
    list-style-type: none;
`;

export const Content = styled.span`
    flex-grow: 1;
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    color: white;
    border: none;
    min-width: 30px;
    min-height: 30px;
    margin: 12px;
    background-color: hsl(120, 100%, 25%);
    transition: 1s;

    &:hover {
        background-color: hsl(120, 100%, 30%);
    }

    ${({ remove }) => remove && css`
        background: url(${deleteIcon}) center center no-repeat;
        background-size: 16px;
        background-color: hsl(0, 100%, 45%);
        transition: 1s;

        &:hover {
            background-color: hsl(0, 100%, 50%);
        }
    `}
`;
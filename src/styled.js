import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.main`
    max-width: ${({theme}) => theme.bodyWidth}px;
    margin: auto;
`;

export const Navigation = styled.nav`
    background-color: ${({ theme }) => theme.color.teal};
    margin-bottom: 50px;
`;

export const NavigationList = styled.ul`
    display: flex;
    justify-content: center;
    list-style-type: none;
    margin: 0;
`;

export const NavigationItem = styled.li`
    padding: 25px;
`;

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName: "active"
}))`
    text-decoration: none;
    color: white;

    &.active {
        font-weight: bold;
    }
`;
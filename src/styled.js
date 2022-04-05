import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName: "active"
}))`
    &.active {
        font-weight: bold;
    }
`;
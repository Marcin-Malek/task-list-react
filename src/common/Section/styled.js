import styled from "styled-components";

export const StyledSection = styled.section`
    margin-bottom: 10px;
`;

export const Header = styled.h2`
    display: flex;
    justify-content: space-between;
    background-color: white;
    margin: 0;
    margin-bottom: 2px;
    padding: 20px;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
        flex-direction: column;
    }
`;
import { StyledSection, Header, Content } from "./styled";

const Section = ({ title, content, extraHeaderContent }) => (
    <StyledSection>
        <Header>{title} {extraHeaderContent}</Header>
        <Content>{content}</Content>
    </StyledSection>
);

export default Section;
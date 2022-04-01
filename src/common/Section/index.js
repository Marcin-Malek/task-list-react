import { StyledSection, Header } from "./styled";

const Section = ({ title, content, extraHeaderContent }) => (
    <StyledSection>
        <Header>{title} {extraHeaderContent}</Header>
        {content}
    </StyledSection>
);

export default Section;
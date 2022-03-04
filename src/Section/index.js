import "./style.css";

const Section = ({ title, content, extraHeaderContent }) => (
    <section className="section">
        <h2 className="section__header">{title} {extraHeaderContent}</h2>
        {content}
    </section>
);

export default Section;
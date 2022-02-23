import "./style.css";

const Header = ({ title, extraHeaderContent }) => (
    <header className="header">
        <h2 className="header__content">{title}</h2>
        {extraHeaderContent}
    </header>
)

export default Header;
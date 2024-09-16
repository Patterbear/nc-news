import { Link } from "react-router-dom";
import WriteArticleButton from "./WriteArticleButton";

const Header = () => {
    return (
        <div id="header">
            <Link className="home-link" to="/"><h1>NC News</h1></Link>
            <WriteArticleButton />
        </div>
    );
}

export default Header;
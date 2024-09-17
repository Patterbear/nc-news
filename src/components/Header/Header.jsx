import logo from '../../assets/nc.png';
import { Link } from "react-router-dom";
import WriteArticleButton from "./WriteArticleButton";

const Header = () => {
    return (
        <div id="header">
            <img id="nc-logo" src={logo}/>
            <Link className="home-link" to="/"><h1>NC News</h1></Link>
            <WriteArticleButton />
        </div>
    );
}

export default Header;
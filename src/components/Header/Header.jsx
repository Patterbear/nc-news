import logo from '../../assets/nc.png';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div id="header">
            <img id="nc-logo" src={logo}/>
            <Link id="home-link" to="/"><h1>NC News</h1></Link>
        </div>
    );
}

export default Header;
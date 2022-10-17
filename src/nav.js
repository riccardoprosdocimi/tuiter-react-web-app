import {Link} from "react-router-dom";

const Nav = () => {
    return(
        <div>
            <Link to="/hello">Hello</Link> |
            <Link to="/">Labs</Link> |
            <Link to="/tuiter">Tuiter</Link>
        </div>
    );
}
export default Nav;
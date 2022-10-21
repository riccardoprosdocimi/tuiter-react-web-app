import {Link} from "react-router-dom";

const Nav = () => {
    return(
        <nav className="navbar navbar-expand">
            <div className="container-fluid">
                <div className="collapse navbar-collapse"
                     id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link">
                                <Link to="/hello">Hello</Link>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">
                                <Link to="/">Labs</Link>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">
                                <Link to="/tuiter/home">Tuiter</Link>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Nav;
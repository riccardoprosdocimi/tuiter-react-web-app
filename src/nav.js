import {Link} from "react-router-dom";

const Nav = () => {
    return(
        <nav className="navbar navbar-expand">
            <div className="container-fluid">
                <div className="collapse navbar-collapse"
                     id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <div className="nav-link">
                                <Link to="/">Labs</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link">
                                <Link to="/">Assignment 6</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link">
                                <Link to="/a7">Assignment 7</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link">
                                <Link to="/tuiter/home">Tuiter</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Nav;
import React from 'react';
import {Link} from 'react-router-dom';
import SignIn from "./layouts/SignIn";
import SignOut from "./layouts/SignOut";
function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <Link to='/' className="navbar-brand">Blog</Link>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact us</a>
                    </li>
                </ul>
                <SignIn/>
                <SignOut/>
            </div>
        </nav>
    );
}

export default Nav;

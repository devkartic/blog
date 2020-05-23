import React from 'react';
import {Link} from 'react-router-dom';
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
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                <div className="form-inline my-2 my-lg-0">
                    <Link to='/login' className="btn btn-outline-primary my-2 my-sm-0 ml-2" type="button">Login</Link>
                    <Link to='/register' className="btn btn-outline-primary my-2 my-sm-0 ml-2" type="button">Register</Link>
                </div>
            </div>
        </nav>
    );
}

export default Nav;

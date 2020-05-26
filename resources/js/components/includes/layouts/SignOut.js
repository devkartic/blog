import React from 'react';
import {Link} from "react-router-dom";

const SignOut = () => {
    return(
        <div className="form-inline my-2 my-lg-0">
            <Link to='/login' className="btn btn-outline-primary my-2 my-sm-0 ml-2" type="button">Login</Link>
            <Link to='/register' className="btn btn-outline-primary my-2 my-sm-0 ml-2" type="button">Register</Link>
        </div>
    );
}

export default SignOut;

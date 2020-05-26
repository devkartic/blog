import React from 'react';
import {Link} from "react-router-dom";

const SignIn = () => {
    return(
        <div className="form-inline my-2 my-lg-0">
            <Link to='/post-create' className="btn btn-outline-primary my-2 my-sm-0 ml-2" type="button">Post Create</Link>
            <Link to='/logout' className="btn btn-outline-warning my-2 my-sm-0 ml-2" type="button">Log Out</Link>
        </div>
    );
}

export default SignIn;

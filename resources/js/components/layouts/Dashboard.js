import React from 'react';
import {connect} from 'react-redux';
import Index from "./posts/Index";

class Dashboard extends React.Component{
    render(){
        // console.log(this.props);
        return(
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <Index/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
    }
}

export default connect(mapStateToProps)(Dashboard);

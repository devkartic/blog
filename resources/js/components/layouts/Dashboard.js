import React from 'react';
import {connect} from 'react-redux';

class Dashboard extends React.Component{
    render(){
        console.log(this.props);
        return(
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="card-header">Welcome to</div>
                            <div className="card-body">
                                <h1>Dashboard</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateProps = (state) => {
    return {
        user: state.auth.user
    }
}

export default connect(mapStateProps)(Dashboard);

import React from 'react';
import {connect} from 'react-redux';
import AddPost from "../../../store/actions/Post";

class Index extends React.Component{
    render(){
        // console.log(this.props);
        return(
            <div className="card">
                <div className="card-header">Welcome to</div>
                <div className="card-body">
                    <h1>Dashboard</h1>
                    <div className="card mt-3">
                        <div className="card-header">
                            Title
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Subtitle</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to
                                additional content.</p>
                            <a href="#" className="btn btn-primary">View Details</a>
                        </div>
                    </div>
                    <div className="card mt-3">
                        <div className="card-header">
                            Title
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Subtitle</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to
                                additional content.</p>
                            <a href="#" className="btn btn-primary">View Details</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts.posts,
    }
}

export default connect(mapStateToProps)(Index);

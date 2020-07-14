import React from 'react';
import {connect} from 'react-redux';
import {allPost, deletePost} from "../../../store/actions/Post";
import {Link} from "react-router-dom";

class Index extends React.Component{
    constructor(props) {
        super(props);
    }

    deletePost(id) {
        this.props.deletePost(id);
    }
/*
    componentDidMount() {
        this.props.allPost();
    }
*/

    render(){
        console.log(this.props);
        return(
            <div className="card">
                <div className="card-header">Welcome to</div>
                <div className="card-body">
                    <h1>Dashboard</h1>
                    {
                        this.props.posts.map((post)=>{
                            return (
                                <div className="card mt-3" key={post.id}>
                                    <div className="card-header">
                                        {post.title}
                                        <div className="btn-group float-right" role="group" aria-label="Basic example">
                                            <Link to={`/post-edit/${post.id}`} className="btn btn-warning mr-1" type="button">Edit</Link>
                                            <button type="button" onClick={() => this.deletePost(post.id)} className="btn btn-danger">Remove</button>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{post.subtitle}</h5>
                                        <p className="card-text"> {post.content} With supporting text below as a natural lead-in to
                                            additional content.</p>
                                        <a href="#" className="btn btn-primary">View Details</a>
                                    </div>
                                </div>
                            );
                        })
                    }
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

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => dispatch(deletePost(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Index);

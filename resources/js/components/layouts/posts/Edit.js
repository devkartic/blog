import React from 'react';
import {connect} from 'react-redux';
import {createPost} from "../../../store/actions/Post";

class Edit extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            subtitle: '',
            content: ''
        }
        this.onchangeHandler = this.onchangeHandler.bind(this)
        this.onsubmitHandler = this.onsubmitHandler.bind(this)
    }

    onsubmitHandler(event){
        event.preventDefault();
        // console.log(this.state);
        this.props.createPost(this.state);
        this.props.history.push('/');
    }

    onchangeHandler(event){
        this.setState({
            ...this.state, [event.target.name] : event.target.value
        });
    }

    render(){
        let post = this.props.match.params.id;
        console.log(post);
        return(
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="card-header">Edit Post</div>

                            <div className="card-body">
                                <form onSubmit={this.onsubmitHandler} method="POST" action="#">
                                    <div className="form-group row">
                                        <label htmlFor="title" className="col-md-4 col-form-label text-md-right">Title</label>

                                        <div className="col-md-6">
                                            <input id="title" type="text" className="form-control" name="title" onChange={this.onchangeHandler} value={this.state.title} required autoComplete="title" autoFocus />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="subtitle" className="col-md-4 col-form-label text-md-right">Subtitle</label>

                                        <div className="col-md-6">
                                            <input id="subtitle" type="text" className="form-control" name="subtitle" onChange={this.onchangeHandler} value={this.state.subtitle} required autoComplete="subtitle" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="content" className="col-md-4 col-form-label text-md-right">Content</label>

                                        <div className="col-md-6">
                                            <textarea id="content" className="form-control" name="content" onChange={this.onchangeHandler} value={this.state.content} required />
                                        </div>
                                    </div>

                                    <div className="form-group row mb-0">
                                        <div className="col-md-6 offset-md-4">
                                            <button type="submit" className="btn btn-primary">Update</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        post: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPost: (post) => dispatch(createPost(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Edit);

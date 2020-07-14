import React from 'react';
import {connect} from 'react-redux';
import {createPost, editPost, updatePost} from "../../../store/actions/Post";

class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            subtitle: '',
            content: '',
            edit: false
        }
    }

    onsubmitHandler(event) {
        event.preventDefault();
        // console.log(this.state);
        this.props.createPost(this.state);
        this.props.history.push('/');
    }

    onchangeHandler(event) {
        this.setState({
            ...this.state, [event.target.name]: event.target.value
        });
    }

    componentDidMount() {
        let post_id = this.props.match.params.id;
        if (typeof post_id !== 'undefined') {
            let post = this.props.editPost(post_id);
            this.setState({
                title: post.post.title,
                subtitle: post.post.subtitle,
                content: post.post.content
            })
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="card-header">Create Post</div>

                            <div className="card-body">
                                <form onSubmit={(e)=>this.onsubmitHandler(e)} method="POST" action="#">
                                    <div className="form-group row">
                                        <label htmlFor="title"
                                               className="col-md-4 col-form-label text-md-right">Title</label>

                                        <div className="col-md-6">
                                            <input id="title" type="text" className="form-control" name="title"
                                                   onChange={(e)=>this.onchangeHandler(e)} value={this.state.title} required
                                                   autoComplete="title" autoFocus/>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="subtitle"
                                               className="col-md-4 col-form-label text-md-right">Subtitle</label>

                                        <div className="col-md-6">
                                            <input id="subtitle" type="text" className="form-control" name="subtitle"
                                                   onChange={(e)=>this.onchangeHandler(e)} value={this.state.subtitle} required
                                                   autoComplete="subtitle"/>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="content"
                                               className="col-md-4 col-form-label text-md-right">Content</label>

                                        <div className="col-md-6">
                                            <textarea id="content" className="form-control" name="content"
                                                      onChange={(e)=>this.onchangeHandler(e)} value={this.state.content}
                                                      required/>
                                        </div>
                                    </div>

                                    <div className="form-group row mb-0">
                                        <div className="col-md-6 offset-md-4">
                                            <button type="submit" className="btn btn-primary">Submit</button>
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

const mapDispatchToProps = (dispatch) => {
    return {
        createPost: (post) => dispatch(createPost(post)),
        editPost: (id) => dispatch(editPost(id)),
        updatePost: (post, id) => dispatch(updatePost(post, id))
    }
}

export default connect(null, mapDispatchToProps)(Create);

import React from 'react';
import {connect} from 'react-redux';
import AddPost from "../../../store/actions/Post";

class Index extends React.Component{
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
        console.log(this.state);
    }

    onchangeHandler(event){
        this.setState({
            ...this.state, [event.target.name] : event.target.value
        });
    }

    render(){
        console.log(this.props);
        return(
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="card-header">Create Post</div>

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
    const id = 3
    return {
        addPost: (id) => dispatch(AddPost(id))
    }
}

export default connect(mapDispatchToProps)(Index);

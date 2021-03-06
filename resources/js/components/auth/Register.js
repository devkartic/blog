import React from 'react';

class Register extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        }
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
        return(
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="card-header">Register</div>

                            <div className="card-body">
                                <form onSubmit={(e)=>this.onsubmitHandler(e)} method="POST" action="#">

                                    <div className="form-group row">
                                        <label htmlFor="name" className="col-md-4 col-form-label text-md-right">Name</label>

                                        <div className="col-md-6">
                                            <input id="name" type="text" className="form-control" name="name" onChange={(e)=>this.onchangeHandler(e)} value={this.state.name} required autoComplete="name" autoFocus />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="email" className="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                                        <div className="col-md-6">
                                            <input id="email" type="email" className="form-control" name="email" onChange={(e)=>this.onchangeHandler(e)} value={this.state.email} required autoComplete="email" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>

                                        <div className="col-md-6">
                                            <input id="password" type="password" className="form-control" name="password" onChange={(e)=>this.onchangeHandler(e)} value={this.state.password} required autoComplete="new-password" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="password-confirm"
                                               className="col-md-4 col-form-label text-md-right">Confirm Password</label>

                                        <div className="col-md-6">
                                            <input id="password-confirm" type="password" className="form-control" name="password_confirmation" onChange={(e)=>this.onchangeHandler(e)} value={this.state.password} required autoComplete="new-password" />
                                        </div>
                                    </div>

                                    <div className="form-group row mb-0">
                                        <div className="col-md-6 offset-md-4">
                                            <button type="submit" className="btn btn-primary">Register</button>
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

export default Register;

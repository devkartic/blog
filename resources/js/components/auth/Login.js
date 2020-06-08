import React from 'react';

class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password: '',
            token:''
        }
        this.onchangeHandler = this.onchangeHandler.bind(this)
        this.onsubmitHandler = this.onsubmitHandler.bind(this)
    }

    onsubmitHandler(event){
        event.preventDefault();
        axios.post('http://127.0.0.1:8000/login', {
            email : this.state.email,
            password : this.state.password,
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        }).then(response=>{
            console.log(response.data);
        });
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
                            <div className="card-header">Login</div>

                            <div className="card-body">
                                <form onSubmit={this.onsubmitHandler} method="POST" action="#">

                                    <div className="form-group row">
                                        <label htmlFor="email" className="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                                        <div className="col-md-6">
                                            <input id="email" type="email" className="form-control" onChange={this.onchangeHandler} name="email" value={this.state.email} required autoComplete="email" autoFocus />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>
                                        <div className="col-md-6">
                                            <input id="password" type="password" className="form-control" onChange={this.onchangeHandler} name="password" value={this.state.password} required autoComplete="current-password" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <div className="col-md-6 offset-md-4">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" name="remember" id="remember" />
                                                <label className="form-check-label" htmlFor="remember">Remember Me</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group row mb-0">
                                        <div className="col-md-8 offset-md-4">
                                            <button type="submit" className="btn btn-primary">Login</button>
                                            <a className="btn btn-link" href="#">Forgot Your Password?</a>
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

export default Login;
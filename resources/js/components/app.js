import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
} from 'react-router-dom';
import Nav from './includes/Nav';
import Footer from "./includes/Footer";
import Login from "./auth/Login";
import Register from "./auth/Register";

class App extends React.Component{
    constructor(prop) {
        super(prop);
    }

    Login(){
        return <Login/>
    }

    Register(){
        return <Register/>
    }

    render() {
        return(
            <div className="container-fluid">
                <Nav/>
                <div className="row justify-content-center">
                    <Switch>
                        <Route path="/:id" children={this.Register()} />
                    </Switch>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<Router><App /></Router>, document.getElementById('app'));
}

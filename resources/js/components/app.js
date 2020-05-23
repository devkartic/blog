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
import Dashboard from "./layouts/Dashboard";

class App extends React.Component{
    constructor(prop) {
        super(prop);
    }
    render() {
        return(
            <div className="container-fluid">
                <Nav/>
                <div className="row justify-content-center">
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/" exact component={Dashboard} />
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

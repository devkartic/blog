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

import {createStore} from 'redux';
import rootReducer from "../store/reducers/rootReducer";
import {Provider} from "react-redux";
import Create from "./layouts/posts/Create";

const store = createStore(rootReducer);

class App extends React.Component{
    constructor(prop) {
        super(prop);
    }
    render() {
        return(
            <div className="container-fluid">
                <Nav/>
                <div className="row">
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/" exact component={Dashboard} />
                        <Route path="/post-create" exact component={Create} />
                    </Switch>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('app'));
}

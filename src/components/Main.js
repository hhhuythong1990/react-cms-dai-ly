import React from "react";
import ReactDOM from "react-dom";
import  { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from "react-redux";
import axios from "axios";

import * as actions from "./../dispatcher/actions/MainActions";

import Login from "./login/Login";
import Home from "./home/home";
import Home1 from "./home/home1";
import NotFound from "./home/notfound";
import PermissionIndex from "./permission/index";
import Nav from "./layout/Nav";
import routes from "./layout/Routes";

const PrivateRoute  = ({ component: Component, logedIn, ...rest }) => {
    return (
        <Route {...rest} render={ props => (        
            (logedIn !== null)?( <Component {...props}/>) : (<Redirect to={{ pathname: '/login' }}/>)
        )}/>
    )
}

class Main extends React.Component {
    componentWillMount() {
        let { statusLogin, onLogin } = this.props;
        onLogin(statusLogin.data);        
    }
    
    showContentMenu = (routes, login) => {
        var result = null;
		if(routes.length > 0){            
			result = routes.map((route, index) => {
				return (
					<PrivateRoute key={ index } path={ route.path } exact={ route.exact } component={ route.main } logedIn={ login } />
				)
			});
		}
		return result;
    }  
    
    
    render() {      
        let { login } = this.props;        

        return (            
            <Router>        
                <div>
                    { (login)?(<Nav/>): "" }
                    <Switch>
                        { this.showContentMenu(routes, login) }
                        <Route path="/login" component={ Login }/> 
                        <Route component={ NotFound }/>
                    </Switch>       
                </div>
            </Router>
        )
    }
}


const mapStateToProps = state => {
    return {
        login: state.login,
    }
}

const mapDispatchToProps = (dispatchEvent, props) => {
    return {
        onLogin: (username) => {
            dispatchEvent(actions.Login(username));
        }
    };
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Main);
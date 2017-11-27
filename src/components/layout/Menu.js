import React from "react";
import { connect } from "react-redux";
import { Route, NavLink, Link } from "react-router-dom";
import _ from "lodash";
import * as localStorages from "./../constant/LocalStorages";

const MenuLink = ({ label, to, activeWhenExact}) =>{
	return (
		<Route path={ to } exact={ activeWhenExact } children={ ({ match }) => {
			let active = match ? "active" : "";
			return (
				<li className={`${ active }`}>
					<Link className={ active } to={ to } >{ label }</Link>
				</li>
			)
		}} />
	)
}

class Menu extends React.Component {    
    
    showMenu = (menus) => {        
        
        let result = null;
        if(menus.length > 0){
            result = menus.map((subMenu, index) => {
                return (
                    <li key={ index } className={ index == 0 ? "active" : "" }>
                        <a>
                            { Object.keys(menus[index])[0] }<span className="fa arrow"></span>
                        </a>
                        <ul className="nav nav-second-level collapse">
                            { this.showSubMenu(subMenu, Object.keys(menus[index])[0]) }
                        </ul>
                    </li>
                );
            });
        }
        return result;
        
    }

    showSubMenu = (subMenus, name) => {
        let result = null;
        if(!_.isEmpty(subMenus)){
            let data = subMenus[ name ];
            result = data.map((menu, index) => {
                return (                    
                    <MenuLink key={ index } label={ menu.name } to={ menu.to } activeWhenExact={ menu.exact } />                   
                );
            });
        }
        
        return result;
    }
    render () {
        let { login } = this.props;
        return (
            <ul className="nav in" id="side-menu">
                { this.showMenu(login.menus) }
            </ul>
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
        
    };
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Menu);
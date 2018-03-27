import React, { Component } from 'react';
import Button from 'material-ui/FlatButton';
import menuBar from 'app/utils/menuBar.json';
import { NavLink } from 'react-router-dom';
function renderMenu(data) {
    if (data.submenu && data.submenu.length > 0) {
        let classMenu = "";
        if (data.submenu) {
            classMenu = "dropdown-submenu";
        }
        return (
            <li key={data.id} className={classMenu}>
                <NavLink to={data.link} data-toggle="dropdown">{data.name}</NavLink>
                <ul className="dropdown-menu">
                    {data.submenu.map(item => renderMenu(item))}
                </ul>
            </li>
        )
    }
    else return <li key={data.id}><NavLink to={data.link}>{data.name}</NavLink></li>
}
export default class Menu extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log("json...", menuBar);
        return (
            <div className="menu">
                <div className="menu-top">
                    {menuBar.map(e => renderMenu(e))}
                </div>
                <div className="menu-bottom row">
                    <div className="col-md-2">
                        <img className="logo" src="/images/logo.png" alt="logo" />
                    </div>
                    <div className="col-md-7">
                        <div className="search-box">
                            <input placeholder="Tìm kiếm trên LIZIDI" />
                        </div>
                        <div className="search-button">
                            <button><i className="material-icons">search</i></button>
                        </div>
                    </div>
                    <div className="col-md-1">
                        <div className="cart-button">
                        <button><i className="material-icons">shopping_cart</i></button>
                        </div>
                    </div>
                    <div className="col-md-2">

                    </div>
                </div>
            </div>
        )
    }
};

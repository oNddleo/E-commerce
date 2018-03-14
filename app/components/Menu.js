import React, { Component } from 'react';
import Button from 'material-ui/FlatButton';
export default class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <div className="menu-top">
                    <div className="menu-logo">
                        <h1>Logo</h1>
                    </div>
                    <div className="menu-search">
                        <input type="text" />
                    </div>
                    <div className="menu-cart">
                        <button className="btn btn-primary">Cart</button>
                    </div>
                </div>
                <div className="menu-bottom">
                    <Upload />
                </div>
            </div>
        )
    }
};

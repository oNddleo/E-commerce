import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, hasHistory, Layout } from 'react-router-dom';
import Product from './Product/Product'
import Menu from './Menu'
import Upload from './Upload'
var store = require('store');
export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                {/* <Router history={hasHistory}>
                    <Layout>
                        <Switch>
                            <Route exact path='/' />
                            <Route path='/roster' />
                            <Route path='/schedule' />
                            <Route render={function () {
                                return (<Menu />)
                            }} />
                            
                        </Switch>
                    </Layout>
                </Router> */}
                
                <Product />
                
            </Provider>
                )
            }
        };

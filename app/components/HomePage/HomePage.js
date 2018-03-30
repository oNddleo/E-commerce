import React, { Component } from 'react'
import CardMostPopular from './components/CardMostPopular';
export default class HomePage extends Component {
    render() {
        return (
            <div className="page">
                
                {/* <div className="lift-nav">
                    <div className=""></div>
                </div> */}
                <div className="page-content">
                    <CardMostPopular />
                </div>
                
                
            </div>

        )
    }
}

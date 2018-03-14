import React, { Component } from 'react';

export default class Rating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            star: ''
        }
    }
    render() {
        return (
            <div>
                {/* {for(let i = 0; i <this.state.star; i++){

                }
                    <span className="glyphicon glyphicon-star"></span>
                })} */}
            </div>
        )
    }
};

import React, { Component } from 'react'

export const Header = (props) => {
    if(props.all){
        return(
            <div className={"card-" + props.className + "-header"}>
                <h3 className={"card-" + props.className + "-title"}>{props.header}</h3>
                <a href={props.link} className="card-shop-all">
                    <span className="text">{props.text}</span>
                    <i className="material-icons">&#xE315;</i>
                </a>
            </div>
        )
    }
    else{
        return (
            <div className={"card-" + props.className + "-header"}>
                <h3 className={"card-" + props.className + "-title"}>{props.header}</h3>
            </div>
        )
    }
    
}
import React, { Component } from 'react'

export const Header = (props) => {
    return (
        <div className={"card-" + props.className + "-header"}>
            <h3 className={"card-" + props.className + "-title"}>{props.header}</h3>
        </div>
    )
}
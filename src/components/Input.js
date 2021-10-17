import React from "react";
import './Input.css';
import { Icon } from "@iconify/react"

const Input = (props) => {
    return (
    <div className="bg">
        <Icon icon={props.icon}/>
        <p>{props.children}</p>
    </div>
    )
}

export default Input;
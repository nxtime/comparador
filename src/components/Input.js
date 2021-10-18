import React, { useState, useEffect } from "react";
import './Input.css';
import { Icon } from "@iconify/react"
import { useHistory } from 'react-router-dom';

const Input = (props) => {
    const [inputValue, setInputValue] = useState();
    const history = useHistory();

    const inputHandler = (e) => {
        e.persist();
        setInputValue(e.target.value, (prevInput) => {
            return {...prevInput, }
        });
        console.log(inputValue);
    }
    
      const homeHandler = (e) => {
        if(props.id === "email") console.log("Logar email?");
        if(props.id === "facebook") console.log("Logar facebook?");
        if(props.id === "Enviar") {
            props.clickHandler();
        }
    }
    return (
    <div className="bg">
        {props.type === "text" || props.type ===  "password" || props.type ===  "email"
        ?
        <>
        {typeof props.icon !== "undefined" && <label htmlFor={props.id}><Icon icon={props.icon}/></label>}
        <input type={props.type} id={props.id} placeholder={props.children} onChange={inputHandler}/>
        </>
        : props.type === "button"
        &&
        <>
        {typeof props.icon !== "undefined" && <label htmlFor={props.id}><Icon icon={props.icon}/></label>}
        <input type={props.type} id={props.id} value={props.children} onClick={homeHandler}></input>
        </>}
    </div>
    )
}

export default Input;
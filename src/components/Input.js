import React from "react";
import './Input.css';
import { Icon } from "@iconify/react"
import { useHistory } from 'react-router-dom';

const Input = (props) => {
    const history = useHistory();
    const homeHandler = (e) => {
        if(props.id === "email") console.log("Logar email?");
        if(props.id === "facebook") console.log("Logar facebook?");
        if(props.id === "Enviar") {
            console.log("Cadastrando...");
            history.push("/");
        }
    }
    return (
    <div className="bg">
        {props.type === "type"
        ?
        <>
        {typeof props.icon !== "undefined" && <label htmlFor={props.id}><Icon icon={props.icon}/></label>}
        <input type={props.type} id={props.id} placeholder={props.children}/>
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
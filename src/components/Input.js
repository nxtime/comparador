import React from "react";
import "./Input.css";
import { Icon } from "@iconify/react";
import { useHistory } from "react-router-dom";
 
const Input = (props) => {
  let userInputValue = {
    id: props.id,
    value: "",
  };

  const history = useHistory();

  const inputHandler = (e) => {
    userInputValue.value = e.target.value;
    props.registration(userInputValue);
  };

  const homeHandler = (e) => {
    if (props.id === "email") history.push("/login");
    if (props.id === "facebook") console.log("Logar facebook?");
    if (props.id === "Enviar" || props.id === "ok") {
      props.clickHandler();
    }
    if (props.id === "Logar") {
      props.clickHandler();
    }
  };
  {
    if (
      props.type === "text" ||
      props.type === "password" ||
      props.type === "email"
    ) {
      return (
        <div className="bg">
          {typeof props.icon !== "undefined" && (
            <label htmlFor={props.id}>
              <Icon icon={props.icon} />
            </label>
          )}
          <input
            autoComplete="off"
            type={props.type}
            id={props.id}
            placeholder={props.children}
            onChange={inputHandler}
            maxLength="18"
          />
        </div>
      );
    } else {
      return (
        <div className="bg bg-secondary">
          {typeof props.icon !== "undefined" && (
            <label htmlFor={props.id}>
              <Icon icon={props.icon} />
            </label>
          )}
          <input
            type={props.type}
            id={props.id}
            value={props.children}
            onClick={homeHandler}
          ></input>
        </div>
      );
    }
  }
};

export default Input;

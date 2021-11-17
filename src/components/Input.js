import React from "react";
import "./Input.css";
import { Icon } from "@iconify/react";
import { useHistory } from "react-router-dom";
 
// Componente que faz a estilização dos elementos de input
const Input = (props) => {
  // Variável inicial para armazenar o que o usuário estará digitando
  let userInputValue = {
    id: props.id, // Chave que armazena o id do input que está sendo digitado
    value: "",
  };

  const history = useHistory();

  // Atualiza o valor que está sendo colocado na caixa, e manda-o para o que o chamou (parent)
  const inputHandler = (e) => {
    userInputValue.value = e.target.value;
    props.registration(userInputValue);
  };

  // Caso seja um botão o usuário será redirecionado de acordo com o id
  const homeHandler = (e) => {
    if (props.id === "email") history.push("/login");
    if (props.id === "facebook") console.log("Logar facebook?");
    if (props.id === "Enviar" || props.id === "ok") {
      props.clickHandler();
    }
    if (props.id === "Logar") {
      props.clickHandler();
    }
  }

    // Caso o input for do tipo "digitável" irá renderizar o seguinte
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
            onChange={inputHandler} // Assim que o value, do input mudar a função será chamada
            maxLength={props.type === "text" ? "24" : props.type === "password" ? "8" : "50"} // Definindo a quantidade máxima de caracteres de acordo com o tipo de input
          />
        </div>
      );
      // Caso o input não for do tipo "digitável" irá renderizar o seguinte
    } else {
      return (
        <div className="bg bg-secondary">
        {/* Caso não haja icones, <label> não será renderizado */}
          {typeof props.icon !== "undefined" && (
            <label htmlFor={props.id}>
              <Icon icon={props.icon} />
            </label>
          )}
          <input
            type={props.type}
            id={props.id}
            value={props.children}
            onClick={homeHandler} // Toda vez que for clicado irá executar a função
          ></input>
        </div>
      );
    }
};

export default Input;

import React from "react";
import Input from "./components/Input";
import loginAvatar from "./public/images/login-avatar.png";
import { useHistory } from "react-router";

const Signin = () => {
  const history = useHistory();
  const clickHandler = () => {
    history.push('/');
  }
  return (
    <div className="container">
      <div className="container-flex">
        <div className="card">
          <Input id="name" type="type" icon="bx:bxs-user">
            Nome completo
          </Input>
          <Input id="pw"type="type" icon="fa-solid:lock">
            Senha
          </Input>
          <Input id="cpw"type="type" icon="fa-solid:lock">
            Confirmar senha
          </Input>
          <Input id="email" type="type" icon="mdi:email">
            Email
          </Input>
          <Input type="button" id="Enviar">
            Enviar
          </Input>
          <p>
            Já tem uma conta? <em onClick={clickHandler}>Logar</em>
          </p>
        </div>
        <span></span>
        <div className="header">
          <h1 id="title">Pricing</h1>
          <div className="image">
            <img src={loginAvatar} alt="login-avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;

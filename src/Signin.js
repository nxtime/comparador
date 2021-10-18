import React from "react";
import Input from "./components/Input";
import loginAvatar from "./public/images/login-avatar.png";
import { useHistory } from "react-router";

const Signin = () => {
  let users = [{
    id: 0,
    name: "admin",
    pw: "1234",
    email: "admin@email.com"
  }]
  let newUser = {};
  const newUserReg = (user) =>{
    newUser[user.id] = user.value;
    // console.log(newUser);
  }

  const newReg = (e) => {
    users.push(newUser);
    homePageHandler();
    console.log(users);
  }

  const history = useHistory();

  const homePageHandler = () => {
    history.push('/');
  }
  return (
    <div className="container">
      <div className="container-flex">
        <div className="card">
          <Input registration={newUserReg} id="name" type="text" icon="bx:bxs-user">
            Nome completo
          </Input>
          <Input registration={newUserReg} id="pw"type="password" icon="fa-solid:lock">
            Senha
          </Input>
          <Input registration={newUserReg} id="cpw"type="password" icon="fa-solid:lock">
            Confirmar senha
          </Input>
          <Input registration={newUserReg} id="email" type="email" icon="mdi:email">
            Email
          </Input>
          <Input type="button" id="Enviar" clickHandler={newReg}>
            Enviar
          </Input>
          <p>
            Já tem uma conta? <em onClick={homePageHandler}>Logar</em>
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

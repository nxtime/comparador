import React, { useState } from "react";
import Input from "./components/Input";
import loginAvatar from "./public/images/login-avatar.png";
import { useHistory } from "react-router";
import Popup from "./components/UI/Popup";

const Signin = (props) => {
  let users = props.users;
  let [newUser, setNewUser] = useState({});
  let [isPopup, setIsPopup] = useState(false);

  const newUserReg = (user) => {
    setNewUser({
      id: users.length,
      ...newUser,
      [user.id]: user.value,
    });
  };

  const newReg = () => {
    if (newUser.pw !== newUser.cpw) {
      setIsPopup(() => true);
    } else {
      const spaceIndex = newUser.name.trim().indexOf(" ");
      let formattedName = newUser.name.trim().toLowerCase();
      formattedName = formattedName.charAt(0).toUpperCase() + formattedName.slice(1);
      newUser.name = formattedName;
      if(spaceIndex !== -1) {
        formattedName = formattedName.slice(0, spaceIndex);
      }
      newUser = {
        ...newUser,
        key: Math.random()*0.821,
        singleName: formattedName
      }
      props.addUser(newUser);
      homePageHandler();
    }
  };

  const closePopup = () => {
    setIsPopup(() => false);
  }

  const history = useHistory();

  const homePageHandler = () => {
    history.push("/");
  };
  return (
    <>
      {isPopup && (
        <Popup clickHandler={closePopup}>Senhas não coincidem</Popup>
      )}
      <div className="container">
        <div className="container-flex">
          <div className="card">
            <Input
              registration={newUserReg}
              id="name"
              type="text"
              icon="bx:bxs-user"
            >
              Nome completo
            </Input>
            <Input
              registration={newUserReg}
              id="pw"
              type="password"
              icon="fa-solid:lock"
            >
              Senha
            </Input>
            <Input
              registration={newUserReg}
              id="cpw"
              type="password"
              icon="fa-solid:lock"
            >
              Confirmar senha
            </Input>
            <Input
              registration={newUserReg}
              id="email"
              type="email"
              icon="mdi:email"
            >
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
    </>
  );
};

export default Signin;

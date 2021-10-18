import React from "react";
import Input from "./components/Input";
import loginAvatar from "./public/images/login-avatar.png";
import { useHistory } from "react-router";

const Home = () => {
  const history = useHistory();
  const clickHandler = () => {
    history.push('/signin');
  }
  return (
    <div className="container">
      <div className="container-flex">
        <div className="header">
          <h1 id="title">Pricing</h1>
          <div className="image">
            <img src={loginAvatar} alt="login-avatar" />
          </div>
        </div>
        <span></span>
        <div className="card">
          <Input id="email" type="button" icon="mdi:email">
            Logar com email
          </Input>
          <Input id="facebook" type="button" icon="brandico:facebook-rect">
            Logar com facebook
          </Input>
          <p>
            Não tem uma conta? <em onClick={clickHandler}>Cadastre-se</em>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

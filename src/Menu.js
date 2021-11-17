import React, { useState } from "react";
import "./Menu.css";
import Input from "./components/Input";
import { Icon } from "@iconify/react";

// Componente menu, para a página inicial, onde o usuário poderá navegar onde quiser
const Menu = ({ user }) => {
  user = user[0];
  // Variável do useState armazenando o id (página) em que o usuário está, e colocando o distanciamento necessário
  let [activeMenu, setActiveMenu] = useState({ id: "home", paddingLeft: "0" });

  // Atualiza a variavel activeMenu, assim que o usuário clicar em um dos items na navbar
  const updateActive = (e) => {
    let size = window.innerWidth / 5;
    let itemId = e.target.id;
    let paddingLeft =
      itemId === "search"
        ? "75px"
        : itemId === "list"
        ? "250px"
        : itemId === "user"
        ? "325px"
        : "0";
    setActiveMenu({ id: e.target.id, paddingLeft: paddingLeft });
  };

  // Começa a fazer a renderização da página
  return (
    <div className="interface">
      {/* Começa a navbar */}
      <nav className="navbar">
        <div
          className="movable-navbar"
          style={{
            // paddingLeft: activeMenu.paddingLeft,
            minWidth: "405px",
          }}
        >
          <div
            className="prev-item"
            style={{
              transform: "translateX(" + activeMenu.paddingLeft + ")",
            }}
          ></div>
          <div
            className="next-item"
            style={{
              transform: "translateX(" + activeMenu.paddingLeft + ")",
            }}
          ></div>
          <div
            className="current-item"
            style={{
              transform: "translateX(" + activeMenu.paddingLeft + ")",
            }}
          ></div>
        </div>
        <ul className="navbar-items">
          <li
            id="home"
            className={
              activeMenu.id === "home" ? "navbar-item active" : "navbar-item"
            }
            onClick={updateActive}
          >
            <Icon icon="ant-design:home-filled" />
          </li>
          <li
            id="search"
            className={
              activeMenu.id === "search" ? "navbar-item active" : "navbar-item"
            }
            onClick={updateActive}
          >
            <Icon icon="akar-icons:search" />
          </li>
          <li id="more" className="navbar-item navbar-item-circle">
            <Icon icon="akar-icons:plus" />
          </li>
          <li
            id="list"
            className={
              activeMenu.id === "list" ? "navbar-item active" : "navbar-item"
            }
            onClick={updateActive}
          >
            <Icon icon="gg:notes" />
          </li>
          <li
            id="user"
            className={
              activeMenu.id === "user" ? "navbar-item active" : "navbar-item"
            }
            onClick={updateActive}
          >
            <Icon icon="bx:bxs-user" />
          </li>
        </ul>
      </nav>
      {/* Começa onde deve estar os items da parte superior, Mercados */}
      {activeMenu.id === "home" ? (
        <>
          <header>
            <h1 className="title">
              Olá<em>{user.singleName}</em>
            </h1>
            <div className="card">
              <ul className="item-group">
                <li className="item mercado-1">Extra</li>
                <li className="item mercado-2">Carrefour</li>
                <li className="item mercado-3">Lopes</li>
                <li className="item mercado-4">Walmart</li>
              </ul>
            </div>
            <div className="mercados">
              <Input id="mercados" type="button">
                Mercados Próximos
              </Input>
            </div>
          </header>
        </>
      ) : activeMenu.id === "search" ? (
        <>
          <div className="header search">
            <Input id="search-bar" type="text" icon="akar-icons:search">
              Pesquisar
            </Input>
          </div>
        </>
      ) : activeMenu.id === "list" ? (
        <>
          <div className="header list">
            <Input id="list-add-bar" type="text">
              Adicionar
            </Input>
            <Input
              classname="list-add-button"
              type="button"
              icon="akar-icons:plus"
            ></Input>
          </div>
        </>
      ) : (
        activeMenu.id === "user" && (
          <>
            <header className="user">
              <h1 className="title">
                Olá<em>{user.singleName}</em>
              </h1>
              <div className="card"></div>
              <div className="user-container">
                <div className="user-container-item">
                  <div className="item-text">Configurações</div>
                </div>
                <span className="item-spacer"></span>
                <div className="user-container-item">
                  <div className="item-text">Localização</div>
                </div>
                <span className="item-spacer"></span>
                <div className="user-container-item">
                  <div className="item-text">Desconectar</div>
                </div>
              </div>
            </header>
          </>
        )
      )}
    </div>
  );
};

export default Menu;

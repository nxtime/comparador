import React, { useState } from "react";
import Input from "./components/Input";
import loginAvatar from "./public/images/login-avatar.png";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Popup from "./components/UI/Popup";
import { motion, AnimatePresence } from "framer-motion";
import "./Signin.css";

const Signin = (props) => {
  // if(props.containerSize.edited === false) {
  //   props.updateContainerSize({height: "500px", edited: true})
  // }

  const variants = {
    hidden: {
      x: -400,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  let users = props.users;
  let [newUser, setNewUser] = useState({
    name: "",
    singleName: "",
    pw: "",
    cpw: "",
    email: "",
  });

  const transition = {
    duration: 0.35,
    type: "spring",
    damping: 20,
    stiffness: 225,
  };

  let [isPopup, setIsPopup] = useState({ state: false, popupText: "" });

  const newUserReg = (user) => {
    setNewUser({
      id: users.length,
      ...newUser,
      [user.id]: user.value,
    });
  };

  const newReg = () => {
    if (newUser.pw !== newUser.cpw) {
      setIsPopup((prevValue) => {
        return { ...prevValue, state: true, popupText: "Senhas não coincidem" };
      });
    } else {
      const spaceIndex = newUser.name.trim().indexOf(" ");
      newUser.email = newUser.email.trim().toLowerCase();
      let formattedName = newUser.name.trim().toLowerCase();
      formattedName =
        formattedName.charAt(0).toUpperCase() + formattedName.slice(1);
      newUser.name = formattedName;

      if (spaceIndex !== -1) {
        formattedName = formattedName.slice(0, spaceIndex);
      }
      newUser = {
        ...newUser,
        key: Math.random() * 0.821,
        singleName: formattedName,
      };
      if (newUser.name === "" || newUser.email === "" || newUser.pw === "") {
        setIsPopup((prevValue) => {
          return {
            ...prevValue,
            state: true,
            popupText: "Preencha todos os campos",
          };
        });
      } else {
        setIsPopup((prevValue) => {
          return {
            ...prevValue,
            state: true,
            popupText: "Usuário criado com sucesso",
            criarUsuario: true,
          };
        });
        props.addUser(newUser);
        homePageHandler();
      }
    }
  };

  const closePopup = () => {
    setIsPopup(() => false);
  };

  const history = useHistory();

  const homePageHandler = () => {
    history.push("/");
  };

  return (
    <>
      <AnimatePresence>
        {isPopup.state && (
          <Popup clickHandler={closePopup}>{isPopup.popupText}</Popup>
        )}
      </AnimatePresence>
      <motion.div
        className="container signin"
        exit={{
          opacity: 0,
        }}
        transition={transition}
      >
        <motion.div
          className="container-flex"
          animate={{
            height: ["256px", "500px"],
          }}
          exit={{
            height: "256px",
          }}
          transition={transition}
        >
          <div className="card">
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ ...transition, delay: 0.125 }}
              whileHover={{
                x: 20,
                transition: { ...transition },
              }}
            >
              <Input
                registration={newUserReg}
                id="name"
                type="text"
                icon="bx:bxs-user"
              >
                Nome completo
              </Input>
            </motion.div>
            {newUser.name.length === 24 && (
              <p
                style={{
                  textAlign: "center",
                  fontSize: "10pt",
                  margin: "-20px auto",
                }}
              >
                Você só pode digitar até 24 carácteres
              </p>
            )}
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ ...transition, delay: 0.25 }}
              whileHover={{
                x: 20,
                transition: { ...transition },
              }}
            >
              <Input
                registration={newUserReg}
                id="pw"
                type="password"
                icon="fa-solid:lock"
              >
                Senha
              </Input>
            </motion.div>
            {newUser.pw.includes(" ") ? (
              <p
                style={{
                  textAlign: "center",
                  fontSize: "10pt",
                  margin: "-20px auto",
                }}
              >
                Não use espaço na sua senha
              </p>
            ) : (
              newUser.pw.length >= 4 && newUser.pw.length < 8 ? (
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "10pt",
                    margin: "-20px auto",
                  }}
                >
                  Senha deve ter 8 carácteres
                </p>
              ) :       
              newUser.pw.length >= 4 && newUser.pw !== newUser.cpw && (
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "10pt",
                    margin: "-20px auto",
                  }}
                >
                  Senhas não coincidem
                </p>
              )
            )}
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ ...transition, delay: 0.375 }}
              whileHover={{
                x: 20,
                transition: { ...transition },
              }}
            >
              <Input
                registration={newUserReg}
                id="cpw"
                type="password"
                icon="fa-solid:lock"
              >
                Confirmar senha
              </Input>
            </motion.div>

            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ ...transition, delay: 0.625 }}
              whileHover={{
                x: 20,
                transition: { ...transition },
              }}
            >
              <Input
                registration={newUserReg}
                id="email"
                type="email"
                icon="mdi:email"
              >
                Email
              </Input>
            </motion.div>

            {newUser.email.length > 5 && !newUser.email.includes("@") && (
              <p
                style={{
                  textAlign: "center",
                  fontSize: "10pt",
                  margin: "-20px auto",
                }}
              >
                Digite um email valido
              </p>
            )}
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ ...transition, delay: 0.75 }}
              whileHover={{
                x: 20,
                transition: { ...transition },
              }}
            >
              <Input
                type="button"
                id="Enviar"
                clickHandler={newReg}
                variants={variants}
              >
                Enviar
              </Input>
            </motion.div>
            <p>
              Já tem uma conta?
              <Link to={`/`}>
                <em>Logar</em>
              </Link>
            </p>
          </div>
          <motion.span
            animate={{
              height: window.innerWidth > 800 ? ["16rem", "32rem"] : 0,
            }}
            transition={{ ...transition, damping: 10, stiffness: 100 }}
          ></motion.span>
          <div className="header">
            <motion.h1
              initial={{
                x: 400,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                delay: 0,
                type: "spring",
                damping: 25,
                stiffness: 200,
              }}
              id="title"
            >
              Pricing
            </motion.h1>
            <div className="image">
              <motion.img
                initial={{
                  x: 400,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 0.5,
                }}
                transition={{
                  delay: 0.25,
                  type: "spring",
                  damping: 20,
                  stiffness: 175,
                }}
                src={loginAvatar}
                alt="login-avatar"
                draggable="false"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Signin;

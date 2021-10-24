import React, { useState } from "react";
import Input from "./components/Input";
import loginAvatar from "./public/images/login-avatar.png";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Popup from "./components/UI/Popup";
import { motion, AnimatePresence } from "framer-motion";

const Signin = ({ users }) => {
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

  let [userInput, setUserInput] = useState({
    email: "",
    pw: "",
  });

  const transition = {
    duration: 0.35,
    type: "spring",
    damping: 20,
    stiffness: 225,
  };

  let [isPopup, setIsPopup] = useState({ state: false, popupText: "" });

  const newUserInput = (user) => {
    setUserInput({
      id: users.length,
      ...userInput,
      [user.id]: user.value,
    });
  };

  const findLogin = () => {
    if (userInput.email === "" || userInput.pw === "") { // Checar se o input está vazio
      setIsPopup((prevValue) => {
        return {
          ...prevValue,
          state: true,
          popupText: "Preencha todos os campos",
        };
      });
    } else {
      userInput.email = userInput.email.trim().toLowerCase();
      let findUser = users.filter((e) => e.email === userInput.email); // Checar se tem o email na db
      if (findUser.length !== 0) {
        if (findUser[0].pw === userInput.pw) { // Checar se a senha coincide com a db
          setIsPopup((prevValue) => { // Define valores do popup
            return {
              ...prevValue,
              state: true,
              popupText: "Login com sucesso",
            };
          });
        } else {
          setIsPopup((prevValue) => { // Define valores do popup
            return {
              ...prevValue,
              state: true,
              popupText: "Senha incorreta",
            };
          });
        }
      } else {
        setIsPopup((prevValue) => { // Define valores do popup
          return {
            ...prevValue,
            state: true,
            popupText: "Email não encontrado",
          };
        });
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
        className="container"
        exit={{
          opacity: 0,
        }}
        transition={transition}
      >
        <motion.div
          className="container-flex"
          animate={{
            height: ["256px", "360px"],
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
                registration={newUserInput}
                id="email"
                type="email"
                icon="mdi:email"
                variants={variants}
                initial="hidden"
                animate="visible"
              >
                Email
              </Input>
            </motion.div>
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
                registration={newUserInput}
                id="pw"
                type="password"
                icon="fa-solid:lock"
              >
                Senha
              </Input>
            </motion.div>
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
                type="button"
                id="Enviar"
                clickHandler={findLogin}
                variants={variants}
                initial="hidden"
                animate="visible"
              >
                Logar
              </Input>
            </motion.div>
            <p>
              Quer tentar com outra conta?
              <Link to={`/`}>
                <em>Voltar</em>
              </Link>
            </p>
          </div>
          <motion.span
            animate={{
              height: window.innerWidth > 800 ? ["16rem", "24rem"] : 0,
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
              className="signin"
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

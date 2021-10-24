import React from "react";
import Input from "./components/Input";
import loginAvatar from "./public/images/login-avatar.png";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const transition = {
    duration: 0.35,
    type: "spring",
    damping: 17.5,
    stiffness: 225,
  };

  const variants = {
    hidden: {
      x: 400,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  const history = useHistory();
  const clickHandler = () => {
    history.push("/login");
  };
  return (
    <motion.div
      className="container"
      exit={{
        opacity: 0,
      }}
    >
      <motion.div
        className="container-flex"
        animate={{
          height: window.innerWidth > 800 ? ["500px", "256px"] : "auto",
        }}
        transition={transition}
      >
        <div className="header">
          <motion.h1
            initial={{
              x: -400,
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
                x: -400,
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
        <motion.span
          animate={{
            height: window.innerWidth > 800 ? ["32rem", "16rem"] : 0,
          }}
          transition={transition}
        ></motion.span>
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
            <Input id="email" type="button" icon="mdi:email">
              Logar com email
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
            <Input id="facebook" type="button" icon="brandico:facebook-rect">
              Logar com facebook
            </Input>
          </motion.div>
          {/* onClick={clickHandler} */}
          <p>
            Não tem uma conta?
            <Link to={`/Signin`}>
              <em>Cadastre-se</em>
            </Link>
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;

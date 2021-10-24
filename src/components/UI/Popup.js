import React from "react";
import "./Popup.css";
import Input from "../Input";
import { motion } from "framer-motion";

const Popup = (props) => {
  const closePopup = () => {
    props.clickHandler();
  };
  const transition = {
    duration: 1.25,
    type: "spring",
    damping: 17.5,
    stiffness: 225
  }
  return (
    <motion.div className="popup"
    animate={{
      backgroundColor: ["#00000000", "#00000040"],
      transition: {...transition, duration: .5}
    }}
    exit={{
      backgroundColor: "#00000000",
      duration: 0.1
    }}>
      <motion.div
      initial={{
        y: -100,
      }}
        animate={{
          y: 20,
          type: "spring"
        }}
        exit={{
          y: -250,
          duration: .25
        }}
        transition={transition}
        className="popup-card"
      >
        <p>{props.children}</p>
        <Input type="button" id="ok" clickHandler={closePopup}>
          Ok
        </Input>
      </motion.div>
    </motion.div>
  );
};

export default Popup;

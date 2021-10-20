import React from "react";
import "./Popup.css"
import Input from "../Input";

const Popup = (props) => {
    const closePopup = () => {
        props.clickHandler();
    }
  return (
    <div className="popup">
      <div className="popup-card">
        <p>{props.children}</p>
        <Input type="button" id="ok" clickHandler={closePopup}>Ok</Input>
      </div>
    </div>
  );
};

export default Popup;

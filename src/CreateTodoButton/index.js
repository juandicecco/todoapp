import React from "react";
import "./CreateTodoButton.css";

export default function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal(!props.openModal);
    // props.setOpenModal((prevState) => !prevState);
  };

  return (
    <button className="CreateTodoButton" onClick={onClickButton}>
      +
    </button>
  );
}

import React from "react";
import "./CreateTodoButton.css";

export default function CreateTodoButton() {
  const onClickButton = (msg) => alert(msg);

  return (
    <button
      className="CreateTodoButton"
      onClick={() => onClickButton("Aqui se abre el modal")}
    >
      +
    </button>
  );
}

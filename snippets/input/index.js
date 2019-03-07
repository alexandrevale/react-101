import React from "react";
import ReactDOM from "react-dom";

function Input({
  callback,
  type = "text",
  disabled = false,
  readOnly = false,
  placeholder = ""
}) {

  return (
    <input
      type={type}
      disabled={disabled}
      readOnly={readOnly}
      placeholder={placeholder}
      onChange={({ target: { value } }) => callback(value)}
    />
  );
}

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Input
    type="email"
    placeholder="Seu melhor e-mail"
    callback={val => console.log(val)}
  />,
  rootElement
);
import React from "react";
import ReactDOM from "react-dom";

function Mailto({ email, subject, body, ...props }) {
  return (
    <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
      {props.children}
    </a>
  );
}

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Mailto
    email="vale.apv@gmail.com"
    subject="Olá! Dev, tudo bem?"
    body="Gostaria de solicitar um orçamento para uma loja virtual."
  >
    Enviar e-mail
  </Mailto>,
  rootElement
);

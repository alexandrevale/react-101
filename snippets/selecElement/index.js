import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Select({
  values,
  callback,
  disabled = false,
  readonly = false,
  selected,
  id
}) {
  return (
    <select
      id={id}
      disabled={disabled}
      readOnly={readonly}
      onChange={({ target: { value } }) => callback(value)}
    >
      {values.map(([value, text]) => (
        <option selected={selected === value} value={value}>
          {text}
        </option>
      ))}
    </select>
  );
}

const rootElement = document.getElementById("root");

let choices = [["Manhã", "Manhã"], ["Tarde", "Tarde"], ["Noite", "Noite"]];

ReactDOM.render(
  <div>
    <label htmlFor="periodo">Selecione o Período </label>

    <Select
      id="periodo"
      values={choices}
      selected="Manhã"
      callback={val => console.log(val)}
    />
  </div>,
  rootElement
);

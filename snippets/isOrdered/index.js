import React from "react";
import ReactDOM from "react-dom";

function DataList({ isOrdered, data }) {
  const list = data.map((val, i) => (
    <li key={`${i}`}>
      <a href={`${val[1]}`}>{val[0]}</a>
    </li>
  ));

  return isOrdered ? <ol>{list}</ol> : <ul>{list}</ul>;
}

const rootElement = document.getElementById("root");

const tech = [
  ["GitHub", "https://github.com/alexandrevale"],
  ["CodePen", "https://codepen.io/alexandrevale"],
  ["CodeSandbox", "https://codesandbox.io/u/alexandrevale"],
  ["LinkedIn", "https://www.linkedin.com/in/alexandredovale/"]
];

ReactDOM.render(
  <div>
    <DataList data={tech} />
    <DataList data={tech} isOrdered />,
  </div>,
  rootElement
);

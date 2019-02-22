import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function TabItem(props) {
  return <div {...props} />;
}

function Tabs(props) {
  const [bindIndex, setBindIndex] = React.useState(props.defaultIndex);
  const changeTab = newIndex => {
    if (typeof props.onTabClick === "function") props.onTabClick(newIndex);
    setBindIndex(newIndex);
  };
  const items = props.children.filter(item => item.type.name === "TabItem");

  return (
    <div className="wrapper">
      <div className="tab-menu">
        {items.map(({ props: { index, label } }) => (
          <button
            onClick={() => changeTab(index)}
            className={bindIndex === index ? "focus" : ""}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="tab-view">
        {items.map(({ props }) => (
          <div
            {...props}
            className="tab-view_item"
            key={props.index}
            style={{ display: bindIndex === props.index ? "block" : "none" }}
          />
        ))}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Tabs defaultIndex="1" onTabClick={console.log}>
    <TabItem label="Contato" index="1">
      <h1>Contato</h1>
    </TabItem>
    <TabItem label="Trabalhe Conosco" index="2">
      <h1>Trabalhe Conosco</h1>
    </TabItem>
  </Tabs>,
  rootElement
);

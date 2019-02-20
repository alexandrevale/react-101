import React from "react";
import ReactDOM from "react-dom";

function Collapse(props) {
  const [isCollapsed, setIsCollapsed] = React.useState(props.collapsed);

  return (
    <div>
      <button
        style={style.buttonStyle}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? "Show" : "Hide"} content
      </button>
      <div
        className="collapse-content"
        style={isCollapsed ? style.collapsed : style.expanded}
        aria-expanded={isCollapsed}
      >
        {props.children}
      </div>
    </div>
  );
}

const style = {
  collapsed: {
    transition: "all 0.1s ease",
    height: "200px",
    opacity: "0"
  },
  expanded: {
    transition: "all 0.5s ease",
    height: "0px",
    opacity: "1"
  },
  buttonStyle: {
    display: "block",
    width: "100%"
  }
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Collapse>
    <h1>MENU</h1>
  </Collapse>,
  rootElement
);
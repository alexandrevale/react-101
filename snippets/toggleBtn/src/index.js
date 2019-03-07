import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function Toggle(props) {
  const [isToggleOn, setIsToggleOn] = React.useState(false);
  const styles = {
    on: {
      backgroundColor: "#2ecc71"
    },
    off: {
      backgroundColor: "#e74c3c"
    }
  };

  return (
    <button
      className="btn"
      onClick={() => setIsToggleOn(!isToggleOn)}
      style={isToggleOn ? styles.on : styles.off}
    >
      {isToggleOn ? "ON" : "OFF"}
    </button>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Toggle />, rootElement);

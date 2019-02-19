import React from "react";
import ReactDOM from "react-dom";

function PasswordRevealer({ value }) {
  
  const [shown, setShown] = React.useState(false);

  return (
    <div>
      <input
        type={shown ? "text" : "password"}
        value={value}
        onChange={() => {}}
      />
      <button
        onClick={() => setShown(!shown)}
        style={{ cursor: "pointer", background: "transparent", border: "none" }}
      >
        <i class="fas fa-key" />
      </button>
    </div>
  );
}

const rootElement = document.getElementById("root");

ReactDOM.render(<PasswordRevealer />, rootElement);

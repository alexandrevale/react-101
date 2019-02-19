import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function LimitedTextarea({ rows, cols, value, limit }) {
  const [content, setContent] = React.useState(value);

  const setFormattedContent = text => {
    text.length > limit ? setContent(text.slice(0, limit)) : setContent(text);
  };

  React.useEffect(() => {
    setFormattedContent(content);
  }, []);

  return (
    <div>
      <h1>LimitedTextarea</h1>
      <textarea
        className="comment"
        rows={rows}
        cols={cols}
        onChange={event => setFormattedContent(event.target.value)}
        value={content}
      />
      <p className="limit">
        {content.length}/{limit}
      </p>
    </div>
  );
}

ReactDOM.render(
  <LimitedTextarea limit={280} value="Faça um comentário" />,
  document.getElementById("root")
);

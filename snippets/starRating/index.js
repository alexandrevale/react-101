import React from "react";
import ReactDOM from "react-dom";

function Star({ marked, starId }) {
  return (
    <span
      star-id={starId}
      style={{ color: "#ff9933", cursor: "pointer", fontSize: "50px" }}
      role="button"
    >
      {marked ? "\u2605" : "\u2606"}
    </span>
  );
}

function StarRating(props) {
  const [rating, setRating] = React.useState(
    typeof props.rating == "number" ? props.rating : 0
  );

  const [selection, setSelection] = React.useState(0);

  const hoverOver = event => {
    let val = 0;
    if (event && event.target && event.target.getAttribute("star-id"))
      val = event.target.getAttribute("star-id");
    setSelection(val);
  };

  return (
    <div
      onMouseOut={() => hoverOver(null)}
      onClick={() =>
        setRating(event.target.getAttribute("star-id") || this.state.rating)
      }
      onMouseOver={hoverOver}
    >
      {Array.from({ length: 5 }, (v, i) => (
        <Star
          starId={i + 1}
          key={`star_${i + 1} `}
          marked={selection ? selection >= i + 1 : rating >= i + 1}
        />
      ))}
    </div>
  );
}

const rootElement = document.getElementById("root");

ReactDOM.render(<StarRating rating={3} />, rootElement);

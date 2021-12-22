import React from "react";

const Button = ({ handleClick, color, text }) => {
  return (
    <div>
      <button
        style={{ backgroundColor: color }}
        className="btn"
        onClick={handleClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;

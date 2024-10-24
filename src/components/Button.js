import React from "react";

const Button = (props) => {
  return (
    <div
      className={props.className}
      onClick={props.onClick ? props.onClick : () => {}}
    >
      {props.children}
    </div>
  );
};

export default Button;

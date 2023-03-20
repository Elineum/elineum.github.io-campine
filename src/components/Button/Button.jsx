import React from "react";
import "./Button.scss";

export const Button = React.memo(
  ({ children, transparent = false, form = false }) => {
    return (
      <button
        className={`button ${transparent ? "button_transparent" : ""} ${
          form ? "button_form" : ""
        }`}
      >
        {children}
      </button>
    );
  }
);

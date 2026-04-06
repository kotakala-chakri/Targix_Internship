import React, { useContext } from "react";
import { AppContext } from "./ContextApi";
export const ThemeToggle = () => {
  const { dispatch } = useContext(AppContext);

  return (
    <button
      onClick={() => dispatch({ type: "TOGGLE_THEME" })}
      style={{
        color: "black",
        backgroundColor: "yellow",
        marginBottom: "20px",
        padding: "10px",
        cursor: "pointer",
      }}
    >
      Toggle Theme
    </button>
  );
};

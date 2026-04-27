import { useReducer } from "react";
import { AppContext } from "./ContextApi";
const initialState = {
  count: 0,
  darkMode: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };

    case "DECREMENT":
      return { ...state, count: state.count - 1 };

    case "RESET":
      return { ...state, count: 0 };

    case "TOGGLE_THEME":
      return { ...state, darkMode: !state.darkMode };

    default:
      return state;
  }
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <AppContext.Provider value={{ state, dispatch }}>
    {children}
  </AppContext.Provider>;
};

import { createContext, useReducer, useEffect } from "react";
import Cookies from "js-cookie";
export const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: action.payload };
    case "AUTH_IS_READY":
      return { ...state, authIsReady: true, user: action.payload };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false,
  });

  // console.log("state:", state);
  useEffect(() => {
    // look for the token in the cookies, if it exists the session is still on going
    // so set the user here
    let token = Cookies.get("token");
    if (token) {
      // user exists
      dispatch({ type: "AUTH_IS_READY", payload: token });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

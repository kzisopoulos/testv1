import { AuthContext } from "../context/authContext";
import { useContext } from "react";

export const useAuthContext = () => {
  const context: any = useContext(AuthContext);

  if (!context) {
    throw Error("You are trying tou use authContext outside of its provider");
  }

  return context;
};

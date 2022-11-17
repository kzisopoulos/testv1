import { useEffect, useState } from "react";
import { useAuthContext } from "./useAuthContext";
import Cookies from "js-cookie";

export const useLogout = () => {
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [isCancelled, setIsCancelled] = useState<boolean>(false);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setError(null);
    setIsPending(true);

    try {
      dispatch({ type: "LOGOUT", payload: null });
      Cookies.remove("token");
      if (!isCancelled) {
        setIsPending(false);
        setError(error);
      }
    } catch (error) {
      console.log(error);
      if (!isCancelled) {
        setIsPending(false);
        setError(error);
      }
    }
  };

  useEffect(() => {
    return () => {
      setIsCancelled(true);
      setIsPending(false);
    };
  }, []);

  return { error, isPending, logout };
};

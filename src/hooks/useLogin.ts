import { useEffect, useState } from "react";
import { useAuthContext } from "./useAuthContext";
import Cookies from "js-cookie";
import { useLogout } from "./useLogout";
export const useLogin = () => {
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [isCancelled, setIsCancelled] = useState<boolean>(false);
  const { dispatch } = useAuthContext();
  const { logout } = useLogout();

  const login = async (username: string, password: string) => {
    setError(null);
    setIsPending(true);
    try {
      const res = await fetch(
        "https://xm-crm-react-exercise-server.herokuapp.com/login",
        {
          method: "POST",
          body: JSON.stringify({ name: username, password }),
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      if (data === "Invalid Credentials") {
        setIsPending(false);
        setError("Credentials entered are invalid please try again");
        return;
      }
      let tenMinFromNow = new Date().getTime() + 10 * 60 * 1000;
      Cookies.set("token", data.token, {
        expires: new Date(tenMinFromNow), // 10 minutes as per specification
      });
      dispatch({ type: "LOGIN", payload: data.token });
      setTimeout(() => {
        logout();
      }, 10 * 60 * 1000);
      // update state if not cancelled in the meantime
      if (!isCancelled) {
        setError(null);
        setIsPending(false);
      }
    } catch (error) {
      console.log(error.message);
      // again update state if not cancelled in the meantime
      if (!isCancelled) {
        setError(error);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { error, setError, isPending, login };
};

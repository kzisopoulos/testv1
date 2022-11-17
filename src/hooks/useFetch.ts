import { useAuthContext } from "./useAuthContext";
import { useQuery } from "@tanstack/react-query";

export const useFetch = () => {
  const { user } = useAuthContext();
  const token = user;

  const { isLoading, error, data } = useQuery({
    queryKey: ["ingredients"],
    queryFn: () =>
      fetch("https://xm-crm-react-exercise-server.herokuapp.com/ingredients", {
        headers: new Headers({
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        }),
      }).then((res) => res.json()),
  });

  return { error, isLoading, data };
};

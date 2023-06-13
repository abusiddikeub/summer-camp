import { useContext } from "react";
import { AuthContext } from "../../Routers/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useSelect = () => {
  const { user } = useContext(AuthContext);

  const { refetch, data: select = [] } = useQuery({
    queryKey: ["select", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/select?email=${user?.email}`
      );
      return res.json();
    },
  });
  return [select, refetch];
};
export default useSelect;
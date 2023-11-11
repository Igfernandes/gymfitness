import { useAxios } from "../../hooks/useAxios";
import { apiRoutes } from "../Api";
import { useQuery } from "react-query";

export function useGetUser(payload) {
  const { request } = useAxios();
  const { users } = apiRoutes;

  async function getUser() {
    if (payload) return await request().get(users.default, payload);
    else return await request().get(users.default);
  }

  const { data, ...rest } = useQuery({
    queryKey: ["users"],
    queryFn: getUser
  });

  return { data: data ? data["data"] : [], ...rest };
}

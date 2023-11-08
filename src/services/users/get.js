import { useAxios } from "../../hooks/useAxios";
import { apiRoutes } from "../Api";
import { useQuery } from "react-query";

export function useGetUser() {
  const { request } = useAxios();
  const { users } = apiRoutes;

  async function getUser(payload) {
    const data = await request().get(users.default, payload);

    return data;
  }

  const { data, ...rest } = useQuery({
    queryKey: ["users"],
    queryFn: getUser,
  });

  return { data: data ? data['data'] : [], ...rest };
}

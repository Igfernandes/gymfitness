import { useAxios } from "../../hooks/useAxios";
import { apiRoutes } from "../Api";
import { useQuery } from "react-query";

export function useGetNotifies() {
  const { request } = useAxios();
  const { notifies } = apiRoutes;

  async function getNotifies() {
    try {
      return await request().get(notifies.default);
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  const { data, ...rest } = useQuery({
    queryKey: ["alerts"],
    queryFn: getNotifies,
    enabled: true,
  });

  return { data: data ? data["data"] : [], ...rest };
}

import { useAxios } from "../../hooks/useAxios";
import { apiRoutes } from "../Api";
import { useQuery } from "react-query";

export function useGetTimelines() {
  const { request } = useAxios();
  const { timelines } = apiRoutes;

  async function getTimelines() {
    try {
      return await request().get(timelines.default);
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  const { data, ...rest } = useQuery({
    queryKey: ["timelines"],
    queryFn: getTimelines,
    enabled: false,
  });

  return { data: data ? data["data"] : [], ...rest };
}

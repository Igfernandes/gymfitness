import { useAxios } from "../../hooks/useAxios";
import { apiRoutes } from "../Api";
import { useQuery } from "react-query";

export function useGetTimelines() {
  const { request } = useAxios();
  const { timelines } = apiRoutes;

  async function getTimelines() {
    try {
      const { data } = await request().get(timelines.default);

      return data;
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  const timelinesQuery = useQuery({
    queryKey: ["timelines"],
    queryFn: getTimelines,
  });

  return timelinesQuery;
}

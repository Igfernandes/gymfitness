import axios from "axios";

export function useAxios() {
  function request() {
    return axios.create({
      baseURL:
        process.env.NEXT_PUBLIC_BASE_INTERNAL_API_URL ??
        "https://4b99-2804-3d28-6-e3f1-eddc-fc63-bbbc-c4b3.ngrok-free.app/api",
      headers: {
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      proxy: false,
    });
  }

  return {
    request,
  };
}

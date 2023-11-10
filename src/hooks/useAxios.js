import axios from "axios";

export function useAxios() {
  function request() {
    return axios.create({
      baseURL:
        process.env.NEXT_PUBLIC_BASE_INTERNAL_API_URL ??
        "https://ed99-2804-3d28-6-a9ab-55ed-50ae-9c4-fa63.ngrok-free.app/api",
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

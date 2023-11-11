import axios from "axios";

export function useAxios() {
  function request() {
    return axios.create({
      baseURL:
        process.env.NEXT_PUBLIC_BASE_INTERNAL_API_URL ??
        "https://bcee-200-202-104-113.ngrok-free.app/api",
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

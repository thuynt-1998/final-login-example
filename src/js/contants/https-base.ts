import { create } from "apisauce";

const api = create({
  baseURL: "https://httpbin.org",
  headers: { "Content-Type": "application/json" },
});
export default api;

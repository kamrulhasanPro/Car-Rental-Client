import axios from "axios";

export const axiosPublic = axios.create({
  baseURL: "https://car-rental-server-pi-three.vercel.app",
});

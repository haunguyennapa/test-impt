import { apiConfigs } from "@/configs/api.config";
import axios from "axios";

export const api = axios.create({
  baseURL: apiConfigs.baseURL,
  headers: {
    apiKey: apiConfigs.apiKey,
  },
});

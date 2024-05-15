import { api } from "./api.service";
import { TAdvertiser, TGetAdvertiserQueries, TResponse } from "./type";

export const DemoAPI = {
  getAdvertisers: async (query: TGetAdvertiserQueries = {}) => {
    const { data } = await api.get<TResponse<TAdvertiser[]>>("/advertisers", {
      params: query,
    });
    return data;
  },
};

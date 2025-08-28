import { axiosInstance } from "../lib/utils";
import type { PlatformModel } from "../types/platform.model";
import type { GetAllResponseModel } from "../types/response.model";
import { useQuery } from "@tanstack/react-query";

const usePlatforms = () => {
  return useQuery<GetAllResponseModel<PlatformModel>>({
    queryKey: ["platforms"],
    queryFn: () =>
      axiosInstance.get("/platforms/lists/parents").then((res) => res.data),
  });
};

export default usePlatforms;

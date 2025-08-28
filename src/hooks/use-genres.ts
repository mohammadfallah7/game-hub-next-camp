import type { GenreModel } from "../types/genre.model";
import { axiosInstance } from "../lib/utils";
import type { GetAllResponseModel } from "../types/response.model";
import { useQuery } from "@tanstack/react-query";

const useGenres = () => {
  return useQuery<GetAllResponseModel<GenreModel>>({
    queryKey: ["genres"],
    queryFn: () => axiosInstance.get("/genres").then((res) => res.data),
    staleTime: 10 * 60 * 1000, // 10min
  });
};

export default useGenres;

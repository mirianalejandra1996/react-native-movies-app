import { getMovieByIdAction } from "@/core/actions/movie/get-movie-by-id.action";
import { getMovieCastAction } from "@/core/actions/movie/get-movie-cast.action";
import { useQuery } from "@tanstack/react-query";
// rafc
export const useMovie = (id: number) => {
  // Queries
  const movieQuery = useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovieByIdAction(id),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

  const movieCastQuery = useQuery({
    queryKey: ["credits", id],
    queryFn: () => getMovieCastAction(id),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

  return {
    movieQuery,
    movieCastQuery,
  };
};

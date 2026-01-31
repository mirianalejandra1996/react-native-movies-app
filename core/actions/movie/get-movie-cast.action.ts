import { movieApi } from "@/core/api/movie-api";
import { Cast } from "@/infrastructure/interfaces/credits.interface";
import { CreditsResponse } from "@/infrastructure/interfaces/credits.response";
import { CastMapper } from "@/infrastructure/mappers/movie-cast.mapper";

export const getMovieCastAction = async (movieId: number): Promise<Cast[]> => {
  try {
    const { data } = await movieApi.get<CreditsResponse>(`/${movieId}/credits`);

    console.log("Creditos - HTTP Cargada");

    const credits = data.cast.map(CastMapper.fromMovieDBCastToEntity);

    return credits;
  } catch (error) {
    console.log(error);
    throw "Cannot load now cast from movie";
  }
};

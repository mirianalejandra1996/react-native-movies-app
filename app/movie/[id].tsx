import { getMovieByAction } from "@/core/actions/movie/get-movie-by-id.action";
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const MovieScreen = () => {
  const { id } = useLocalSearchParams();

  const movie = getMovieByAction(+id);

  console.log({ movie });

  return (
    <View>
      <Text>MovieScreen {id}</Text>
      <Text>MovieScreen {JSON.stringify(movie)}</Text>
    </View>
  );
};

export default MovieScreen;

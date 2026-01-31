import { Cast } from "@/infrastructure/interfaces/credits.interface";
import React from "react";
import { Text, View } from "react-native";

interface Props {
  casts: Cast[];
}

const MovieCast = ({ casts }: Props) => {
  return (
    <View className="mx-5">
      <Text>MovieCast</Text>
    </View>
  );
};

export default MovieCast;

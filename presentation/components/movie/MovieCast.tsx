import { Cast } from "@/infrastructure/interfaces/credits.interface";
import React from "react";
import { FlatList, Text, View } from "react-native";
import { ActorCard } from "./ActorCard";

interface Props {
  casts: Cast[];
}

const MovieCast = ({ casts }: Props) => {
  return (
    <View className="mt-5">
      <Text className="text-2xl font-bold px-4 mb-2">Actores</Text>

      <FlatList
        className="mt-2"
        horizontal
        data={casts}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, i) => `${item.id}-${i}`}
        renderItem={({ item }) => <ActorCard actor={item} />}
      />
    </View>
  );
};

export default MovieCast;

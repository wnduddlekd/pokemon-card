import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectorPokemonById } from "../RTK/selector";
import FavoriteButton from "../components/FavoriteButton";
import FlipCard from "../components/FilpCard";

export default function Detail() {
  const { pokemonId } = useParams();
  console.log(typeof pokemonId);
  const pokemon = useSelector(selectorPokemonById(Number(pokemonId)));
  console.log(pokemon);

  if (!pokemon) {
    return <div>포켓몬을 불러오는 중...</div>;
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-white p-[30px] rounded-[10px]">
        <div className="text-[28px] mb-[10px]">
          {pokemon.name}
          <FavoriteButton pokemonId={Number(pokemonId)} />
        </div>
        <div className="whitespace-pre-wrap text-center mt-4 mb-2 leading-6">
          {pokemon.description}
        </div>
        <FlipCard front={pokemon.front} back={pokemon.back} />
      </div>
    </>
  );
}

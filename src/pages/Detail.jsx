import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectorPokemonById } from "../RTK/selector";

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
      <div className="flex flex-col justify-center items-center bg-slate-50 p-[30px] rounded-[10px]">
        <div className="text-[28px] mb-[10px]">{pokemon.name}</div>
        <div className="whitespace-pre-wrap text-center mt-4 mb-2 leading-6">
          {pokemon.description}
        </div>
        <img className="w-[200px]" src={pokemon.front} />
      </div>
    </>
  );
}

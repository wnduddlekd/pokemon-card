import { getRegExp } from "korean-regexp";
import React from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { selectorPokemonByRegExp } from "../RTK/selector";
import Card from "../components/Card";

export default function Search() {
  const [searchPrams] = useSearchParams();
  const parem = searchPrams.get("pokemon");
  const reg = getRegExp(parem);
  const pokemon = useSelector(selectorPokemonByRegExp(reg));
  console.log(pokemon);
  return (
    <>
      {pokemon.map((el) => (
        <Card key={el.id} pokemon={el} />
      ))}
    </>
  );
}

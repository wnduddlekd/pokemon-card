import React from "react";
import { useSelector } from "react-redux";
import { Card } from "../components/Card";

export default function Main() {
  const pokemonData = useSelector((state) => state.pokemon);
  return (
    <>
      {pokemonData.data.map((el) => (
        <Card key={el.id} pokemon={el} />
      ))}
    </>
  );
}

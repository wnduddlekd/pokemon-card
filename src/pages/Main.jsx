import React, { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
const Card = lazy(() => import("../components/Card.jsx"));

export default function Main() {
  const pokemonData = useSelector((state) => state.pokemon.data);
  return (
    <>
      <Suspense fallback={<div> 로딩중...</div>}>
        {pokemonData.map((el) => (
          <Card key={el.id} pokemon={el} />
        ))}
      </Suspense>
    </>
  );
}

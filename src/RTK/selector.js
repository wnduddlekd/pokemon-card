import { createSelector } from "@reduxjs/toolkit";

export const selectorPokemonById = (pokemonId) =>
  createSelector(
    (state) => state.pokemon.data,
    (pokemon) => pokemon.find((el) => el.id === pokemonId)
  );

export const selectorPokemonByRegExp = (reg) =>
  createSelector(
    (state) => state.pokemon.data,
    (pokemon) => pokemon.filter((el) => el.name.match(reg))
  );

export const selectorFavoritePokemons = createSelector(
  (state) => state.pokemon.data,
  (state) => state.favorite,
  (pokemon, favorite) => {
    return pokemon.filter((el) => favorite.includes(el.id));
  }
);

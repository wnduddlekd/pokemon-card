import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchMultiplePokemonById } from "../RTK/thunk";
import { Link, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Search from "./pages/Search";
import Favorite from "./pages/Favorite";

export default function App() {
  const dispatch = useDispatch();
  const pokemonData = useSelector((state) => state.pokemon);
  console.log(pokemonData);

  useEffect(() => {
    dispatch(fetchMultiplePokemonById(151));
  }, []);

  return (
    <>
      <h1>포켓몬 도감</h1>
      <nav>
        <Link to={"/"}>메인</Link>
        <Link to={"/detail/1"}>상세정보</Link>
        <Link to={"/search"}>검색</Link>
        <Link to={"/favorite"}>찜목록</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail/:pokemon" element={<Detail />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </main>
    </>
  );
}

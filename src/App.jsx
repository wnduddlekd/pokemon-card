import { useEffect } from "react";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchMultiplePokemonById } from "./RTK/thunk";
import { Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Search from "./pages/Search";
import Favorite from "./pages/Favorite";

export default function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const pokemonData = useSelector((state) => state.pokemon);
  console.log(pokemonData.data);

  useEffect(() => {
    dispatch(fetchMultiplePokemonById(151));
  }, []);

  return (
    <div className="flex flex-col gap-[20px]">
      <h1 className="text-[40px] text-center">포켓몬 도감</h1>
      <nav className="flex gap-[10px] justify-center">
        <Link to={"/"}>메인</Link>
        <Link to={"/favorite"}>찜목록</Link>
        <input
          onChange={(e) => navigate(`/search?pokemon=${e.target.value}`)}
          type="text"
          className="border-b border-[darkgray] px-2"
        />
      </nav>
      <main className="flex flex-wrap gap-[10px] justify-center">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail/:pokemonId" element={<Detail />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </main>
    </div>
  );
}

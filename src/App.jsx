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
    <div className="flex flex-col gap-[30px]">
      <div>
        <div className="bg-red-500 h-10 w-screen"></div>
        <h1 className="	font-[NeoDunggeunmo] bg-neutral-900 text-[40px] text-white text-center p-5">
          포켓몬 도감
        </h1>
      </div>
      <nav className="font-[NeoDunggeunmo] flex gap-[10px] justify-center border-b">
        <Link to={"/"}>메인</Link>
        <Link to={"/favorite"}>찜목록</Link>
        <input
          onChange={(e) => navigate(`/search?pokemon=${e.target.value}`)}
          type="text"
          className="border-b border-[darkgray] px-2"
        />
        <span>🔍</span>
      </nav>
      <main className="flex flex-wrap gap-[10px] justify-center  bg-slate-200 p-[30px]">
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

import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import FavoriteButton from "./FavoriteButton";
import { useState } from "react";

const CardContainer = styled.section`
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-bottom: 10px;
  border: 2px solid #514b88;
  border-radius: 10px;
  border-bottom: 5px solid #514b88;
  border-right: 5px solid #514b88;

  img {
    width: 120px;
  }
`;

export default function Card({ pokemon }) {
  const [isImageLoding, setIsImageLoding] = useState(true);
  const nav = useNavigate();
  return (
    <CardContainer onClick={() => nav(`/detail/${pokemon.id}`)}>
      {isImageLoding ? (
        <div className="w-[120px] h-[120px] leading-[120px] text-center">
          loding...
        </div>
      ) : null}
      <img onLoad={() => setIsImageLoding(false)} src={pokemon.front} />
      <div>
        {pokemon.name}
        <FavoriteButton pokemonId={pokemon.id} />
      </div>
    </CardContainer>
  );
}

import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CardContainer = styled.section`
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-bottom: 10px;
  border: 1px solid gray;
  border-radius: 10px;

  img {
    width: 120px;
  }
`;

export const Card = ({ pokemon }) => {
  const nav = useNavigate();
  return (
    <CardContainer onClick={() => nav(`/detail/${pokemon.id}`)}>
      <img src={pokemon.front} />
      <div>{pokemon.name}</div>
    </CardContainer>
  );
};

import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 25px;
  list-style: none;
  padding: 20px;
`;

export const Card = styled.li`
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const CardImage = styled.img`
  border-radius: 20px;
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 18px;
  font-weight: 800;
  color: #212121;
  margin: 5px 0;
`;

export const DetailsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 10px 20px;
  background-color: #fff;
  border-radius: 50px;
`;

export const InfoSpan = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #757575;

  svg {
    font-size: 18px;
    color: #212121;
  }
`;
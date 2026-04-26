import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 20px;
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Label = styled.span`
  font-weight: bold;
  font-size: 14px;
  color: #212121;
`;

export const BadgeList = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;

export const Badge = styled.span`
  font-size: 12px;
  border-radius: 15px;
  padding: 4px 12px;
  background-color: #f1f2f6;
  color: #757575;

  ${({ $isActive, $type }) =>
    $isActive &&
    `
    color: white;
    background-color: ${
      $type === "easy" ? "#6ab04c" : 
      $type === "medium" ? "#f0932b" : 
      "#eb4d4b"
    };
  `}
`;
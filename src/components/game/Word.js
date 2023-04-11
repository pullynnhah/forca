import styled from "styled-components";

export default function Word({ display, color }) {
  return <StyledWord color={color}>{display}</StyledWord>;
}

const StyledWord = styled.h1`
  font: 700 50px/68px "Noto Sans", sans-serif;
  color: ${props => props.color};
`;

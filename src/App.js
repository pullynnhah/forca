import { useState } from "react";
import styled from "styled-components";

import Game from "./components/Game";
import Guess from "./components/Guess";
import Letters from "./components/Letters";

export default function App() {
  const [numLives, setNumLives] = useState(6);
  return (
    <StyledContainer>
      <Game />
      <Letters />
      <Guess />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  width: 1025px;
  margin: 59px auto;
  padding: 0 38px;
`;

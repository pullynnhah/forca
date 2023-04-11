import { useState } from "react";
import styled from "styled-components";

import Game from "./components/Game";
import Guess from "./components/Guess";
import Letters from "./components/Letters";
import { WORDS } from "./assets/constants/words";
import { randint } from "./utils/tools";

export default function App() {
  const [numLives, setNumLives] = useState(6);
  const [guesses, setGuesses] = useState(null);
  const [secret, setSecret] = useState(null);
  const [display, setDisplay] = useState(null);
  const [color, setColor] = useState(null);

  function startGame() {
    const word = WORDS[randint(WORDS.length)];
    console.log(word); // TODO: remove later
    const starterDisplay = [...word].map(_ => " _");

    setNumLives(6);
    setGuesses([]);
    setSecret(word);
    setDisplay(starterDisplay);
    setColor("#000");
  }

  return (
    <StyledContainer>
      <Game numLives={numLives} startGame={startGame} display={display} color={color} />
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

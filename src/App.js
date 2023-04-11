import { useState } from "react";
import styled from "styled-components";

import { ALPHABET } from "./assets/constants/alphabet";
import { norm, randint } from "./utils/tools";
import { WORDS } from "./assets/constants/words";
import Game from "./components/Game";
import Guess from "./components/Guess";
import Letters from "./components/Letters";

export default function App() {
  const [numLives, setNumLives] = useState(6);
  const [letters, setLetters] = useState(generateLetters(true));
  const [secret, setSecret] = useState(null);
  const [display, setDisplay] = useState(null);
  const [color, setColor] = useState(null);

  function generateLetters(isDisabled) {
    return ALPHABET.reduce((acc, letter) => ({ ...acc, [letter]: isDisabled }), {});
  }

  function startGame() {
    const word = WORDS[randint(WORDS.length)];
    console.log(word); // TODO: remove later
    const starterDisplay = [...word].map(_ => " _");

    setNumLives(6);
    setLetters(generateLetters(false));
    setSecret({ word, normWord: norm(word) });
    setDisplay(starterDisplay);
    setColor("#000");
  }

  function checkLetter(letter) {
    let containsLetter = false;
    setLetters({ ...letters, [letter]: true });
    const newDisplay = [...display];
    for (let i = 0; i < secret.word.length; i++) {
      if (secret.normWord[i] === letter) {
        newDisplay[i] = secret.word[i];
        containsLetter = true;
      }
    }

    if (containsLetter) {
      if (newDisplay.includes(" _")) setDisplay(newDisplay);
      else gameOver(true);
    } else {
      setNumLives(numLives - 1);
      if (numLives === 1) gameOver(false);
    }
  }

  function gameOver(isWinner) {
    setDisplay(secret.word);
    setLetters(generateLetters(true));
    setColor(isWinner ? "#27AE60" : "#F00");
  }

  return (
    <StyledContainer>
      <Game numLives={numLives} startGame={startGame} display={display} color={color} />
      <Letters letters={letters} checkLetter={checkLetter} />
      <Guess />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  width: 1025px;
  margin: 59px auto;
  padding: 0 53px 0 38px;
`;

import styled from "styled-components";
import Hangman from "./game/Hangman";
import Play from "./game/Play";
import Word from "./game/Word";

export default function Game({ numLives, startGame, display, color }) {
  return (
    <StyledContainer>
      <Hangman numLives={numLives} />
      <div>
        <Play startGame={startGame} />
        <Word display={display} color={color} />
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  }
`;

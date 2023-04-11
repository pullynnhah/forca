import { useState } from "react";
import styled from "styled-components";
import { StyledButton } from "../styles/StyledButton";

export default function Guess({ checkGuess, isDisabled }) {
  const [guess, setGuess] = useState("");

  function handleSubmit() {
    checkGuess(guess.toLowerCase());
    setGuess("");
  }

  return (
    <StyledContainer>
      <p>Já sei a palavra!</p>
      <input
        type="text"
        value={guess}
        disabled={isDisabled}
        onChange={e => setGuess(e.target.value)}
      />
      <GuessButton disabled={isDisabled} onClick={handleSubmit}>
        Chutar
      </GuessButton>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
  }

  input {
    width: 353px;
    height: 40px;

    color: #dd9f00;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;

    border: 1px solid #ccc;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
    border-radius: 3px;

    &:disabled {
      background: #ddd;
      cursor: not-allowed;
    }
  }
`;

const GuessButton = styled(StyledButton)`
  width: 100px;
  height: 40px;

  background: #e1ecf4;
  border: 1px solid #7aa7c7;
  border-radius: 3px;

  font-size: 16px;
  line-height: 19px;

  text-align: center;

  color: #3c76a1;

  &:disabled {
    cursor: not-allowed;
    background: #9faab5;
    color: #798a9f;
  }
`;

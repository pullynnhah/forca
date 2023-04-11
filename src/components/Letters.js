import styled from "styled-components";

import { StyledButton } from "../styles/StyledButton";

export default function Letters({ letters, checkLetter }) {
  return (
    <StyledContainer>
      {Object.entries(letters).map(([letter, isDisabled]) => (
        <Letter key={letter} disabled={isDisabled} onClick={() => checkLetter(letter)}>
          {letter}
        </Letter>
      ))}
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  width: 664px;
  margin: 70px auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

const Letter = styled(StyledButton)`
  width: 40px;
  height: 40px;

  background: #e1ecf4;
  border: 1px solid #7aa7c7;

  color: #39739d;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  text-transform: uppercase;
  border-radius: 3px;

  &:disabled {
    cursor: not-allowed;
    background: #9faab5;
    color: #798a9f;
  }
`;

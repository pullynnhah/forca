import styled from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;
  transition: all 400ms;
  &:hover:not(:disabled) {
    opacity: 0.8;
  }

  &:active:not(:disabled) {
    transform: scale(0.97);
  }
`;

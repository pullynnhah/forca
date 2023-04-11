import styled from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;
  transition: all 400ms;
  &:hover {
    opacity: 0.8;
  }

  &:active {
    transform: scale(0.97);
  }
`;

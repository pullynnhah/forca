import styled from "styled-components";
import { StyledButton } from "../../styles/StyledButton";

export default function Play({ startGame }) {
  return <StyledPlayButton onClick={startGame}>Escolher Palavra</StyledPlayButton>;
}

const StyledPlayButton = styled(StyledButton)`
  width: 200px;
  height: 60px;
  border-radius: 8px;
  margin-top: 30px;

  font-size: 20px;
  line-height: 23px;
  text-align: center;

  background: #27ae60;
  color: #fff;
`;

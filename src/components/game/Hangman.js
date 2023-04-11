import styled from "styled-components";
import hang0 from "../../assets/images/hang0.png";
import hang1 from "../../assets/images/hang1.png";
import hang2 from "../../assets/images/hang2.png";
import hang3 from "../../assets/images/hang3.png";
import hang4 from "../../assets/images/hang4.png";
import hang5 from "../../assets/images/hang5.png";
import hang6 from "../../assets/images/hang6.png";

export default function Hangman({ numLives }) {
  const hangmans = [hang0, hang1, hang2, hang3, hang4, hang5, hang6];
  return <StyledImage src={hangmans[numLives]} />;
}

const StyledImage = styled.img`
  width: 400px;
`;

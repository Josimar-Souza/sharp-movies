import styled from "styled-components";

type TitleElementProps = {
  textcolor?: string,
}

const TitleElement = styled.h1<TitleElementProps>`
  width: 100%;
  text-align: center;
  color: ${({ textcolor }) => textcolor ? textcolor : 'black'};
`;

export default TitleElement;

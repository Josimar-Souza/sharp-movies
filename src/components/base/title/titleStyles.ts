import styled from "styled-components";

type TitleElementProps = {
  textcolor?: string,
  fontSize?: string,
  width?: string,
}

const TitleElement = styled.h1<TitleElementProps>`
  width: ${({ width }) => width ? width : '100%'};
  text-align: center;
  color: ${({ textcolor }) => textcolor ? textcolor : 'black'};
  font-size: ${({ fontSize }) => fontSize ? fontSize : '16px'}
`;

export default TitleElement;

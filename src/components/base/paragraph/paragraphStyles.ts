import styled from "styled-components";

type ParagraphElementProps = {
  textcolor?: string,
  fontSize?: string,
}

const ParagraphElement = styled.p<ParagraphElementProps>`
  color: ${({ textcolor }) => textcolor ? textcolor : 'black'};
  font-size: ${({ fontSize }) => fontSize ? fontSize : '16px'};
`;

export default ParagraphElement;

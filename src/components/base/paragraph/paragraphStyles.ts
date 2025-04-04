import styled from "styled-components";

type ParagraphElementProps = {
  textcolor?: string,
  fontSize?: string,
  borderRadius?: string,
  backgroundColor?: string,
  padding?: string,
  margin?: string,
  text_align?: string,
}

const ParagraphElement = styled.p<ParagraphElementProps>`
  background-color: ${({ backgroundColor }) => backgroundColor ? backgroundColor : 'none'};
  border-radius: ${({ borderRadius }) => borderRadius ? borderRadius : '0'};
  color: ${({ textcolor }) => textcolor ? textcolor : 'black'};
  font-size: ${({ fontSize }) => fontSize ? fontSize : '16px'};
  padding: ${({ padding }) => padding ? padding : '0'};
  margin: ${({ margin }) => margin ? margin : '0'};
  text-align: ${({ text_align }) => text_align ? text_align : 'center'}
`;

export default ParagraphElement;

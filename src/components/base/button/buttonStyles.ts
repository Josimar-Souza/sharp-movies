import styled from "styled-components";
import { Button } from "antd";

type CustomButtonElementProps = {
  font_size?: string,
  font_weight?: string,
  width?: string,
  type?: string,
  size: string,
  color?: string,
  variant?: string,
  margin?: string,
}

const CustomButtonElement = styled(Button)<CustomButtonElementProps>`
  font-size: ${({ font_size }) => font_size ? font_size : '1em'};
  font-weight: ${({ font_weight }) => font_weight ? font_weight : '400'};
  width: ${({ width }) => width ? width : 'fit-content'};
  margin: ${({ margin }) => margin ? margin : '0'};
`;

export default CustomButtonElement;

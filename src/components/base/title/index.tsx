import TitleElement from "./titleStyles";

type TitleProps = {
  children: React.ReactNode,
  textcolor?: string,
  fontSize?: string,
  width?: string,
}

function Title(
  {
    children,
    textcolor,
    fontSize,
    width,
  }: TitleProps
) {
  return (
    <TitleElement
      textcolor={textcolor}
      fontSize={fontSize}
      width={width}
    >
      { children }
    </TitleElement>
  )
};

export default Title;

import TitleElement from "./titleStyles";

type TitleProps = {
  children: React.ReactNode,
  textcolor?: string,
}

function Title(
  {
    children,
    textcolor,
  }: TitleProps
) {
  return (
    <TitleElement
      textcolor={textcolor}
    >
      { children }
    </TitleElement>
  )
};

export default Title;

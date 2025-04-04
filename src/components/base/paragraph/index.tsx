import ParagraphElement from "./paragraphStyles"

type ParagraphProps = {
  children: React.ReactNode,
  textcolor?: string,
  fontSize?: string,
  borderRadius?: string,
  backgroundColor?: string,
  padding?: string,
  margin?: string,
}

function Paragraph(
  {
    children,
    textcolor,
    fontSize,
    borderRadius,
    backgroundColor,
    padding,
    margin,
  }: ParagraphProps
) {
  return (
    <ParagraphElement
      textcolor={textcolor}
      fontSize={fontSize}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      padding={padding}
      margin={margin}
    >
      { children }
    </ParagraphElement>
  )
}

export default Paragraph;

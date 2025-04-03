import ParagraphElement from "./paragraphStyles"

type ParagraphProps = {
  children: React.ReactNode,
  textcolor?: string,
  fontSize?: string,
}

function Paragraph(
  {
    children,
    textcolor,
    fontSize,
  }: ParagraphProps
) {
  return (
    <ParagraphElement
      textcolor={textcolor}
      fontSize={fontSize}
    >
      { children }
    </ParagraphElement>
  )
}

export default Paragraph;

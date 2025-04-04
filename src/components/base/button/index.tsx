import CustomButtonElement from "./buttonStyles";

type CustomButtonProps = {
  children: React.ReactNode,
  font_size?: string,
  font_weight?: string,
  width?: string,
  type?: string,
  size?: string,
  color?: string,
  variant?: string
  margin?: string,
  onClick: () => void,
}

function CustomButton(
  {
    children,
    font_size,
    font_weight,
    width,
    type = "primary",
    size = "medium",
    color = "primary",
    variant = "solid",
    margin,
    onClick,
  }: CustomButtonProps
) {
  return (
    <CustomButtonElement
      type={type}
      size={size}
      color={color}
      variant={variant}
      font_size={font_size}
      font_weight={font_weight}
      width={width}
      margin={margin}
      onClick={onClick}
    >
      { children }
    </CustomButtonElement>
  )
}

export default CustomButton;

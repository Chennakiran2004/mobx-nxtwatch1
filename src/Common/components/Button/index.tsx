import React from "react";

import { ButtonProps } from "./Button.types";
import { StyledButton } from "./styledComponents";

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "default",
  size = "medium",
  ...rest
}) => (
  <StyledButton variant={variant} size={size} {...rest}>
    {children}
  </StyledButton>
);

export default Button;

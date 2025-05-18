import React from "react";
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";
import Button from "../Button";
import { ThemeToggleButtonProps } from "./ThemeToggleButton.types";

const ThemeToggleButton: React.FC<ThemeToggleButtonProps> = ({
  isDarkTheme,
  onToggle,
  testId = "theme-toggle",
  size = 22,
}) => (
  <Button
    type="button"
    data-testid={testId}
    onClick={onToggle}
    variant="icon"
    size="medium"
    aria-label="Toggle theme"
  >
    {isDarkTheme ? <FiSun color="white" size={size} /> : <FaMoon size={size} />}
  </Button>
);

export default ThemeToggleButton;

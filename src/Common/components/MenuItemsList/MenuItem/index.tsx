import React from "react";
import { Link } from "react-router-dom";
import { MenuLink, MenuHeading } from "./styledComponents";
import { MenuItemProps } from "../MenuItem.types";

const MenuItem: React.FC<MenuItemProps> = ({
  to,
  icon,
  label,
  isActive,
  onClick,
  theme,
}) => (
  <Link to={to} className="link">
    <MenuLink theme={theme} $isActive={isActive} onClick={onClick}>
      {icon}
      <MenuHeading theme={theme}>{label}</MenuHeading>
    </MenuLink>
  </Link>
);

export default MenuItem;

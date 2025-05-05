import React from "react";
import { Link } from "react-router-dom";
import { HeaderLogoImg } from "./styledComponents";
import { LogoProps } from "./Logo.types";

const Logo: React.FC<LogoProps> = ({ logoURL, onClick }) => (
  <Link to="/">
    <HeaderLogoImg
      data-testid="website-logo"
      src={logoURL}
      alt="website logo"
      onClick={onClick}
    />
  </Link>
);

export default Logo;

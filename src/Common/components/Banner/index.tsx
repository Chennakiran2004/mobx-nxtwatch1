import React from "react";
import {
  GetPremium,
  CloseButton,
  BannerLogo,
  BannerText,
  GetItButton,
} from "./styledComponents";
import { IoMdClose } from "react-icons/io";

interface BannerProps {
  onClose: () => void;
}

const Banner: React.FC<BannerProps> = ({ onClose }) => (
  <GetPremium data-testid="banner">
    <CloseButton type="button" data-testid="close" onClick={onClose}>
      <IoMdClose size={16} />
    </CloseButton>
    <BannerLogo
      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
      alt="nxt watch logo"
    />
    <BannerText>Buy Nxt Watch Premium prepaid plans with UPI</BannerText>
    <GetItButton>GET IT NOW</GetItButton>
  </GetPremium>
);

export default Banner;

import React from "react";
import { LogoIcons } from "./styledComponents";
import {
  FACEBOOK_ICON,
  LINKEDIN_ICON,
  TWITTER_ICON,
} from "../../constants/Images/Icons";

const SOCIAL_ICONS = [
  { src: TWITTER_ICON, alt: "twitter logo" },
  { src: FACEBOOK_ICON, alt: "facebook logo" },
  { src: LINKEDIN_ICON, alt: "linkedin logo" },
];

const SocialIcons: React.FC = () => (
  <>
    {SOCIAL_ICONS.map(({ src, alt }) => (
      <LogoIcons key={alt} src={src} alt={alt} />
    ))}
  </>
);

export default SocialIcons;

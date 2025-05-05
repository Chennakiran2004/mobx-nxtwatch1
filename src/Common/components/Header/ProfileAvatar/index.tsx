import React from "react";
import { ProfileIcon } from "./styledComponents";
import { PROFILE_ICON } from "../../../constants/Images/Icons";

const ProfileAvatar: React.FC = () => (
  <ProfileIcon src={PROFILE_ICON} alt="profile" />
);

export default ProfileAvatar;

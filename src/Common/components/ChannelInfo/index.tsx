import React from "react";
import {
  ChannelDetails,
  ChannelLogo,
  ChannelDetailsText,
  ChannelDetailsText2,
} from "./styledComponents";
import { VideoDetails } from "../../../NxtWatch/types/VideoDetails";

interface ChannelInfoProps {
  channel: VideoDetails["channel"];
  theme: string;
}

const ChannelInfo: React.FC<ChannelInfoProps> = ({ channel, theme }) => (
  <ChannelDetails>
    <ChannelLogo src={channel.profileImageUrl} alt="channel logo" />
    <div>
      <ChannelDetailsText theme={theme}>{channel.name}</ChannelDetailsText>
      <ChannelDetailsText2>
        {channel.subscriberCount} subscribers
      </ChannelDetailsText2>
    </div>
  </ChannelDetails>
);

export default ChannelInfo;

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
}

const ChannelInfo: React.FC<ChannelInfoProps> = ({ channel }) => (
  <ChannelDetails>
    <ChannelLogo src={channel.profileImageUrl} alt="channel logo" />
    <div>
      <ChannelDetailsText>{channel.name}</ChannelDetailsText>
      <ChannelDetailsText2>
        {channel.subscriberCount} subscribers
      </ChannelDetailsText2>
    </div>
  </ChannelDetails>
);

export default ChannelInfo;

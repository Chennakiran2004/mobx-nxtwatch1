// import React from "react";
// import {
//   VideoTextContainer,
//   VideoTitle,
//   VideoDetailsContainer,
//   VideoDetailsContainer2,
//   VideoDetailsText,
// } from "./styledComponent";
// import { formatDistanceToNow } from "date-fns";
// import { ChannelLogo } from "../ThumbnailSection/styledComponents";

// interface VideoInfoSectionProps {
//   title: string;
//   viewCount: number | string;
//   theme: string;
//   channelName?: string;
//   publishedAt?: string;
//   cardType: "home" | "trending" | "gaming" | "saved";
//   profileImageUrl?: string;
// }

// const VideoInfoSection: React.FC<VideoInfoSectionProps> = ({
//   title,
//   viewCount,
//   channelName,
//   publishedAt,
//   cardType,
//   profileImageUrl,
// }) => {
//   let postedAt = "";
//   if (publishedAt) {
//     postedAt = formatDistanceToNow(new Date(publishedAt));
//     const postedAtList = postedAt.split(" ");
//     if (postedAtList.length >= 2) {
//       postedAtList.shift();
//       postedAt = postedAtList.join(" ");
//     }
//   }

//   return (
//     <VideoTextContainer>
//       {profileImageUrl && (
//         <div>
//           <ChannelLogo src={profileImageUrl} alt="channel logo" />
//         </div>
//       )}
//       <VideoTitle>{title}</VideoTitle>
//       <VideoDetailsContainer>
//         {channelName && <VideoDetailsText>{channelName}</VideoDetailsText>}

//         {cardType === "gaming" ? (
//           <VideoDetailsText>{viewCount} Watching Worldwide</VideoDetailsText>
//         ) : (
//           <VideoDetailsContainer2>
//             <VideoDetailsText>{viewCount} views</VideoDetailsText>
//             {postedAt && <VideoDetailsText>{postedAt} ago</VideoDetailsText>}
//           </VideoDetailsContainer2>
//         )}
//       </VideoDetailsContainer>
//     </VideoTextContainer>
//   );
// };

// export default VideoInfoSection;

import React from "react";
import {
  VideoTextMainContainer,
  VideoTextContainer,
  VideoTitle,
  VideoDetailsContainer,
  VideoDetailsContainer2,

  VideoDetailsText,
} from "./styledComponent";
import { formatDistanceToNow } from "date-fns";
import { ChannelLogo } from "../ThumbnailSection/styledComponents";

interface VideoInfoSectionProps {
  title: string;
  viewCount: number | string;
  theme: string;
  channelName?: string;
  publishedAt?: string;
  profileImageUrl?: string;
  cardType: "home" | "trending" | "gaming" | "saved";
}

const VideoInfoSection: React.FC<VideoInfoSectionProps> = ({
  title,
  viewCount,
  channelName,
  publishedAt,
  profileImageUrl,
  cardType,
}) => {
  let postedAt = "";
  if (publishedAt) {
    postedAt = formatDistanceToNow(new Date(publishedAt));
    const postedAtList = postedAt.split(" ");
    if (postedAtList.length >= 2) {
      postedAtList.shift();
      postedAt = postedAtList.join(" ");
    }
  }

  return (
    <VideoTextMainContainer>
      {profileImageUrl && (
        <div>
          <ChannelLogo src={profileImageUrl} alt="channel logo" />
        </div>
      )}
      <VideoTextContainer>
        <VideoTitle>{title}</VideoTitle>
        <VideoDetailsContainer>
          {channelName && <VideoDetailsText>{channelName}</VideoDetailsText>}
          {cardType === "gaming" ? (
            <VideoDetailsText>{viewCount} Watching Worldwide</VideoDetailsText>
          ) : (
            <VideoDetailsContainer2>
              <VideoDetailsText>{viewCount} views</VideoDetailsText>
              {postedAt && <VideoDetailsText>{postedAt} ago</VideoDetailsText>}
            </VideoDetailsContainer2>
          )}
        </VideoDetailsContainer>
      </VideoTextContainer>
    </VideoTextMainContainer>
  );
};

export default VideoInfoSection;

// import React from "react";
// import Layout from "../../../Common/components/Layout";
// import NoResults from "../../../Common/components/NoResults";
// import VideoList from "../VideosList";
// import { SavedVideosMainContainer, SavedVideosContainer } from "./styles";
// import useSavedVideosData from "../../hooks/useSavedVideosData";
// import { RiMenuAddLine } from "react-icons/ri";
// import PageMenu from "../../../Common/components/PageMenu";

// const SavedVideos: React.FC = () => {
//   const { savedVideosList } = useSavedVideosData();

//   const formattedVideos = savedVideosList.map((video) => ({
//     id: video.id,
//     thumbnailUrl: video.thumbnailUrl,
//     title: video.title,
//     viewCount: video.viewCount.toString(),
//     cardType: "saved" as const,
//     profileImageUrl: video.channel.profileImageUrl,
//     channelName: video.channel.name,
//     publishedAt: video.publishedAt,
//   }));

//   return (
//     <SavedVideosMainContainer>
//       <PageMenu title="saved videos" icon={RiMenuAddLine} />
//       <SavedVideosContainer>
//         {formattedVideos.length === 0 ? (
//           <NoResults onRetry={() => {}} />
//         ) : (
//           <VideoList videos={formattedVideos} />
//         )}
//       </SavedVideosContainer>
//     </SavedVideosMainContainer>
//   );
// };

// export default SavedVideos;

// src/Kossip/components/SavedVideos/index.tsx

import React from "react";
import VideoList from "../VideosList";
import PageMenu from "../../../Common/components/PageMenu";
import NoResults from "../../../Common/components/NoResults";
import { SavedVideosMainContainer, SavedVideosContainer } from "./styles";
import { BaseVideo } from "../../../Common/types/BaseVideo";
import { RiMenuAddLine } from "react-icons/ri";

type SavedVideosProps = {
  videos: BaseVideo[];
};

const SavedVideos: React.FC<SavedVideosProps> = ({ videos }) => {
  return (
    <SavedVideosMainContainer>
      <PageMenu title="saved videos" icon={RiMenuAddLine} />
      <SavedVideosContainer>
        {videos.length === 0 ? (
          <NoResults onRetry={() => {}} />
        ) : (
          <VideoList videos={videos} />
        )}
      </SavedVideosContainer>
    </SavedVideosMainContainer>
  );
};

export default SavedVideos;

// import React from "react";
// import { observer } from "mobx-react-lite";
// import { useParams } from "react-router-dom";
// import { flowResult } from "mobx";
// import Layout from "../../../Common/components/Layout";
// import Loader from "../../../Common/components/Loader";
// import NoResults from "../../../Common/components/NoResults";
// import LoaderWrapper from "../../../Common/components/LoaderWrapper";
// import { useTheme } from "../../../Common/Context/ThemeContext";
// import { MainBody, VideoItemDetailsContainer } from "./styles";
// import useVideoDetailsStore from "../../hooks/useVideoItemDeteailsStore";
// import VideoInfoSection from "../VideoInfoDetailsSection";

// const VideoItemDetails = observer(() => {
//   const { id = "" } = useParams<{ id: string }>();
//   const { isDarkTheme } = useTheme();
//   const { videoDetailsStore } = useVideoDetailsStore();

//   const fetchVideoDetails = () =>
//     flowResult(videoDetailsStore.fetchVideoDetails(id));

//   return (
//     <MainBody>
//       <VideoItemDetailsContainer theme={isDarkTheme}>
//         <LoaderWrapper
//           onFetch={fetchVideoDetails}
//           retries={3}
//           retryDelay={2000}
//           loadingComponent={<Loader />}
//           errorComponent={({ retry }) => <NoResults onRetry={retry} />}
//         >
//           {videoDetailsStore.videoDetails ? (
//             <VideoInfoSection videoDetails={videoDetailsStore.videoDetails} />
//           ) : (
//             <NoResults onRetry={fetchVideoDetails} />
//           )}
//         </LoaderWrapper>
//       </VideoItemDetailsContainer>
//     </MainBody>
//   );
// });

// export default VideoItemDetails;

// src/Kossip/components/VideoItemDetails/index.tsx

import React from "react";
import { useTheme } from "../../../Common/Context/ThemeContext";
import NoResults from "../../../Common/components/NoResults";
import VideoInfoSection from "../VideoInfoDetailsSection";
import { MainBody, VideoItemDetailsContainer } from "./styles";
import { VideoDetailsModel } from "../../stores/Models/VideoDetailsModel";

type Props = {
  videoDetails: VideoDetailsModel | null;
  onRetry: () => void;
};

const VideoItemDetails: React.FC<Props> = ({ videoDetails, onRetry }) => {
  const { isDarkTheme } = useTheme();

  return (
    <MainBody>
      <VideoItemDetailsContainer theme={isDarkTheme}>
        {videoDetails ? (
          <VideoInfoSection videoDetails={videoDetails} />
        ) : (
          <NoResults onRetry={onRetry} />
        )}
      </VideoItemDetailsContainer>
    </MainBody>
  );
};

export default VideoItemDetails;

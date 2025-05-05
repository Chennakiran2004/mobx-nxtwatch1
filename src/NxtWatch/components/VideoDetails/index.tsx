// import React, { useEffect } from "react";
// import { observer } from "mobx-react-lite";
// import { useParams } from "react-router-dom";
// import { formatDistanceToNow } from "date-fns";
// import Layout from "../../../Common/components/Layout";
// import VideoPlayer from "./VideoPlayer";
// import VideoActions from "./VideoAction";
// import ChannelInfo from "./ChannelInfo";
// import Loader from "../../../Common/components/Loader";
// import NoResults from "../../../Common/components/NoResults";
// import videoDetailsStore from "../../stores/VideoDetailsStore";
// import { useTheme } from "../../../Common/Context/ThemeContext";

// import {
//   MainBody,
//   VideoItemDetailsContainer,
//   VideoDetailContainer,
//   VideoTextContainer,
//   VideoTitle,
//   ViewsAndPostedContainer,
//   LikesAndViewsContainer,
//   ViewsText,
//   VideoDescriptionText,
// } from "./styles";

// const VideoItemDetails = observer(() => {
//   const { id = "" } = useParams<{ id: string }>();
//   const { isDarkTheme } = useTheme();
//   const { videoDetails, status, like, dislike } = videoDetailsStore;

//   useEffect(() => {
//     videoDetailsStore.fetchVideoDetails(id);
//   }, [id]);

//   const handleRetry = () => videoDetailsStore.fetchVideoDetails(id);

//   const renderContent = () => {
//     if (!videoDetails) return null;

//     const postedAt = formatDistanceToNow(new Date(videoDetails.publishedAt));
//     const formattedPostedAt = postedAt.split(" ").slice(1).join(" ");

//     return (
//       <VideoDetailContainer>
//         <VideoPlayer url={videoDetails.videoUrl} />
//         <VideoTextContainer>
//           <VideoTitle theme={isDarkTheme}>{videoDetails.title}</VideoTitle>
//           <LikesAndViewsContainer>
//             <ViewsAndPostedContainer>
//               <ViewsText>{videoDetails.viewCount} views</ViewsText>
//               <ViewsText>{formattedPostedAt} ago</ViewsText>
//             </ViewsAndPostedContainer>
//             <VideoActions
//               videoDetails={videoDetails}
//               like={like}
//               dislike={dislike}
//               onLike={() => videoDetailsStore.toggleLike()}
//               onDislike={() => videoDetailsStore.toggleDislike()}
//             />
//           </LikesAndViewsContainer>
//           <hr />
//           <ChannelInfo
//             channel={videoDetails.channel}
//             theme={isDarkTheme ? "dark" : "light"}
//           />
//           <VideoDescriptionText theme={isDarkTheme}>
//             {videoDetails.description}
//           </VideoDescriptionText>
//         </VideoTextContainer>
//       </VideoDetailContainer>
//     );
//   };

//   const renderUIBasedOnAPIStatus = () => {
//     switch (status) {
//       case "succeeded":
//         return renderContent();
//       case "failed":
//         return <NoResults onRetry={handleRetry} />;
//       case "loading":
//         return <Loader />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <Layout>
//       <MainBody>
//         <VideoItemDetailsContainer theme={isDarkTheme}>
//           {renderUIBasedOnAPIStatus()}
//         </VideoItemDetailsContainer>
//       </MainBody>
//     </Layout>
//   );
// });

// export default VideoItemDetails;

import React, { useCallback, useState } from "react";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import Layout from "../../../Common/components/Layout";
import VideoPlayer from "./VideoPlayer";
import VideoActions from "./VideoAction";
import ChannelInfo from "./ChannelInfo";
import Loader from "../../../Common/components/Loader";
import NoResults from "../../../Common/components/NoResults";
import videoDetailsStore from "../../stores/VideoDetailsStore";
import { useTheme } from "../../../Common/Context/ThemeContext";
import LoaderWrapper from "../../../Common/components/LoaderWrapper";

import {
  MainBody,
  VideoItemDetailsContainer,
  VideoDetailContainer,
  VideoTextContainer,
  VideoTitle,
  ViewsAndPostedContainer,
  LikesAndViewsContainer,
  ViewsText,
  VideoDescriptionText,
} from "./styles";

const VideoItemDetails = observer(() => {
  const { id = "" } = useParams<{ id: string }>();
  const { isDarkTheme } = useTheme();
  const { videoDetails, like, dislike } = videoDetailsStore;
  const [retryTrigger, setRetryTrigger] = useState(0);

  const postedAt = formatDistanceToNow(
    new Date(videoDetails?.publishedAt || new Date())
  );
  const formattedPostedAt = postedAt.split(" ").slice(1).join(" ");

  const fetchVideoDetails = useCallback(async () => {
    await videoDetailsStore.fetchVideoDetails(id);
  }, [id]);

  return (
    <Layout>
      <MainBody>
        <VideoItemDetailsContainer theme={isDarkTheme}>
          <LoaderWrapper
            key={`${id}-${retryTrigger}`}
            onFetch={fetchVideoDetails}
            retries={3}
            retryDelay={2000}
            loadingComponent={<Loader />}
            errorComponent={({ retry }) => <NoResults onRetry={retry} />}
          >
            {videoDetails && (
              <VideoDetailContainer>
                <VideoPlayer url={videoDetails.videoUrl} />
                <VideoTextContainer>
                  <VideoTitle theme={isDarkTheme}>
                    {videoDetails.title}
                  </VideoTitle>
                  <LikesAndViewsContainer>
                    <ViewsAndPostedContainer>
                      <ViewsText>{videoDetails.viewCount} views</ViewsText>
                      <ViewsText>{formattedPostedAt} ago</ViewsText>
                    </ViewsAndPostedContainer>
                    <VideoActions
                      videoDetails={videoDetails}
                      like={like}
                      dislike={dislike}
                      onLike={() => videoDetailsStore.toggleLike()}
                      onDislike={() => videoDetailsStore.toggleDislike()}
                    />
                  </LikesAndViewsContainer>
                  <hr />
                  <ChannelInfo
                    channel={videoDetails.channel}
                    theme={isDarkTheme ? "dark" : "light"}
                  />
                  <VideoDescriptionText theme={isDarkTheme}>
                    {videoDetails.description}
                  </VideoDescriptionText>
                </VideoTextContainer>
              </VideoDetailContainer>
            )}
          </LoaderWrapper>
        </VideoItemDetailsContainer>
      </MainBody>
    </Layout>
  );
});

export default VideoItemDetails;

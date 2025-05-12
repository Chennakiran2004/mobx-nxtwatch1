// import React, { useEffect } from "react";
// import { observer } from "mobx-react-lite";
// import Layout from "../../../Common/components/Layout";
// import Loader from "../../../Common/components/Loader";
// import NoResults from "../../../Common/components/NoResults";
// import VideoList from "../VideosList";
// import LoaderWrapper from "../../../Common/components/LoaderWrapper";
// import { GamingMainContainer, MainBody, GamingContainer } from "./styles";
// import useGamingStore from "../../hooks/useGamingStore";
// import { flowResult } from "mobx";
// import PageMenu from "../../../Common/components/PageMenu";
// import { IoLogoGameControllerB } from "react-icons/io";

// const GamingVideos: React.FC = observer(() => {
//   const { gamingStore } = useGamingStore();
//   const { videosList, fetchVideos } = gamingStore;

//   const getFormattedVideos = () =>
//     videosList.map((video) => ({
//       id: video.id,
//       thumbnailUrl: video.thumbnailUrl,
//       title: video.title,
//       viewCount: video.viewCount.toString(),
//       cardType: "gaming" as const,
//     }));

//   useEffect(() => {
//     fetchVideos();
//   }, [fetchVideos]);

//   const formattedVideos = getFormattedVideos();

//   return (
//     <GamingMainContainer data-testid="gaming-container">
//       <MainBody>
//         <GamingContainer>
//           {/* <GamingMenu /> */}
//           <PageMenu title="gaming" icon={IoLogoGameControllerB} />
//           <LoaderWrapper
//             onFetch={() => flowResult(fetchVideos())}
//             retries={3}
//             retryDelay={2000}
//             loadingComponent={<Loader />}
//             errorComponent={({ retry }) => <NoResults onRetry={retry} />}
//           >
//             {formattedVideos.length > 0 ? (
//               <VideoList videos={formattedVideos} />
//             ) : (
//               <NoResults onRetry={fetchVideos} />
//             )}
//           </LoaderWrapper>
//         </GamingContainer>
//       </MainBody>
//     </GamingMainContainer>
//   );
// });

// export default GamingVideos;

// src/Kossip/components/GamingVideos/index.tsx

import React from "react";
import VideoList from "../VideosList";
import PageMenu from "../../../Common/components/PageMenu";
import NoResults from "../../../Common/components/NoResults";
import { IoLogoGameControllerB } from "react-icons/io";
import { GamingMainContainer, MainBody, GamingContainer } from "./styles";
import { BaseVideo } from "../../../Common/types/BaseVideo";

type GamingVideosProps = {
  videos: BaseVideo[];
};

const GamingVideos: React.FC<GamingVideosProps> = ({ videos }) => {
  if (!videos.length) {
    return <NoResults onRetry={() => window.location.reload()} />;
  }

  return (
    <GamingMainContainer data-testid="gaming-container">
      <MainBody>
        <GamingContainer>
          <PageMenu title="gaming" icon={IoLogoGameControllerB} />
          <VideoList videos={videos} />
        </GamingContainer>
      </MainBody>
    </GamingMainContainer>
  );
};

export default GamingVideos;

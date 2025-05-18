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

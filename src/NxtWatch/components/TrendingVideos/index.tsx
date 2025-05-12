import React from "react";
import VideoList from "../VideosList";
import PageMenu from "../../../Common/components/PageMenu";
import { AiFillFire } from "react-icons/ai";
import NoResults from "../../../Common/components/NoResults";
import { TrendingMainContainer, MainBody, TrendingContainer } from "./styles";
import { TrendingVideoModel } from "../../stores/Models/TrendingVideoModel";

type TrendingVideosProps = {
  videos: TrendingVideoModel[];
};

const TrendingVideos: React.FC<TrendingVideosProps> = ({ videos }) => {
  if (!videos.length) {
    return <NoResults onRetry={() => window.location.reload()} />;
  }

  const transformedVideos = videos.map((video) => ({
    id: video.id,
    thumbnailUrl: video.thumbnailUrl,
    title: video.title,
    viewCount: video.viewCount.toString(),
    cardType: "trending" as const,
    profileImageUrl: video.channel.profileImageUrl,
  }));

  return (
    <TrendingMainContainer data-testid="trending">
      <MainBody>
        <TrendingContainer data-testid="trending-container">
          <PageMenu title="trending" icon={AiFillFire} />
          <VideoList videos={transformedVideos} />
        </TrendingContainer>
      </MainBody>
    </TrendingMainContainer>
  );
};

export default TrendingVideos;

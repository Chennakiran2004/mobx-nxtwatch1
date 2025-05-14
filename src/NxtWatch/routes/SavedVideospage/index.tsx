import React from "react";
import { observer } from "mobx-react-lite";
import SavedVideos from "../../components/SavedVideos";
import useSavedVideosData from "../../hooks/useSavedVideosData";
import { BaseVideo } from "../../../Common/types/BaseVideo";

const SavedVideosPage: React.FC = observer(() => {
  const { savedVideosList } = useSavedVideosData();

  const transformedVideos: BaseVideo[] = savedVideosList.map((video) => ({
    id: video.id,
    thumbnailUrl: video.thumbnailUrl,
    title: video.title,
    viewCount: video.viewCount.toString(),
    cardType: "saved",
    profileImageUrl: video.channel.profileImageUrl,
    channelName: video.channel.name,
    publishedAt: video.publishedAt,
  }));

  return <SavedVideos videos={transformedVideos} />;
});

export default SavedVideosPage;

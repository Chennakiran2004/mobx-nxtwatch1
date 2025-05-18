import React from "react";
import { observer } from "mobx-react-lite";
import SavedVideos from "../../components/SavedVideos";
import { BaseVideo } from "../../../Common/types/BaseVideo";
import useSavedVideosStore from "../../hooks/useSavedVideosStore";

const SavedVideosPage: React.FC = observer(() => {
  const { savedVideosStore } = useSavedVideosStore();
  const { savedVideosList } = savedVideosStore;

  const transformedVideos: BaseVideo[] = savedVideosList.map((video) => ({
    id: video.id,
    thumbnailUrl: video.thumbnailUrl,
    title: video.title,
    viewCount: video.viewCount.toString(),
    cardType: "saved",
    profileImageUrl: video.channelProfileImageUrl,
    channelName: video.channelName,
    publishedAt: video.publishedAt,
  }));

  return <SavedVideos videos={transformedVideos} />;
});

export default SavedVideosPage;

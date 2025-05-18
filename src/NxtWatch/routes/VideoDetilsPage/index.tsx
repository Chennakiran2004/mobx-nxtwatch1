import React from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { flowResult } from "mobx";
import Loader from "../../../Common/components/Loader";
import NoResults from "../../../Common/components/NoResults";
import LoaderWrapper from "../../../Common/components/LoaderWrapper";
import useVideoDetailsStore from "../../hooks/useVideoItemDeteailsStore";
import VideoItemDetails from "../../components/VideoItemDetails";
import { VideoDetailsModel } from "../../stores/Models/VideoDetailsModel";

const VideoDetailsPage: React.FC = observer(() => {
  const { id = "" } = useParams<{ id: string }>();
  const { videoDetailsStore } = useVideoDetailsStore();
  const { fetchVideoDetails, apiStatus, error } = videoDetailsStore;

  const handleFetch = async () => {
    await flowResult(fetchVideoDetails(id));
  };

  const model: VideoDetailsModel | null = videoDetailsStore.videoDetails
    ? new VideoDetailsModel(videoDetailsStore.videoDetails)
    : null;

  return (
    <LoaderWrapper
      onFetch={handleFetch}
      status={apiStatus}
      error={error}
      loadingComponent={<Loader />}
      errorComponent={({ retry }) => <NoResults onRetry={retry} />}
    >
      <VideoItemDetails videoDetails={model} onRetry={handleFetch} />
    </LoaderWrapper>
  );
});

export default VideoDetailsPage;

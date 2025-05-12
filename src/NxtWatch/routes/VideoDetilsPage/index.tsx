// import VideoItemDetails from "../../components/VideoItemDetails";

// const VideoDetailsPage = () => {
//   return <VideoItemDetails />;
// };

// export default VideoDetailsPage;

// src/Kossip/routes/VideoDetailsPage/index.tsx

import React, { useEffect } from "react";
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

  const fetchVideoDetails = async () => {
    await flowResult(videoDetailsStore.fetchVideoDetails(id));
  };

  useEffect(() => {
    fetchVideoDetails();
  }, [id]);

  const model: VideoDetailsModel | null = videoDetailsStore.videoDetails
    ? new VideoDetailsModel(videoDetailsStore.videoDetails)
    : null;

  return (
    <LoaderWrapper
      onFetch={fetchVideoDetails}
      retries={3}
      retryDelay={2000}
      loadingComponent={<Loader />}
      errorComponent={({ retry }) => <NoResults onRetry={retry} />}
    >
      <VideoItemDetails videoDetails={model} onRetry={fetchVideoDetails} />
    </LoaderWrapper>
  );
});

export default VideoDetailsPage;

import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import LoaderWrapper from "../../../Common/components/LoaderWrapper";
import Loader from "../../../Common/components/Loader";
import NoResults from "../../../Common/components/NoResults";
import GamingVideos from "../../components/GamingVideos";
import useGamingStore from "../../hooks/useGamingStore";
import { flowResult } from "mobx";
import { BaseVideo } from "../../../Common/types/BaseVideo";

const GamingPage: React.FC = observer(() => {
  const { gamingStore } = useGamingStore();
  const { videosList, fetchVideos, apiStatus, error } = gamingStore;

  const transformedVideos: BaseVideo[] = videosList.map((video) => ({
    id: video.id,
    title: video.title,
    thumbnailUrl: video.thumbnailUrl,
    viewCount: video.viewCount.toString(),
    cardType: "gaming",
  }));

  return (
    <LoaderWrapper
      onFetch={() => flowResult(fetchVideos())}
      status={apiStatus}
      error={error}
      loadingComponent={<Loader />}
      errorComponent={({ retry }) => <NoResults onRetry={retry} />}
    >
      <GamingVideos videos={transformedVideos} />
    </LoaderWrapper>
  );
});

export default GamingPage;

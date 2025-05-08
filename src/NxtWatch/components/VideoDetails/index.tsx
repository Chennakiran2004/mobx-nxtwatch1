import React from "react";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import { flowResult } from "mobx";
import Layout from "../../../Common/components/Layout";
import Loader from "../../../Common/components/Loader";
import NoResults from "../../../Common/components/NoResults";
import LoaderWrapper from "../../../Common/components/LoaderWrapper";
import { useTheme } from "../../../Common/Context/ThemeContext";
import { MainBody, VideoItemDetailsContainer } from "./styles";
import useVideoDetailsStore from "../../hooks/useVideoItemDeteailsStore";
import VideoInfoSection from "./VideoInfoSection";

const VideoItemDetails = observer(() => {
  const { id = "" } = useParams<{ id: string }>();
  const { isDarkTheme } = useTheme();
  const { videoDetailsStore } = useVideoDetailsStore();

  const fetchVideoDetails = () =>
    flowResult(videoDetailsStore.fetchVideoDetails(id));

  return (
    <Layout>
      <MainBody>
        <VideoItemDetailsContainer theme={isDarkTheme}>
          <LoaderWrapper
            onFetch={fetchVideoDetails}
            retries={3}
            retryDelay={2000}
            loadingComponent={<Loader />}
            errorComponent={({ retry }) => <NoResults onRetry={retry} />}
          >
            {videoDetailsStore.videoDetails ? (
              <VideoInfoSection videoDetails={videoDetailsStore.videoDetails} />
            ) : (
              <NoResults onRetry={fetchVideoDetails} />
            )}
          </LoaderWrapper>
        </VideoItemDetailsContainer>
      </MainBody>
    </Layout>
  );
});

export default VideoItemDetails;

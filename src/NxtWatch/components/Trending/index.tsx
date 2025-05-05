import React, { useCallback, useState } from "react";
import { observer } from "mobx-react-lite";
import Layout from "../../../Common/components/Layout";
import Loader from "../../../Common/components/Loader";
import NoResults from "../../../Common/components/NoResults";
import TrendingMenu from "./TrendingMenu";
import VideoList from "./VideoList";
import trendingStore from "../../stores/TrendingStore";
import { TrendingMainContainer, MainBody, TrendingContainer } from "./styles";
import { useTheme } from "../../../Common/Context/ThemeContext";
import LoaderWrapper from "../../../Common/components/LoaderWrapper";

const Trending: React.FC = observer(() => {
  const { isDarkTheme } = useTheme();
  const { videosList } = trendingStore;
  const [retryTrigger, setRetryTrigger] = useState(0);

  const theme = isDarkTheme ? "dark" : "light";

  const handleRetry = () => {
    setRetryTrigger((prev) => prev + 1);
  };

  const fetchVideos = useCallback(async () => {
    await trendingStore.fetchVideos();
  }, []);

  return (
    <Layout>
      <TrendingMainContainer data-testid="trending" theme={theme}>
        <MainBody>
          <TrendingContainer data-testid="trending-container">
            <TrendingMenu />
            <LoaderWrapper
              key={retryTrigger}
              onFetch={fetchVideos}
              retries={3}
              retryDelay={2000}
              loadingComponent={<Loader />}
              errorComponent={({ retry }) => <NoResults onRetry={retry} />}
            >
              {videosList.length === 0 ? (
                <NoResults onRetry={handleRetry} />
              ) : (
                <VideoList videos={videosList} />
              )}
            </LoaderWrapper>
          </TrendingContainer>
        </MainBody>
      </TrendingMainContainer>
    </Layout>
  );
});

export default Trending;

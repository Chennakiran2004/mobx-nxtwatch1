import React, { useCallback, useState } from "react";
import { observer } from "mobx-react-lite";
import Layout from "../../../Common/components/Layout";
import Loader from "../../../Common/components/Loader";
import NoResults from "../../../Common/components/NoResults";
import GamingMenu from "./GamingMenu";
import VideoList from "./VideosList";
import { GamingMainContainer, MainBody, GamingContainer } from "./styles";
import { useTheme } from "../../../Common/Context/ThemeContext";
import gamingStore from "../../stores/GamingStore";
import LoaderWrapper from "../../../Common/components/LoaderWrapper";

const Gaming: React.FC = observer(() => {
  const { isDarkTheme } = useTheme();
  const { videosList } = gamingStore;
  const [retryTrigger, setRetryTrigger] = useState(0);

  const theme = isDarkTheme ? "dark" : "light";

  const handleRetry = () => {
    setRetryTrigger((prev) => prev + 1);
  };

  const fetchVideos = useCallback(async () => {
    await gamingStore.fetchVideos();
  }, []);

  return (
    <Layout>
      <GamingMainContainer data-testid="gaming-container" theme={theme}>
        <MainBody>
          <GamingContainer>
            <GamingMenu />
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
          </GamingContainer>
        </MainBody>
      </GamingMainContainer>
    </Layout>
  );
});

export default Gaming;

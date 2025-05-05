import React, { useCallback, useState } from "react";
import { observer } from "mobx-react-lite";
import Layout from "../../../Common/components/Layout";
import Banner from "./Banner";
import Loader from "../../../Common/components/Loader";
import NoResults from "../../../Common/components/NoResults";
import SearchBar from "./SearchBar";
import VideoList from "./VideosList";
import homeStore from "../../stores/HomeStore";
import { HomeMainContainer, HomeContainer } from "./styles";
import LoaderWrapper from "../../../Common/components/LoaderWrapper";

const Home: React.FC = observer(() => {
  const { videosList } = homeStore;
  const [isPopup, setIsPopup] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [searchTrigger, setSearchTrigger] = useState(0);
  console.log(searchInput);
  const fetchVideos = useCallback(async () => {
    await homeStore.fetchVideos(searchInput);
  }, [searchInput]);

  const onClickCloseBanner = () => setIsPopup(false);

  const handleRetry = () => setSearchTrigger((prev) => prev + 1);

  return (
    <Layout>
      <HomeMainContainer data-testid="Home container">
        <HomeContainer>
          {isPopup && <Banner onClose={onClickCloseBanner} />}
          <SearchBar
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onSearch={handleRetry}
          />

          <LoaderWrapper
            key={searchTrigger}
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
        </HomeContainer>
      </HomeMainContainer>
    </Layout>
  );
});

export default Home;

import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { flowResult } from "mobx";
import Banner from "../../../Common/components/Banner";
import SearchBar from "../../../Common/components/SearchBar";
import Loader from "../../../Common/components/Loader";
import NoResults from "../../../Common/components/NoResults";
import VideoList from "../VideosList";
import LoaderWrapper from "../../../Common/components/LoaderWrapper";
import { HomeContainer } from "../HomeVideos/styles";
import useHomeStore from "../../hooks/useHomeStore";

const HomeContent: React.FC = observer(() => {
  const { homeStore } = useHomeStore();
  const { videosList, fetchVideos } = homeStore;

  const [isPopup, setIsPopup] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [searchTrigger, setSearchTrigger] = useState(0);

  const closeBanner = () => setIsPopup(false);
  const handleRetry = () => setSearchTrigger((prev) => prev + 1);

  const onFetchVideos = async () => {
    await flowResult(fetchVideos(searchInput));
  };

  const transformedVideos = videosList.map((video) => ({
    id: video.id,
    thumbnailUrl: video.thumbnailUrl,
    title: video.title,
    viewCount: video.viewCount.toString(),
    cardType: "home" as const,
    channel: {
      name: video.channel.name,
      profileImageUrl: video.channel.profileImageUrl,
    },
    profileImageUrl: video.channel.profileImageUrl,
    channelName: video.channel.name,
    publishedAt: video.publishedAt,
  }));

  return (
    <HomeContainer>
      {isPopup && <Banner onClose={closeBanner} />}
      <SearchBar
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        onSearch={handleRetry}
      />
      <LoaderWrapper
        key={searchTrigger}
        onFetch={onFetchVideos}
        retries={3}
        retryDelay={2000}
        loadingComponent={<Loader />}
        errorComponent={({ retry }) => <NoResults onRetry={retry} />}
      >
        {!videosList?.length ? (
          <NoResults onRetry={handleRetry} />
        ) : (
          <VideoList videos={transformedVideos} />
        )}
      </LoaderWrapper>
    </HomeContainer>
  );
});

export default HomeContent;

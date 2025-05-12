import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { flowResult } from "mobx";
import useHomeStore from "../../hooks/useHomeStore";
import HomeVideos from "../../components/HomeVideos";
import LoaderWrapper from "../../../Common/components/LoaderWrapper";
import Loader from "../../../Common/components/Loader";
import NoResults from "../../../Common/components/NoResults";
import { BaseVideo } from "../../../Common/types/BaseVideo";

const HomePage: React.FC = observer(() => {
  const { homeStore } = useHomeStore();
  const { videosList, fetchVideos } = homeStore;

  const [isPopup, setIsPopup] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [searchTrigger, setSearchTrigger] = useState(0);

  const onCloseBanner = () => setIsPopup(false);
  const onSearchChange = (value: string) => setSearchInput(value);
  const onSearch = () => setSearchTrigger((prev) => prev + 1);

  const onFetchVideos = async () => {
    await flowResult(fetchVideos(searchInput));
  };

  useEffect(() => {
    onFetchVideos();
  }, [searchTrigger]);

  const transformedVideos: BaseVideo[] = videosList.map((video) => ({
    id: video.id,
    title: video.title,
    thumbnailUrl: video.thumbnailUrl,
    viewCount: video.viewCount.toString(),
    cardType: "home",
    profileImageUrl: video.channel.profileImageUrl,
    channelName: video.channel.name,
    publishedAt: video.publishedAt,
  }));

  return (
    <LoaderWrapper
      key={searchTrigger}
      onFetch={onFetchVideos}
      retries={3}
      retryDelay={2000}
      loadingComponent={<Loader />}
      errorComponent={({ retry }) => <NoResults onRetry={retry} />}
    >
      <HomeVideos
        videos={transformedVideos}
        searchInput={searchInput}
        onSearchChange={onSearchChange}
        onSearch={onSearch}
        isPopup={isPopup}
        onCloseBanner={onCloseBanner}
      />
    </LoaderWrapper>
  );
});

export default HomePage;

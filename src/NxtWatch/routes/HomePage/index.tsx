import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { flowResult } from "mobx";

import useHomeStore from "../../hooks/useHomeStore";
import HomeContentUI from "../../components/HomeVideos";
import { BaseVideo } from "../../../Common/types/BaseVideo";

const HomePage: React.FC = observer(() => {
  const { homeStore } = useHomeStore();
  const { videosList, fetchVideos } = homeStore;

  const [isPopup, setIsPopup] = useState(true);
  const [searchInput, setSearchInput] = useState("");

  const closeBanner = () => setIsPopup(false);

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const onSearch = () => {
    fetchData();
  };

  const fetchData = async () => {
    await flowResult(fetchVideos(searchInput));
  };

  const transformedVideos: BaseVideo[] = videosList.map((video) => ({
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
    <HomeContentUI
      isPopup={isPopup}
      searchInput={searchInput}
      onSearchChange={onSearchChange}
      onSearch={onSearch}
      closeBanner={closeBanner}
      onFetchVideos={fetchData}
      videosList={transformedVideos}
    />
  );
});

export default HomePage;

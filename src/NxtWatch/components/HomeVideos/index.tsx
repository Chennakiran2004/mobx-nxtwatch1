// import React from "react";
// import { observer } from "mobx-react-lite";
// import Layout from "../../../Common/components/Layout";
// import { HomeMainContainer } from "./styles";
// import HomeContent from "../HomeContent";

// const HomeVideos: React.FC = observer(() => (
//   <HomeMainContainer data-testid="Home container">
//     <HomeContent />
//   </HomeMainContainer>
// ));

// export default HomeVideos;

// src/Kossip/components/HomeVideos/index.tsx

import React from "react";
import VideoList from "../VideosList";
import Banner from "../../../Common/components/Banner";
import SearchBar from "../../../Common/components/SearchBar";
import NoResults from "../../../Common/components/NoResults";
import { HomeContainer } from "./styles";
import { BaseVideo } from "../../../Common/types/BaseVideo";

type HomeVideosProps = {
  videos: BaseVideo[];
  searchInput: string;
  onSearchChange: (value: string) => void;
  onSearch: () => void;
  isPopup: boolean;
  onCloseBanner: () => void;
};

const HomeVideos: React.FC<HomeVideosProps> = ({
  videos,
  searchInput,
  onSearchChange,
  onSearch,
  isPopup,
  onCloseBanner,
}) => {
  if (!videos.length) {
    return <NoResults onRetry={onSearch} />;
  }

  return (
    <HomeContainer>
      {isPopup && <Banner onClose={onCloseBanner} />}
      <SearchBar
        value={searchInput}
        onChange={(e) => onSearchChange(e.target.value)}
        onSearch={onSearch}
      />
      <VideoList videos={videos} />
    </HomeContainer>
  );
};

export default HomeVideos;

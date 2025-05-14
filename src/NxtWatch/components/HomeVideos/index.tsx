import React from "react";
import Banner from "../../../Common/components/Banner";
import SearchBar from "../../../Common/components/SearchBar";
import Loader from "../../../Common/components/Loader";
import NoResults from "../../../Common/components/NoResults";
import VideoList from "../VideosList";
import LoaderWrapper from "../../../Common/components/LoaderWrapper";
import { HomeContainer } from "../HomeVideos/styles";
import { BaseVideo } from "../../../Common/types/BaseVideo";

type Props = {
  isPopup: boolean;
  searchInput: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
  closeBanner: () => void;
  onFetchVideos: () => Promise<void>;
  videosList: BaseVideo[];
};

const HomeVideos: React.FC<Props> = ({
  isPopup,
  searchInput,
  onSearchChange,
  onSearch,
  closeBanner,
  onFetchVideos,
  videosList,
}) => (
  <HomeContainer>
    {isPopup && <Banner onClose={closeBanner} />}
    <SearchBar
      value={searchInput}
      onChange={onSearchChange}
      onSearch={onSearch}
    />
    <LoaderWrapper
      key={searchInput}
      onFetch={onFetchVideos}
      retries={3}
      retryDelay={2000}
      loadingComponent={<Loader />}
      errorComponent={({ retry }) => <NoResults onRetry={retry} />}
    >
      {!videosList.length ? (
        <NoResults onRetry={onSearch} />
      ) : (
        <VideoList videos={videosList} />
      )}
    </LoaderWrapper>
  </HomeContainer>
);

export default HomeVideos;

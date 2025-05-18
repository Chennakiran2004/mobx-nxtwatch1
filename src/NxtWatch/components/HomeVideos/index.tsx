import React from "react";
import Banner from "../../../Common/components/Banner";
import SearchBar from "../../../Common/components/SearchBar";
import Loader from "../../../Common/components/Loader";
import NoResults from "../../../Common/components/NoResults";
import VideoList from "../VideosList";
import LoaderWrapper from "../../../Common/components/LoaderWrapper";
import { HomeContainer } from "../HomeVideos/styles";
import { BaseVideo } from "../../../Common/types/BaseVideo";
import { APIStatus } from "../../constants/APIStatus";

type Props = {
  isPopup: boolean;
  searchInput: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
  closeBanner: () => void;
  onFetchVideos: () => Promise<void>;
  videosList: BaseVideo[];
  status: APIStatus;
  error: string | null;
};

//TODO: why ths status is not coming from store?
const HomeVideos: React.FC<Props> = ({
  isPopup,
  searchInput,
  onSearchChange,
  onSearch,
  closeBanner,
  onFetchVideos,
  videosList,
  status,
  error,
}) => (
  <HomeContainer>
    {isPopup && <Banner onClose={closeBanner} />}
    <SearchBar
      value={searchInput}
      onChange={onSearchChange}
      onSearch={onSearch}
    />
    <LoaderWrapper
      onFetch={onFetchVideos}
      status={status}
      error={error}
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

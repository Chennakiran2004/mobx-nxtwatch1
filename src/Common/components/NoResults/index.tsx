import React from "react";
import {
  NoVideosContainer,
  NoVideosImg,
  FailureText,
  RetryButton,
} from "./styledComponents";
import { useTheme } from "../../../Common/Context/ThemeContext";

interface NoResultsProps {
  onRetry: () => void;
}

const NoResults: React.FC<NoResultsProps> = ({ onRetry }) => {
  const { isDarkTheme } = useTheme();
  const theme = isDarkTheme ? "dark" : "light";
  return (
    <NoVideosContainer data-testid="no-vieos-view-container">
      <NoVideosImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
        data-testid="no videos found"
      />
      <FailureText theme={theme}>No search results found</FailureText>
      <FailureText theme={theme}>
        Try different key words or remove search filter
      </FailureText>
      <RetryButton type="button" onClick={onRetry}>
        Retry
      </RetryButton>
    </NoVideosContainer>
  );
};

export default NoResults;

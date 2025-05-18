import React from "react";
import {
  NoVideosContainer,
  NoVideosImg,
  FailureText,
  RetryButton,
} from "./styledComponents";
import { useTheme } from "../../../Common/Context/ThemeContext";
import { NoResultsImage } from "../../constants/Images/ErrorImages";

interface NoResultsProps {
  onRetry?: () => void;
  imageUrl?: string;
  title?: string;
  description?: string;
  showRetryButton?: boolean;
}

const NoResults: React.FC<NoResultsProps> = ({
  onRetry,
  imageUrl,
  title,
  description,
  showRetryButton,
}) => {
  const { isDarkTheme } = useTheme();
  const theme = isDarkTheme ? "dark" : "light";
  return (
    <NoVideosContainer data-testid="no-vieos-view-container">
      <NoVideosImg
        src={imageUrl || NoResultsImage}
        alt="no videos"
        data-testid="no videos found"
      />
      <FailureText theme={theme}>
        {title || "No search results found"}
      </FailureText>
      <FailureText theme={theme}>
        {description || "Try different key words or remove search filter"}
      </FailureText>
      {showRetryButton && <RetryButton onClick={onRetry}>Retry</RetryButton>}
    </NoVideosContainer>
  );
};

export default NoResults;

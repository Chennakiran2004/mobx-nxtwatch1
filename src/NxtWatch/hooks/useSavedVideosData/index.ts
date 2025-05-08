import { useTheme } from "../../../Common/Context/ThemeContext";
import { useSavedVideos } from "../../../Common/Context/SavedVideosContext";

const useSavedVideosData = () => {
  const { isDarkTheme } = useTheme();
  const { savedVideosList } = useSavedVideos();
  const theme = isDarkTheme ? "dark" : "light";

  return {
    theme,
    savedVideosList,
  };
};

export default useSavedVideosData;

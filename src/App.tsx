import {
  ThemeProvider as ContextThemeProvider,
  useTheme,
} from "./Common/Context/ThemeContext";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ActiveMenuProvider } from "./Common/Context/ActiveMenuContext";
import { SavedVideosProvider } from "./Common/Context/SavedVideosContext";
import AppRoutes from "./Common/routes/AppRoutes";
import { darkTheme, lightTheme } from "./Common/constants/theme";
import GlobalStyle from "./Common/constants/GlobalStyle";

// Renders App after ThemeContext is ready
const AppContent = () => {
  const { isDarkTheme } = useTheme();
  const selectedTheme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <StyledThemeProvider theme={selectedTheme}>
      <GlobalStyle />
      <ActiveMenuProvider>
        <SavedVideosProvider>
          <AppRoutes />
        </SavedVideosProvider>
      </ActiveMenuProvider>
    </StyledThemeProvider>
  );
};

const App = () => (
  <ContextThemeProvider>
    <AppContent />
  </ContextThemeProvider>
);

export default App;

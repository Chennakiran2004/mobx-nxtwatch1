import { ThemeProvider } from "./Common/Context/ThemeContext";
import { ActiveMenuProvider } from "./Common/Context/ActiveMenuContext";
import { SavedVideosProvider } from "./Common/Context/SavedVideosContext";
import AppRoutes from "./Common/routes/AppRoutes";

const App = () => {
  return (
    <div className="App">
      <ThemeProvider>
        <ActiveMenuProvider>
          <SavedVideosProvider>
            <AppRoutes />
          </SavedVideosProvider>
        </ActiveMenuProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;

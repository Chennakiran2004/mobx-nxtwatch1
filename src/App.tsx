// import { Routes, Route, Navigate } from "react-router-dom";
// import { ThemeProvider } from "./Common/Context/ThemeContext";
// import { ActiveMenuProvider } from "./Common/Context/ActiveMenuContext";
// import { SavedVideosProvider } from "./Common/Context/SavedVideosContext";
// import Login from "./Profile/components/Login";
// import Home from "./NxtWatch/components/HomeVideos";
// import ProtectedRoute from "./Common/hocs/ProtectedRoute";
// import Trending from "./NxtWatch/components/Trending";
// import Gaming from "./NxtWatch/components/Gaming";
// import SavedVideos from "./NxtWatch/components/SavedVideos";
// import VideoDetails from "./NxtWatch/components/VideoDetails";
// const App = () => {
//   return (
//     <div className="App">
//       <ThemeProvider>
//         <ActiveMenuProvider>
//           <SavedVideosProvider>
//             <Routes>
//               <Route path="/login" element={<Login />} />
//               <Route element={<ProtectedRoute />}>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/trending" element={<Trending />} />
//                 <Route path="/gaming" element={<Gaming />} />
//                 <Route path="/videos/:id" element={<VideoDetails />} />
//                 <Route path="/saved-videos" element={<SavedVideos />} />
//               </Route>
//               <Route path="*" element={<Navigate to="/" />} />
//             </Routes>
//           </SavedVideosProvider>
//         </ActiveMenuProvider>
//       </ThemeProvider>
//     </div>
//   );
// };

// export default App;

// src/App.jsx

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

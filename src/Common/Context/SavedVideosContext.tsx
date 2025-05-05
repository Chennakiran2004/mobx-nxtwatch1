
import React, { createContext, useContext, useState, ReactNode } from "react";
import { VideoDetails } from "../../NxtWatch/types/VideoDetails";

type SavedVideosContextType = {
  savedVideosList: VideoDetails[];
  addVideosToSavedVideos: (video: VideoDetails) => void;
  deleteVideosFromSavedVideos: (video: VideoDetails) => void;
  updateSave: (video: VideoDetails) => void;
  save: boolean;
};

const SavedVideosContext = createContext<SavedVideosContextType | undefined>(
  undefined
);

export const SavedVideosProvider = ({ children }: { children: ReactNode }) => {
  const [savedVideosList, setSavedVideosList] = useState<VideoDetails[]>([]);
  const [save, setSave] = useState(false);

  const addVideosToSavedVideos = (video: VideoDetails) => {
    setSavedVideosList((prev) => [...prev, video]);
  };

  const deleteVideosFromSavedVideos = (video: VideoDetails) => {
    setSavedVideosList((prev) => prev.filter((each) => each.id !== video.id));
  };

  const updateSaveVideosList = (video: VideoDetails) => {
    if (save) {
      deleteVideosFromSavedVideos(video);
    } else {
      addVideosToSavedVideos(video);
    }
  };

  const updateSave = (video: VideoDetails) => {
    setSave((prev) => !prev);
    updateSaveVideosList(video);
  };

  return (
    <SavedVideosContext.Provider
      value={{
        savedVideosList,
        addVideosToSavedVideos,
        deleteVideosFromSavedVideos,
        updateSave,
        save,
      }}
    >
      {children}
    </SavedVideosContext.Provider>
  );
};

export const useSavedVideos = () => {
  const context = useContext(SavedVideosContext);
  if (!context)
    throw new Error("useSavedVideos must be used within SavedVideosProvider");
  return context;
};

export default SavedVideosContext;

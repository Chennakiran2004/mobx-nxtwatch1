import React from "react";
import { BiLike, BiDislike } from "react-icons/bi";
import { RiMenuAddLine } from "react-icons/ri";
import { observer } from "mobx-react-lite";
import { Button } from "./styledComponents"; 
import { VideoDetails } from "../../types/VideoDetails";
import useSavedVideosStore from "../../hooks/useSavedVideosStore";

interface VideoActionsProps {
  videoDetails: VideoDetails;
}

const VideoActions: React.FC<VideoActionsProps> = ({ videoDetails }) => {
  const { savedVideosStore } = useSavedVideosStore();

  const {
    toggleSave,
    toggleLike,
    toggleDislike,
    isSaved,
    isLiked,
    isDisliked,
  } = savedVideosStore;

  const videoId = videoDetails.id;

  const like = isLiked(videoId);
  const dislike = isDisliked(videoId);
  const saved = isSaved(videoId);

  return (
    <div>
      <Button
        type="button"
        theme={like ? "active" : "not-active"}
        onClick={() => toggleLike(videoId)}
        data-testid="likeButton"
      >
        <BiLike size={20} /> Like
      </Button>
      <Button
        type="button"
        theme={dislike ? "active" : "not-active"}
        onClick={() => toggleDislike(videoId)}
        data-testid="dislikeButton"
      >
        <BiDislike size={20} /> Dislike
      </Button>
      <Button
        type="button"
        theme={saved ? "active" : "not-active"}
        onClick={() => toggleSave(videoDetails)}
        data-testid="saveButton"
      >
        <RiMenuAddLine size={20} /> {saved ? "Saved" : "Save"}
      </Button>
    </div>
  );
};

export default observer(VideoActions);

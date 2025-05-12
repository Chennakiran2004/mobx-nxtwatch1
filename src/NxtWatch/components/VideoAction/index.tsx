import React from "react";
import { BiLike, BiDislike } from "react-icons/bi";
import { RiMenuAddLine } from "react-icons/ri";
import { Button } from "./styledComponents";
import { useSavedVideos } from "../../../Common/Context/SavedVideosContext";
import { VideoDetails } from "../../types/VideoDetails";

interface VideoActionsProps {
  videoDetails: VideoDetails;
  like: boolean;
  dislike: boolean;
  onLike: () => void;
  onDislike: () => void;
}

const VideoActions: React.FC<VideoActionsProps> = ({
  videoDetails,
  like,
  dislike,
  onLike,
  onDislike,
}) => {
  const { updateSave, savedVideosList } = useSavedVideos();
  const isSaved = savedVideosList.some((video) => video.id === videoDetails.id);

  return (
    <div>
      <Button
        type="button"
        theme={like ? "active" : "not-active"}
        onClick={onLike}
        data-testid="likeButton"
      >
        <BiLike size={20} />
        Like
      </Button>
      <Button
        type="button"
        theme={dislike ? "active" : "not-active"}
        onClick={onDislike}
        data-testid="dislikeButton"
      >
        <BiDislike size={20} />
        Dislike
      </Button>
      <Button
        type="button"
        theme={isSaved ? "active" : "not-active"}
        onClick={() => updateSave(videoDetails)}
        data-testid="saveButton"
      >
        <RiMenuAddLine size={20} />
        {isSaved ? "Saved" : "Save"}
      </Button>
    </div>
  );
};

export default VideoActions;

// TODO: answer here
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL, BASE_URL } from "../api/config";

export default function LikeDislikeButton({ id, isLiked, isDisliked, likeCount, dislikeCount }) {
  // TODO: answer here
  const [countLike, setCountLike] = useState(likeCount);
  const [countDislike, setCountDislike] = useState(dislikeCount);
  const [isLikedState, setIsLikedState] = useState(isLiked);
  const [isDislikedState, setIsDislikedState] = useState(isDisliked);

  const handleCountLike = async () => {
    try {
      const getData = await axios.get(`${API_URL}/post/${id}/like`, {
        withCredentials: true,
      });

      setCountLike(getData.data.likeCount);
      setCountDislike(getData.data.dislikeCount);
      setIsLikedState(true);
      setIsDislikedState(false);
    } catch (error) {
      console.log(error);
    }
    if (isLiked === true) {
      setCountLike(countLike - 1);
    } else {
      setCountLike(countLike + 1);
      setCountDislike(countDislike - 1);
    }
  };
  const handleCountDislike = async () => {
    try {
      const getData = await axios.get(`${API_URL}/post/${id}/dislike`, {
        withCredentials: true,
      });

      setCountLike(getData.data.likeCount);
      setCountDislike(getData.data.dislikeCount);
      setIsLikedState(false);
      setIsDislikedState(true);
    } catch (error) {
      console.log(error);
    }
    if (isDisliked === true) {
      setCountDislike(countDislike - 1);
    } else {
      setCountDislike(countDislike + 1);
      setCountLike(countLike - 1);
    }
  };

  const handleUnlike = async () => {
    try {
      const getData = await axios.get(`${API_URL}/post/${id}/unlike`, {
        withCredentials: true,
      });

      setCountLike(getData.data.likeCount);
      setCountDislike(getData.data.dislikeCount);
      setIsLikedState(false);
      setIsDislikedState(false);
    } catch (error) {
      console.log(error);
    }
    if (isLiked === true) {
      setCountLike(countLike - 1);
    }
  };

  const handleUndislike = async () => {
    try {
      const getData = await axios.get(`${API_URL}/post/${id}/undislike`, {
        withCredentials: true,
      });

      setCountLike(getData.data.likeCount);
      setCountDislike(getData.data.dislikeCount);
      setIsLikedState(false);
      setIsDislikedState(false);
    } catch (error) {
      console.log(error);
    }
    if (isDisliked === true) {
      setCountDislike(countDislike - 1);
    }
  };

  useEffect(() => {
    setCountLike(likeCount);
    setCountDislike(dislikeCount);
    setIsLikedState(isLiked);
    setIsDislikedState(isDisliked);
  }, [likeCount, dislikeCount, isLiked, isDisliked]);

  return (
    <div>
      <button
        aria-label="Like Button"
        onClick={() => {
          if (isLikedState === true) {
            handleUnlike();
          } else {
            handleCountLike();
          }
        }}
      >
        Like
      </button>
      <span aria-label="Like Count">{countLike}</span>
      <button
        aria-label="Dislike Button"
        onClick={() => {
          if (isDislikedState === true) {
            handleUndislike();
          } else {
            handleCountDislike();
          }
        }}
      >
        Dislike
      </button>
      <span aria-label="Dislike Count">{countDislike}</span>
    </div>
  );
}

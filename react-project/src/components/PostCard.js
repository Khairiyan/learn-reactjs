// TODO: answer here
import LikeDislikeButton from "./LikeDislikeButton";

export default function PostCard({ image, caption, username, userId, date }) {
  // TODO: answer here

  return (
    <div aria-label="Post Card">
      <img src={image} aria-label="Post Image" />
      <p aria-label="Post User Name">{username ? username : ""}</p>
      <p aria-label="Post Caption">{caption ? caption : ""}</p>
      <p aria-label="Post Date">{date ? date : ""}</p>
      <LikeDislikeButton/>
    </div>
  );
}

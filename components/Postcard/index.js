import React from "react";
import { CommentButton } from "./CommentButton";
import { Heart } from "./Heart";
import { MusicCard } from "./MusicCard";
import { Profile } from "./Profile";
import "./style.css";

export const PostCard = () => {
  return (
    <div className="post-card">
      <MusicCard className="music-card-instance" rectangle="rectangle-28-2.svg" />
      <div className="overlap">
        <div className="text-wrapper-2">Post Title</div>
        <div className="group">
          <img className="vector" alt="Vector" src="vector.svg" />
          <img className="img" alt="Vector" src="image.svg" />
          <img className="vector-2" alt="Vector" src="vector-2.svg" />
          <img className="vector-3" alt="Vector" src="vector-3.svg" />
          <div className="overlap-group">
            <img className="subtract" alt="Subtract" src="subtract.svg" />
          </div>
        </div>
      </div>
      <p className="text-wrapper-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
        Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus...
      </p>
      <div className="text-wrapper-4">Read more...</div>
      <div className="text-wrapper-5">Username</div>
      <div className="text-wrapper-6">00 likes, 00 replies</div>
      <Profile className="profile-instance" color="#707070" fill="white" />
      <Heart className="heart-instance" />
      <CommentButton className="comment-button-instance" property1="default" union="union-6.svg" />
    </div>
  );
};

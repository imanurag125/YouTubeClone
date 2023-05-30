import React from "react";

const VideoCard = ({ videDetail }) => {
  if (videDetail === undefined) return;

  const { snippet, statistics } = videDetail;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="w-[300px] mb-6 cursor-pointer shadow-lg rounded-md">
      <img
        className="rounded-md mb-2"
        src={thumbnails.high.url}
        alt="utube-vide=thumbnail"
      />
      <div className="p-4">
        <h1 className="font-semibold">{title} </h1>
        <h1>{channelTitle} </h1>
      </div>
    </div>
  );
};

export default VideoCard;

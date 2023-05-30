import React, { useEffect, useState } from "react";
import { YOU_TUBE_VIDEO_API } from "../config";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
const VideoContainer = () => {
  const [videoList, setVideoList] = useState([]);

  async function getVideo() {
    const data = await fetch(YOU_TUBE_VIDEO_API);
    const res = await data.json();
    setVideoList(res.items);
  }
  useEffect(() => {
    getVideo();
  }, []);
  return (
    <div className="m-8 flex flex-wrap gap-6 mb-8 justify-center">
      {videoList.map((ele) => (
        <Link key={ele.id} to={`/watch?v=${ele.id}`}>
          <VideoCard videDetail={ele} />
        </Link>
      ))}
    </div>
  );
};
export default VideoContainer;

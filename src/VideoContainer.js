import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../src/Utils/constant";
import VideoCards, { adVideoCard } from "./components/VideoCards";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getvideos();
  }, []);

  const getvideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    // console.log(json.items);
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos[0] && <adVideoCard info={videos[0]} />}
      {videos.map((item) => (
        <Link key={item.id} to={"/watch?v=" + item.id}>
          <VideoCards info={item} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;

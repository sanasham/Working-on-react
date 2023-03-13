import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEO_API_URL } from '../utils/constants';
import VideoCard from '../components/VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEO_API_URL);
    const json = await response.json();
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos.length > 0 &&
        videos.map((video) => (
          <Link to={'/watch?v=' + video.id} key={video.id}>
            {' '}
            <VideoCard key={video.id} info={video} />{' '}
          </Link>
        ))}
    </div>
  );
};

export default VideoContainer;

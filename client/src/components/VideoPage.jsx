import React from 'react';
import { useParams } from 'react-router-dom';

const VideoPage = () => {
  const { videoUrl } = useParams(); // Get the video ID from the URL

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Video Title Here</h1>
      <div className="aspect-w-16 aspect-h-9 mb-4">
        <video
          src={decodeURIComponent(videoUrl)}
          title="Video Player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
      <p className="text-lg">
        Video description and additional content can go here.
      </p>
    </div>
  );
};

export default VideoPage;

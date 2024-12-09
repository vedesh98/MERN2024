import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

const VideoPage = () => {


  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Video Title Here</h1>
      <div className="aspect-w-16 aspect-h-9 mb-4">
      <iframe
      src={`https://drive.google.com/file/d/1uCoenGq9v6gXvhFoCLsq-bfuGz0Spp0F/preview`}
      title="Video Player"
      width="100%"
      height="100%"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="w-full h-full"
    ></iframe>
      </div>
      <p className="text-lg">
        Video description and additional content can go here.
      </p>
    </div>
  );
};

export default VideoPage;

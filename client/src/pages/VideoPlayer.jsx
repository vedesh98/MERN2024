import React, { useEffect } from "react";

const VideoPlayer = () => {
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault(); // Disable right-click
    };

    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <div className="flex flex-col items-center h-screen p-6 bg-gray-50">
      {/* Video Section */}
      <div className="w-full max-w-xl bg-white rounded-lg shadow-lg p-4">
        {/* Video Player */}
        <div className="relative w-auto h-auto">
  {/* Google Drive Embedded Video */}
  <iframe
    src="https://drive.google.com/file/d/1uCoenGq9v6gXvhFoCLsq-bfuGz0Spp0F/preview"
    title="Video Player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    className="w-full min-h-full rounded-lg"
  ></iframe>
  
  {/* Transparent Overlay */}
  <div
    className="absolute inset-0 flex items-center justify-center pointer-events-none"
    style={{ zIndex: 10 }}
  >
    <div 
      className="w-full h-full"
      style={{
        backgroundColor: "transparent", // Transparent layer
      }}
    ></div>
    <span className="text-white text-2xl font-bold pointer-events-none opacity-30">
      Watermark
    </span>
  </div>
</div>


        {/* Video Description */}
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            How to Start Trading in Stock Market? | Intraday Trading for Beginners
          </h2>
          <p className="text-gray-600 mt-6">
            This video is a masterclass on 'intraday trading for beginners' and 'intraday trading
            kaise karen in hindi'. It explains all intraday trading concepts using live trading demo
            in intraday stocks. It covers many benefits of intraday trading like margin, short
            selling, etc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;

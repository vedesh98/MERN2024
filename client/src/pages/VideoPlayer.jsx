import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';


const VideoPlayer = () => {
    const { videoUrl } = useParams();

    useEffect(() => {
        const handleContextMenu = (e) => {
            e.preventDefault(); // Disable right-click
        };

        document.addEventListener('contextmenu', handleContextMenu);

        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
        };
    }, []);

    return (
        
        <div className='flex'>
            
        
        <div className="relative flex flex-col justify-center h-screen p-4 mt-10">
            <div className="relative w-1/2 mr-[40rem]">
                <video
                    autoPlay
                    controls
                    src={decodeURIComponent(videoUrl)}
                    className="w-full rounded-lg shadow-lg"
                    controlsList="nodownload" // Disable download button in some browsers
                    style={{
                        userSelect: 'none', // Disable text selection
                    }}
                ></video>
                {/* Overlay to deter easy recording */}
                <div 
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ 
                        pointerEvents: 'none', 
                        opacity: 0.3, // Slightly visible watermark
                        zIndex: 10 
                    }}
                >
                    <span className="text-white text-xl font-bold">Watermark</span>
                </div>
            </div>
            {/* Video Description */}
            <div className="mt-4 w-1/2 text-left p-4 bg-light rounded-lg shadow-md mr-[40rem]">
                <h2 className="text-4xl font-bold mb-2">How to Start Trading in Stock Market? | Intraday Trading for Beginners</h2>
                <p className="text-gray-700">
                This video is a masterclass on 'intraday trading for beginners' and 'intraday trading kaise karen in hindi'. It explains all intraday trading concepts using live trading demo in intraday stocks. It covers many benefits of intraday trading like margin, short selling etc.

                </p>
            </div>
        </div>

        <div className='mr-[200px]'>
            <h1>Hello its me how are you</h1>
        </div>
        </div>
    );
};

export default VideoPlayer;
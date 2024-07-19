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
        <div className="relative flex items-center justify-center h-screen p-4">
            <div className="relative w-1/2 mx-auto -mt-52">
                <video
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
        </div>
    );
};

export default VideoPlayer;

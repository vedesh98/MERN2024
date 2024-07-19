import React from 'react';
import { useNavigate } from 'react-router-dom';
import video1 from '../assets/videos/ted.mp4';

const ServicePage = () => {
    const navigate = useNavigate();

    const courses = [
      { id: 1, title: 'Stock Market Basics', thumbnail: 'https://i.ytimg.com/vi/8rIviI0ZKNA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAVta4Aepo1fzXCXNljA_4KAxmz7Q', videoUrl: video1 },
      { id: 2, title: 'Technical Analysis 101', thumbnail: 'https://i.ytimg.com/vi/8rIviI0ZKNA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAVta4Aepo1fzXCXNljA_4KAxmz7Q', videoUrl: 'video2.mp4' },
      { id: 3, title: 'Trading Strategies', thumbnail: 'https://i.ytimg.com/vi/8rIviI0ZKNA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAVta4Aepo1fzXCXNljA_4KAxmz7Q', videoUrl: 'video3.mp4' },
      { id: 4, title: 'Investment Tips', thumbnail: 'https://i.ytimg.com/vi/8rIviI0ZKNA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAVta4Aepo1fzXCXNljA_4KAxmz7Q', videoUrl: 'video4.mp4' },
      { id: 5, title: 'Understanding ETFs', thumbnail: 'https://i.ytimg.com/vi/8rIviI0ZKNA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAVta4Aepo1fzXCXNljA_4KAxmz7Q', videoUrl: 'video5.mp4' },
      { id: 6, title: 'Stock Analysis Tools', thumbnail: 'https://i.ytimg.com/vi/8rIviI0ZKNA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAVta4Aepo1fzXCXNljA_4KAxmz7Q', videoUrl: 'video6.mp4' },
      { id: 7, title: 'Fundamental Analysis', thumbnail: 'https://i.ytimg.com/vi/8rIviI0ZKNA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAVta4Aepo1fzXCXNljA_4KAxmz7Q', videoUrl: 'video7.mp4' },
      { id: 8, title: 'Market Trends', thumbnail: 'https://i.ytimg.com/vi/8rIviI0ZKNA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAVta4Aepo1fzXCXNljA_4KAxmz7Q', videoUrl: 'video8.mp4' },
      { id: 9, title: 'Options Trading', thumbnail: 'https://i.ytimg.com/vi/8rIviI0ZKNA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAVta4Aepo1fzXCXNljA_4KAxmz7Q', videoUrl: 'video9.mp4' },
      { id: 10, title: 'Advanced Charting', thumbnail: 'https://i.ytimg.com/vi/8rIviI0ZKNA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAVta4Aepo1fzXCXNljA_4KAxmz7Q', videoUrl: 'video10.mp4' },
      { id: 11, title: 'Forex Trading Basics', thumbnail: 'https://i.ytimg.com/vi/8rIviI0ZKNA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAVta4Aepo1fzXCXNljA_4KAxmz7Q', videoUrl: 'video11.mp4' },
      { id: 12, title: 'Investment Strategies', thumbnail: 'https://i.ytimg.com/vi/8rIviI0ZKNA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAVta4Aepo1fzXCXNljA_4KAxmz7Q', videoUrl: 'video12.mp4' },
    ];

    const handleThumbnailClick = (videoUrl) => {
        navigate(`/video/${encodeURIComponent(videoUrl)}`);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Our Courses</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {courses.map(course => (
                    <div 
                        key={course.id} 
                        className="cursor-pointer"
                        onClick={() => handleThumbnailClick(course.videoUrl)}
                    >
                        <img 
                            src={course.thumbnail} 
                            alt={course.title} 
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                        <p className="mt-2 text-center text-lg font-medium">{course.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicePage;

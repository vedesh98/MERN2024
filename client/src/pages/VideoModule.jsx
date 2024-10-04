import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import CourseHeader from '../components/CourseHeader'
import CourseOverview from '../components/CourseOverview'
import ModuleList from '../components/ModuleList';
import VideoPage from '../components/VideoPage';
import ModuleItem from '../components/ModuleItem';


const VideoModule = () => {
    const { videoUrl } = useParams();
    const decodedVideoUrl = decodeURIComponent(videoUrl);
  return (
    <div className='container mx-auto p-4'>
   <div className="flex justify-center">
    <CourseHeader />
  </div>
    <CourseOverview/>
    <ModuleList/>
    </div>
  )
}

export default VideoModule


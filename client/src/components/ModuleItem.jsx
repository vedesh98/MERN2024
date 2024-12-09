import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faBook, faQuestionCircle, faComment, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams } from 'react-router-dom';

const ModuleItem = ({ title, content }) => {
  const { videoUrl } = useParams(); // Gets videoUrl from URL params
  const navigate = useNavigate();
  const decodedVideoUrl = decodeURIComponent(videoUrl || ''); // Decodes video URL if it exists

  const [isOpen, setIsOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const handlePreviewClick = () => {
    navigate(`/video/videoplayer`);
  };

  return (
    <div className="border-t-2 border-gray-200">
      <button
        onClick={toggleAccordion}
        className="w-full flex justify-between items-center p-8 text-left text-lg font-semibold text-gray-900 hover:bg-blue-50 hover:rounded-lg focus:outline-none"
      >
        {title}
        <span>{isOpen ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="p-4 text-gray-700 bg-white"
          >
            <p className="mb-4">
              This module will focus on leader behaviors and different leadership styles. You will learn about the TREAT leadership framework and the different leadership styles proposed by the TREAT leadership theory. The TREAT framework has been developed based on rigorous research, and it highlights the leadership competencies that should be developed in leaders of new-age organizations. You will also gain insight into how the framework highlights the importance of five behavioral competencies for leaders: task orientation, relation orientation, empowerment, authenticity, and team building. Finally, the module elaborates on each one of these behavioral competencies and delves deep into how you can develop and incorporate these into your behavior.
            </p>
            <div>
              <h4 className="text-lg font-semibold mb-2">What's included</h4>
              <div className="flex flex-wrap gap-6 mb-4">
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faVideo} className="text-blue-500 text-xl" />
                  <span>15 videos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faBook} className="text-green-500 text-xl" />
                  <span>6 readings</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faQuestionCircle} className="text-yellow-500 text-xl" />
                  <span>4 quizzes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faComment} className="text-purple-500 text-xl" />
                  <span>1 discussion prompt</span>
                </div>
              </div>
              <motion.button
                onClick={toggleShowMore}
                className="text-blue-600 hover:underline flex items-center"
                whileTap={{ scale: 0.95 }} // Slightly scale down the button on click
                animate={{ opacity: showMore ? 1 : 0.8 }}
                transition={{ duration: 0.3 }}
              >
                {showMore ? 'Show less' : 'Show more info'}
                <FontAwesomeIcon
                  icon={showMore ? faChevronUp : faChevronDown}
                  className="ml-2"
                />
              </motion.button>
              <AnimatePresence>
                {showMore && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4"
                  >
                    <h5 className="text-lg font-semibold mb-2">Videos</h5>
                    <p>Total 91 minutes</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        Leadership Challenges for the New-age Organizations • 6 minutes • 
                        <h1 onClick={handlePreviewClick} className="text-blue-600 hover:underline">Preview module</h1>
                      </li>
                      {/* Add other video items here */}
                    </ul>
                    {/* Readings, Quizzes, and Discussion Prompts */}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ModuleItem;

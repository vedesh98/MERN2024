import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const CourseContent = () => {
  // State to manage whether the full content is shown or not
  const [showFullContent, setShowFullContent] = useState(false);

  // Function to toggle content display
  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <div className="flex justify-center">
      <div className="relative mt-6 text-center border border-dark p-8 w-1/2">
        <h3 className="text-3xl font-semibold text-gray-800">What you'll learn</h3>

        

        {/* Framer Motion element for animation */}
        <motion.ul
          className={`mt-4 text-gray-700 text-sm p-4 ${
            showFullContent ? 'grid grid-cols-2 gap-4' : 'grid grid-cols-2 gap-x-10 gap-y-0'
          }`}
          initial={{ height: 0 }}
          animate={{ height: showFullContent ? 'auto' : '160px' }} // Adjust '160px' to match the collapsed height
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          style={{ overflow: 'hidden' }} // Ensuring overflow is hidden to animate height properly
        >
          {/* List Items */}
          <li className="flex items-center mb-4 text-left">
            <span className="text-green-500 mr-2">✔</span> Completely understand how the stock market works.
          </li>
          <li className="flex items-center mb-4 text-left">
            <span className="text-green-500 mr-2">✔</span> Know the process that a company goes through to become a Publicly Traded Company.
          </li>
          <li className="flex items-center mb-4 text-left">
            <span className="text-green-500 mr-2">✔</span> Know the history of the Stock Market and its Evolution.
          </li>
          <li className="flex items-center mb-4 text-left">
            <span className="text-green-500 mr-2">✔</span> Master Technical Analysis: Candlestick Patterns, Chart Patterns, Volume, and Technical Indicators.
          </li>
          <li className="flex items-center mb-4 text-left">
            <span className="text-green-500 mr-2">✔</span> Filter out the noise, get to know what our traders use and how they think. Get insight from a professional trader's standpoint.
          </li>
          <li className="flex items-center mb-4 text-left">
            <span className="text-green-500 mr-2">✔</span> How to send Orders and different Order Types.
          </li>

          {/* Conditionally rendered content for the second column */}
          {showFullContent && (
            <>
              <li className="flex items-center mb-4 text-left">
                <span className="text-green-500 mr-2">✔</span> Different Exchanges: NYSE, NASDAQ & AMEX.
              </li>
              <li className="flex items-center mb-4 text-left">
                <span className="text-green-500 mr-2">✔</span> Risk Management: how to reduce losses and manage overall portfolio risk.
              </li>
              <li className="flex items-center mb-4 text-left">
                <span className="text-green-500 mr-2">✔</span> Money Management: how to manage risk on each position, how many shares to buy, and where to take a loss.
              </li>
              <li className="flex items-center mb-4 text-left">
                <span className="text-green-500 mr-2">✔</span> How to short sell so you can make money if the market goes down.
              </li>
              <li className="flex items-center mb-4 text-left">
                <span className="text-green-500 mr-2">✔</span> Trading Psychology: become an Expert in human Emotions and the different Biases that affect people when Money is involved.
              </li>
            </>
          )}
        </motion.ul>

        {/* Toggle Button */}
        <div className="flex justify-center items-center mt-4 relative z-20">
          <button
            onClick={toggleContent}
            className="bg-transparent text-dark py-2 px-4  flex items-center"
          >
            {showFullContent ? 'Show Less' : 'Show More'}
            <FontAwesomeIcon
              icon={showFullContent ? faChevronUp : faChevronDown}
              className="ml-2"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseContent;

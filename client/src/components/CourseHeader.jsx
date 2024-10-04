import React from 'react';

const CourseHeader = () => {
  return (
    <header className="bg-gray-300 border mb-11 rounded-sm border-dark flex flex-col items-center justify-center  shadow-md px-36 py-8 w-full">
      <h1 className="mb-4 text-4xl font-bold text-dark capitalize">The Complete Foundation Stock Trading Course</h1>
      <p className="mt-2 mb-6 text-lg text-dark">Offered by: Bgryt Academy</p>
      <button className="mt-0 bg-dark text-light hover:text-dark py-2 px-14 rounded hover:bg-light hover:border hover:border-dark">
        Enroll Now
        <div className="text-sm mt-0">
    Starts Sept 1st
  </div>
      </button>
    </header>
  );
};

export default CourseHeader;

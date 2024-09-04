import React from 'react';
import ModuleItem from './ModuleItem';

const modules = [
  { title: 'Module 1: The Basics and The Market', content: 'Learn the basics of leadership and its importance in modern organizations.' },
  { title: 'Module 2: Orders and Prices', content: 'Explore different decision-making strategies and how to apply them effectively.' },
  { title: 'Module 3: Technical Analysis', content: 'Learn how to effectively manage and lead diverse teams in various scenarios.' },
  { title: 'Module 4: Risk Management and Money Management', content: 'Apply your leadership skills in real-world scenarios and case studies.' },
  { title: 'Module 5: Trading Psychology', content: 'Apply your leadership skills in real-world scenarios and case studies.' },
  { title: 'Module 6: Bonus Lecture', content: 'Apply your leadership skills in real-world scenarios and case studies.' },
];

const ModuleList = () => {
  return (
    <section className="p-8 flex justify-center mb-40">
      <div className="w-1/2">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Course Modules</h2>
        <div className="space-y-0 border-2 border-gray-200 rounded-lg p-4">
          {modules.map((module, index) => (
            <ModuleItem key={index} title={module.title} content={module.content} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModuleList;

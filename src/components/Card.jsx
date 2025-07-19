import React from 'react';

const Card = ({ imageUrl, title, description, linkUrl }) => {
  return (
    <div className="w-full max-w-xs bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 transform transition-all duration-300 hover:scale-[1.02] shadow-md hover:shadow-indigo-500 transition duration-300">
      <a href={linkUrl || "#"} target="_blank" rel="noopener noreferrer">
        <div className="relative">
          <img
            className="w-full h-40 object-cover"
            src={imageUrl || "https://placehold.co/400x240/E0F2F7/2C3E50?text=Image"}
            alt={title}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/400x240?text=Image+Not+Found";
            }}
          />
        </div>
      </a>
      <div className="p-4">
        <h5 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{title}</h5>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{description}</p>
        <a
          href={linkUrl || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition"
        >
          View Project
          <svg className="ml-2 w-3.5 h-3.5" fill="none" viewBox="0 0 14 10" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Card;

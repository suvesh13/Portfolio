import React from 'react';

const skills = [
  { category: "Languages", items: ["C", "Java", "Python", "JavaScript"] },
  { category: "Frontend", items: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"] },
  { category: "Backend", items: ["Node.js", "Express.js"] },
  { category: "Database", items: ["MongoDB (with Mongoose)", "SQL"] },
  { category: "Full-Stack", items: ["MERN Stack (MongoDB, Express, React, Node)"] },
  { category: "UI/UX & Design", items: ["Figma", "Responsive Web Design", "Wireframing"] },
  { category: "Version Control", items: ["Git", "GitHub"] },
  { category: "Authentication & Security", items: ["JWT", "Bcrypt.js"] },
  { category: "APIs", items: ["RESTful APIs", "Postman"] },
  { category: "Real-Time Communication", items: ["Socket.io"] },
  {
    category: "Problem Solving",
    items: [
      { name: "LeetCode", url: "https://leetcode.com/u/Suvesh22/" },
      { name: "CodeChef", url: "https://www.codechef.com/users/suvesh22" },
      { name: "HackerRank", url: "https://www.hackerrank.com/suveshrajput1910" },
    ],
    isLink: true,
  },
];

const Skill = () => {
  return (
   <div className="min-h-screen bg-black text-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto bg-gray-900 rounded-3xl p-8 md:p-12 border border-gray-700 shadow-lg transition-transform duration-300 hover:scale-[1.01]">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-indigo-400 mb-12 tracking-tight leading-tight">
          My <span className="text-blue-400">Technical</span> Skills
        </h2>
        <div className="space-y-8 md:space-y-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl border border-gray-700 group hover:border-indigo-500 hover:shadow-md transition duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-4 pb-2 relative inline-block group-hover:text-indigo-400 transition-colors duration-300">
                {skill.category}
                <span className="absolute left-0 bottom-0 h-1 bg-indigo-500 w-0 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </h3>

              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3 text-gray-300 text-lg">
                {skill.isLink
                  ? skill.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700 hover:text-indigo-300 transition-colors duration-200"
                      >
                        <svg className="w-5 h-5 text-indigo-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-blue-400"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))
                  : skill.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700 hover:text-indigo-300 transition-colors duration-200"
                      >
                        <svg className="w-5 h-5 text-indigo-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;

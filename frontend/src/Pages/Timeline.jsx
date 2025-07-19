import React from 'react';

const Timeline = () => {
  const timelineData = [
    {
      year: '2019',
      title: 'Class 10th | SSC',
      location: 'Solapur, India',
      descriptions: [
        'My foundation in academics and discipline was built at Haribhai Deokaran High School, where I developed a strong interest in science and mathematics.',
        'This is where my curiosity for technology first began.',
        'Achieved 75%'
      ],
      type: 'education'
    },
    {
      year: '2019-2021',
      title: 'Class 12th | TSBIE',
      location: 'Hyderabad, India',
      descriptions: [
        'At Narayana Junior College, I deepened my knowledge in physics, chemistry, and mathematics.',
        'The rigorous academic environment helped me build a strong analytical mindset and shaped my path toward engineering.',
        'Achieved 85%'
      ],
      type: 'education'
    },
    {
      year: '2021-2025',
      title: "BE Bachelor's Degree in Computer Science",
      location: 'Hyderabad, India',
      descriptions: [
        "Completed my Bachelor's Degree in Computer Science.",
        'Graduated with 7.5 CGPA'
      ],
      type: 'education'
    },
    {
      year: '2023 - 2024',
      title: 'Project School | KMEC',
      location: 'Hyderabad, India',
      descriptions: [
        'Been part of a wonderful initiative by KMEC where I have worked and projects',
        'Worked under another amazing mentor the following year Hari Babu Sir (Associate Professor) KMEC under a project called SkinGPT'
      ],
      type: 'project'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 font-sans mt-2">
      <div className="max-w-5xl mx-auto w-full">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 text-green-400">
          My Journey
        </h1>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1.5 bg-gray-700 h-full rounded-full hidden md:block"></div>

          {timelineData.map((item, index) => (
            <div key={index} className="mb-12 flex flex-col md:flex-row items-center w-full">
              {/* Content Box */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-14' : 'md:pl-14 md:order-2'}`}>
                <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 transition-all duration-300 hover:shadow-xl hover:border-green-500">
                  <div className="flex justify-between items-start mb-3">
                    <h2 className="text-xl sm:text-2xl font-semibold text-white">{item.title}</h2>
                    <span className="text-green-400 text-sm sm:text-base font-bold ml-4 whitespace-nowrap">{item.year}</span>
                  </div>
                  <p className="text-gray-400 text-sm italic mb-3">{item.location}</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {item.descriptions.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Timeline Dot */}
              <div className="hidden md:flex w-6 h-6 rounded-full bg-green-600 border-4 border-gray-700 absolute left-1/2 transform -translate-x-1/2 z-10"></div>

              {/* Spacing Div */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:order-2' : 'md:pr-14'}`}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;

import React from 'react';

const Buttom = () => {
  return (
    <footer className="bg-black text-white text-center py-12 px-4">
      <div className="space-y-6">
        {/* Introduction */}
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold">Hello I'm Suvesh 👋</h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-green-500 mt-2">
            The Creative Designer and a Cool Developer
          </h3>
        </div>

        {/* Subtext */}
        <p className="text-gray-300 text-lg">
          Connect with me on Socials or Schedule a meeting with me
        </p>

        {/* Social Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {[
            { name: 'Instagram', link: 'https://www.instagram.com/suvesh_rajput/', hover: 'hover:text-pink-400' },
            { name: 'X', link: 'https://x.com/Suvesh__Rajput', hover: 'hover:text-blue-400' },
            { name: 'CodeChef', link: 'https://www.codechef.com/users/suvesh22', hover: 'hover:text-stone-600' },
            { name: 'LinkedIn', link: 'https://www.linkedin.com/in/suvesh-rajput-a8b965302/', hover: 'hover:text-blue-500' },
            { name: 'HackerRank', link: 'https://www.hackerrank.com/suveshrajput1910', hover: 'hover:text-green-400' },
            { name: 'Leetcode', link: 'https://leetcode.com/u/Suvesh22/', hover: 'hover:text-yellow-400' },
            { name: 'GitHub', link: 'https://github.com/suvesh13', hover: 'hover:text-gray-400' },
            { name: 'Whatsapp', link: 'https://wa.me/919890950287', hover: 'hover:text-green-600' },
      
          ].map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-5 py-2 rounded-lg border border-white text-white font-medium transition duration-200 ${social.hover}`}
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Buttom;

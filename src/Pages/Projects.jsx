import React from "react";
import Card from "../components/Card";

import linguistic from "../assets/Lingustic.jpg";
import book from "../assets/BookStore.png";
import deepfake from "../assets/Deepfack.png";
import enquiry from "../assets/Enquiry.png";
import recipe from "../assets/recipe.png";

function Projects() {
  const projects = [
    {
      title: "Deepfake Detection",
      description: "React + YOLO-based system to detect fake images and videos using ML models.",
      imageUrl: deepfake,
      linkUrl: "https://github.com/suvesh13/MajorProject",
    },
    {
      title: "Linguistic Precision Tool",
      description: "Grammar and spelling correction tool using Flask and ML to enhance writing clarity.",
      imageUrl: linguistic,
      linkUrl: "https://github.com/suvesh13/Linguistic-Precision-Checking-Application",
    },
    {
      title: "BookStore App",
      description: "Full-stack book browsing app with secure login using MERN stack and REST APIs.",
      imageUrl: book,
      linkUrl: "https://github.com/suvesh13/BookStore",
    },
    {
      title: "Realtime Chat App",
      description: "Built a secure, responsive full-stack chat application enabling real-time messaging using Socket.io.",
      imageUrl: "https://placehold.co/400x240?text=Chat+App",
      linkUrl: "https://github.com/suvesh13/chat-application",
    },
    {
      title: "Recipe Sharing App",
      description: "MERN stack recipe-sharing app with JWT auth, full CRUD, and personal favorite recipes.",
      imageUrl: recipe,
      linkUrl: "https://github.com/suvesh13/FoodRecipe",
    },
    {
      title: "User Enquiry Form",
      description: "Full-stack CRUD enquiry form with MERN. Includes real-time edit, delete, and validation.",
      imageUrl: enquiry,
      linkUrl: "https://github.com/suvesh13/Enquiry_Form",
    },
  ];

  return (
    <div className="min-h-screen mt-2 bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 px-6 font-sans">
      <div className="max-w-6xl mx-auto border border-blue-700 rounded-2xl shadow-2xl p-6 sm:p-10 lg:p-16 backdrop-blur-sm bg-opacity-80">
        
        {/* Fancy heading */}
        <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          My Projects
        </h2>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="w-full transform hover:scale-[1.02] transition duration-300 hover:shadow-lg hover:shadow-indigo-500/20"
            >
              <Card
                imageUrl={proj.imageUrl || "https://placehold.co/400x240?text=No+Image"}
                title={proj.title}
                description={proj.description}
                linkUrl={proj.linkUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;

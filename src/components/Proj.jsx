import React from "react";
import Card from "../components/Card";
import { motion } from "framer-motion";

import linguistic from "../assets/Lingustic.jpg";
import book from "../assets/BookStore.png";
import deepfake from "../assets/Deepfack.png";
import enquiry from "../assets/Enquiry.png";
import recipe from "../assets/recipe.png";

function Proj() {
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
      linkUrl: "hhttps://github.com/suvesh13/chat-application",
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
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
      }}
      className="min-h-screen bg-black text-white py-10 px-4 sm:px-6 lg:px-8 font-sans mt-10"
    >
      <div className="max-w-6xl mx-auto w-full border border-blue-700 rounded-2xl shadow-xl p-6 sm:p-10 lg:p-16">
        <h2 className="text-3xl font-bold text-center text-indigo-400 mb-10">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <Card
                imageUrl={proj.imageUrl || "https://placehold.co/400x240?text=No+Image"}
                title={proj.title}
                description={proj.description}
                linkUrl={proj.linkUrl}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Proj;
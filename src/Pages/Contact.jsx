import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";

import logo from "../assets/logo.png";
import linkedin from "../assets/linkedin.png";
import contact_bg from "../assets/contact_bg.jpg";
import Lindekin from "../assets/linkedin.png"
import insta from "../assets/insta.jpg"
import whatapp from "../assets/whatapp.jpg"

function Contact() {
  const form = useRef();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    message: "",
    email: "",
    subject: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qlp55pk",
        "template_u9bmycd",
        form.current,
        "j6Fgp0d-vdpO2IFKk"
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          alert("Thank you for your message! We'll get back to you shortly.");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error("Email send failed:", error.text);
          alert("Oops! Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8 font-sans mt-10">
      <div className="w-full">
        {/* Header */}
        <header
          className="relative w-full h-96 bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${contact_bg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80" />

          <nav className="absolute top-0 left-0 z-20 w-full flex items-center justify-between p-6">
            <div className="rounded-full overflow-hidden h-12 w-12">
              <Link to="/">
                <img src={logo} alt="Logo" className="h-full w-full object-cover" />
              </Link>
            </div>
            <div className="flex space-x-4 text-white text-2xl">
              <a
                href="https://www.linkedin.com/in/suvesh-rajput-a8b965302/"
                className="hover:opacity-80 transition duration-300"
              >
                <img src={linkedin} alt="LinkedIn" width="35" height="35" />
              </a>
            </div>
          </nav>

          <div className="relative z-10 text-white text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hello.</h1>
            <p className="text-3xl md:text-4xl">
              Let's work together <br /> on your next project.
            </p>
          </div>
        </header>

        {/* Contact Section */}
        <section className="bg-gray-900 p-8 md:p-16 rounded-b-lg shadow-xl border-t border-gray-700">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:space-x-16">
            {/* Email Info */}
            <div className="flex-1 mb-8 md:mb-0">
              <div className="flex items-center text-purple-400 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail mr-3"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <h2 className="text-2xl font-semibold">
                  For commissions and project inquiries, please email:
                </h2>
              </div>
              <p className="text-purple-300 text-lg mb-2">
                <a
                  href="mailto:suveshrajput123@gmail.com"
                  className="text-purple-400 font-bold hover:underline"
                >
                  suveshrajput123@gmail.com
                </a>
              </p>
              <p className="text-purple-300 text-lg">or Send a message via this form ,</p>
              <br />

             <span className="flex items-center  gap-4">
              <a href="https://www.linkedin.com/in/suvesh-rajput-a8b965302/">
                <img src={Lindekin} alt="LinkedIn" width="30" height="30" />
              </a>
              <a href="https://www.instagram.com/suvesh_rajput/">
                <img src={insta} alt="Instagram" width="30" height="30" />
              </a>
              <a href="https://wa.me/919890950287">
                <img src={whatapp} alt="" width="30" height="30" />
              </a>
            </span>
            </div>

            {/* Contact Form */}
            <div className="flex-1 w-full">
              <h2 className="text-3xl font-bold text-purple-400 mb-6">Contact</h2>
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-300">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-300">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-300">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-300">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-300">
                    Write a message *
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white resize-y"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-3 bg-purple-700 text-white font-semibold rounded-full shadow-md hover:bg-purple-800 transition duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;

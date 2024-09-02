import React from 'react';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gray-900 text-white min-h-screen">
      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        React Developer Hiring Assignment
      </motion.h1>
      <motion.p
        className="text-lg mb-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        This web application showcases a list of courses and their details using React. It includes a course listing page, a detailed course page, and a student dashboard for displaying enrolled courses. The project demonstrates state management, user interaction, and responsive design techniques.
      </motion.p>
      <motion.ul
        className="list-disc list-inside mb-4"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <li>Course Listing Page: Displays a list of courses with basic information and search functionality.</li>
        <li>Course Details Page: Shows detailed information about a selected course.</li>
        <li>Student Dashboard: Allows students to view and manage their enrolled courses.</li>
      </motion.ul>
      <motion.p
        className="text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        Submitted By: <strong>Prashant Malviya</strong>
      </motion.p>
      <motion.p
        className="text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        Submitted To: <strong>Alemeno</strong>
      </motion.p>
    </div>
  );
};

export default HomePage;

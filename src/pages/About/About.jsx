import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gray-900 text-white min-h-screen">
      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Us
      </motion.h1>
      <motion.p
        className="text-lg mb-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Welcome to our course management platform! This website is designed to help users explore and enroll in a variety of courses. Our platform provides detailed information about each course, including the instructor, schedule, and syllabus.
      </motion.p>
      <motion.ul
        className="list-disc list-inside mb-4"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <li>Comprehensive course listing with search functionality.</li>
        <li>Detailed course pages that provide in-depth information.</li>
        <li>A personalized student dashboard to manage enrolled courses.</li>
        <li>Real-time updates on course availability and progress.</li>
      </motion.ul>
      <motion.p
        className="text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        Our mission is to provide a seamless and efficient learning experience for all users. We continually strive to improve our platform with new features and courses.
      </motion.p>
    </div>
  );
};

export default About;

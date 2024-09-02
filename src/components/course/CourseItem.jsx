import React from 'react';
import { Link } from 'react-router-dom';

const CourseItem = ({ course }) => {
  return (
    <div className="p-5 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
      {/* Image Section */}
      <div className="mb-4">
        <img
          src={course.thumbnail}
          alt="Course Image"
          className="w-full h-48 object-cover rounded-md"
        />
      </div>

      {/* Course Name */}
      <h2 className="text-xl font-bold text-gray-800 mb-2">
        {course.name}
      </h2>

      {/* Instructor Name */}
      <p className="text-gray-600 mb-4">
        <strong>Instructor:</strong> {course.instructor}
      </p>

      {/* View Details Link */}
      <Link
        to={`/courses/${course.id}`}
        className="text-blue-500 font-semibold hover:text-blue-600"
      >
        View Details
      </Link>
    </div>
  );
};

export default CourseItem;

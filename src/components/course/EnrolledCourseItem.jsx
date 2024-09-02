import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const EnrolledCourseItem = ({ course }) => {
  const courseState = useSelector((state) => state.enrolledCourses.courses[course.id] || { progress: 0, isCompleted: false });

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
      {/* Course Thumbnail */}
      <div className="mb-4 overflow-hidden rounded-md">
        <img
          src={course.thumbnail}
          alt="Course Image"
          className="w-full h-40 object-cover"
        />
      </div>

      {/* Course Title */}
      <h2 className="text-xl font-bold text-gray-800 mb-2 truncate">{course.name}</h2>

      {/* Instructor Name */}
      <p className="text-gray-600 mb-4">Instructor: <span className="font-medium">{course.instructor}</span></p>

      {/* Progress Bar */}
      <div className="mt-2 mb-4">
        <div className="w-full bg-gray-300 rounded-full h-4">
          <div
            className="bg-blue-600 h-4 rounded-full"
            style={{ width: `${courseState.progress}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600 mt-1">
          {courseState.isCompleted ? 'Status: Completed' : 'Status: In Progress'}
        </p>
      </div>

      {/* View Details Link */}
      <Link
        to={`/enrolled-courses/${course.id}`}
        className="text-blue-500 font-semibold mt-4 inline-block hover:underline"
      >
        View Details
      </Link>
    </div>
  );
};

export default EnrolledCourseItem;

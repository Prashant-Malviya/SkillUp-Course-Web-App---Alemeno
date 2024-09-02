import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCourseCompletion } from '../../redux/slice/enrolledCourseSlice';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const EnrolledCourseDetail = ({ course }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Retrieve the course state from Redux, initializing if not present
  const courseState = useSelector((state) => state.enrolledCourses.courses[course.id] || { progress: 0, isCompleted: false });

  if (!course) {
    return <div>Loading...</div>;
  }

  const handleToggleCompletion = () => {
    dispatch(toggleCourseCompletion(course.id));
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)} // Navigate back to the previous page
        className="px-4 py-2 mb-4 bg-gray-800 text-white rounded hover:bg-gray-700"
      >
        Back
      </button>

      {/* Course Image */}
      <div className="mb-6">
        <img
          src={course.thumbnail}
          alt="Course Image"
          className="w-auto h-64 object-cover rounded-md shadow-md"
        />
      </div>

      {/* Course Details */}
      <div className="mt-2">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">{course.name}</h1>
        <p className="text-gray-700 mb-4">
          <strong>Instructor:</strong> {course.instructor}
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Description:</strong> {course.description}
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Enrollment Status:</strong> {course.status}
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Duration:</strong> {course.duration}
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Schedule:</strong> {course.schedule}
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Location:</strong> {course.location}
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Prerequisites:</strong>
          <ul className="list-disc list-inside mt-2">
            {course.prerequisites.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </p>

        {/* Syllabus Section */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Syllabus</h2>
          <div className="border border-gray-200 rounded-lg">
            {course.syllabus.map((item, index) => (
              <div key={index} className="p-4 border-b border-gray-200">
                <h3 className="font-medium text-lg text-blue-600">Week {item.week}: {item.topic}</h3>
                <p className="text-gray-700">{item.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Progress and Completion Button */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Progress</h2>
          <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
            <div className="bg-blue-500 h-4 rounded-full" style={{ width: `${courseState.progress}%` }}></div>
          </div>
          <button
            onClick={handleToggleCompletion}
            className={`px-4 py-2 rounded ${courseState.isCompleted ? 'bg-green-500' : 'bg-blue-500'} text-white font-semibold`}
          >
            {courseState.isCompleted ? 'Undo Completion' : 'Mark as Completed'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnrolledCourseDetail;

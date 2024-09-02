// src/pages/CoursesPage.jsx
import React from 'react';
import CourseList from '../../components/course/CourseList';

const CoursesPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Available Courses</h1>
      <CourseList /> 
    </div>
  );
};

export default CoursesPage;

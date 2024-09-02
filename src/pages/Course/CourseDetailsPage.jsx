// src/pages/CourseDetailsPage.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CourseDetail from '../../components/course/CourseDetail';

const CourseDetailsPage = () => {
  const { courseId } = useParams();
  const searchQuery = useSelector((state) => state.search.query); // Get search query from Redux
  const allCourses = useSelector((state) => state.courses); // Assuming courses are stored in an array
  const filteredCourses = allCourses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const course = filteredCourses.find((course) => course.id === Number(courseId));

  return (
    <div className="container mx-auto p-4">
      <CourseDetail course={course} />
    </div>
  );
};

export default CourseDetailsPage;

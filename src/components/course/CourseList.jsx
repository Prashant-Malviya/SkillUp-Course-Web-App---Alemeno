// src/components/CourseList.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import CourseItem from './CourseItem';

const CourseList = () => {
  const searchQuery = useSelector((state) => state.search.query); 
  console.log("search query from courselist", searchQuery);
  
  const allCourses = useSelector((state) => state.courses); 

  // Filter courses based on the search query
  const filteredCourses = allCourses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredCourses.length > 0 ? (
        filteredCourses.map((course) => (
          <CourseItem key={course.id} course={course} />
        ))
      ) : (
        <p>No courses found</p>
      )}
    </div>
  );
};

export default CourseList;

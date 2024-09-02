import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import EnrolledCourseDetail from '../../components/course/EnrolledCourseDetail';

const EnrolledCourseDetailsPage = () => {
  const { courseId } = useParams();

  // Update to ensure course is retrieved correctly
  const course = useSelector((state) =>
    state.courses.find((course) => course.id === Number(courseId))
  );

  // Check if course is undefined
  if (!course) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="container mx-auto p-4">
      <EnrolledCourseDetail course={course} />
    </div>
  );
};

export default EnrolledCourseDetailsPage;

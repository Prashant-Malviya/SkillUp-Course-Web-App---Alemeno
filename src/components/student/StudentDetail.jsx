import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import EnrolledCourseItem from '../course/EnrolledCourseItem';

const StudentDetail = () => {
  const { id } = useParams();
  const courses = useSelector((state) => state.courses);

  // Find the student based on the id
  const allStudents = courses.flatMap(course => course.students);
  const student = allStudents.find(student => student.id === parseInt(id));

  if (!student) {
    return <div className="text-center text-red-500 mt-4">Student not found</div>;
  }

  // Find the courses this student is enrolled in
  const enrolledCourses = courses.filter(course =>
    student.enrolledCourses.includes(course.id)
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{student.name}</h2>
        <p className="text-xl text-gray-600 mb-4">
          <span className="font-semibold">Email:</span> {student.email}
        </p>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Enrolled Courses</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {enrolledCourses.map(course => (
          <EnrolledCourseItem key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default StudentDetail;

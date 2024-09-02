import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const StudentDashboard = () => {
  const courses = useSelector((state) => state.courses);


  const allStudents = courses.flatMap(course => course.students);


  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 10;


  const totalPages = Math.ceil(allStudents.length / studentsPerPage);


  const startIndex = (currentPage - 1) * studentsPerPage;
  const currentStudents = allStudents.slice(startIndex, startIndex + studentsPerPage);

  
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Student Dashboard</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Student Name
              </th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Courses
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentStudents.map(student => (
              <tr key={student.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {student.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {student.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">
                  <Link to={`/student/${student.id}`} className="hover:underline">
                    View Courses
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 bg-gray-200 text-gray-600 font-semibold rounded-md ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-300'}`}
        >
          Previous
        </button>
        
        <span className="text-sm text-gray-600">
          Page {currentPage} of {totalPages}
        </span>
        
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 bg-gray-200 text-gray-600 font-semibold rounded-md ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-300'}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StudentDashboard;

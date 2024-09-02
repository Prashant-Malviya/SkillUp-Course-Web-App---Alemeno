import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CourseDetailsPage from "./pages/Course/CourseDetailsPage";
import StudentDashboardPage from "./pages/Dashboard/DashboardPage";
import { useSelector, useDispatch } from "react-redux";
import { addCourses } from "./redux/slice/courseSlice";
import axios from "axios"; 
import NavbarMenu from "./components/navbar/navbar";
import StudentDetailPage from "./pages/Student Details/StudentDetailPage";
import EnrolledCourseDetailsPage from "./pages/Course/EnrolledCourseDetailsPage";
import CoursesPage from "./pages/Course/CoursePage";
import HomePage from "./pages/home/HomePage";
import ContactUs from "./pages/Contact Us/ContactUs";
import About from "./pages/About/About";

const App = () => {
  const dispatch = useDispatch();

  const fetchCourses = async () => {
    try {
      const response = await axios.get(
        "https://mocki.io/v1/202dbfeb-b1b3-4925-9742-0fffc336ea3b"
      );
      const data = response.data; 
      console.log("data", data);
      return data;
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    const getCourses = async () => {
      const coursesData = await fetchCourses();
      if (coursesData) {
        dispatch(addCourses(coursesData));
      }
    };
    getCourses();
  }, [dispatch]);

  const courses = useSelector((state) => state.courses); 
  console.log("courses from appjs file", courses);

  return (
    <Router>
      <NavbarMenu />
      <div className="mt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:courseId" element={<CourseDetailsPage />} />
          <Route
            path="/enrolled-courses/:courseId"
            element={<EnrolledCourseDetailsPage />}
          />
          <Route path="/dashboard" element={<StudentDashboardPage />} />
          <Route path="/student/:id" element={<StudentDetailPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

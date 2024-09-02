// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import courseSlice from './slice/courseSlice';
import enrolledCourseSlice from './slice/enrolledCourseSlice';
import searchSlice from './slice/searchSlice';

export const store = configureStore({
  reducer: {
    courses: courseSlice,
    enrolledCourses: enrolledCourseSlice,
    search: searchSlice, // Ensure this line is present
  },
});

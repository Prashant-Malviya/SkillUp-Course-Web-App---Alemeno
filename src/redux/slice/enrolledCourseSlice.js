// src/redux/slice/enrolledCourseSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  courses: {}, // This will hold course states dynamically keyed by course ID
};

const enrolledCourseSlice = createSlice({
  name: 'enrolledCourses',
  initialState,
  reducers: {
    toggleCourseCompletion: (state, action) => {
      const courseId = action.payload;
      // Initialize course state if not already present
      if (!state.courses[courseId]) {
        state.courses[courseId] = { progress: 0, isCompleted: false };
      }

      // Toggle the completion state
      const courseState = state.courses[courseId];
      courseState.isCompleted = !courseState.isCompleted;
      courseState.progress = courseState.isCompleted ? 100 : 0;
    },
  },
});

export const { toggleCourseCompletion } = enrolledCourseSlice.actions;

export default enrolledCourseSlice.reducer;

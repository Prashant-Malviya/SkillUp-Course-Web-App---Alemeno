import { createSlice } from "@reduxjs/toolkit";

export const coursesSlice = createSlice({
  name: "courses",
  initialState: [], // Initialize as an empty array
  reducers: {
    addCourses: (state, action) => {
      return [...action.payload]; // Add courses to state
    },
  },
});

export const { addCourses } = coursesSlice.actions;
export default coursesSlice.reducer;

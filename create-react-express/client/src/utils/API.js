import axios from "axios";

export default {
  
  // Gets all courses
  getCourses: function() {
    return axios.get("/api/courses/")
    
  },

  // Gets course with the given id
//   getCourses: function(id) {
//     return axios.get("/api/courses/" + id);
//   },

  // Deletes the course with the given id
  deleteCourses: function(id) {
    return axios.delete("/api/courses/" + id);
  },

  // Saves a course to the database
    saveCourses: function (savedCourses) {
        return axios.post("/api/courses", savedCourses);
    },
};
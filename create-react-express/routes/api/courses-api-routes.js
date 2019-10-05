// var db = require("../models");
const router = require("express").Router();
const coursesController = require("../../controllers/coursesController");

// module.exports = function(app) {
  // Find all Authors and return them to the user with res.json
  // app.get("/api/courses/", function(req, res) {
  //   db.Courses.findAll({}).then(function(dbCourses) {
  //       res.json(dbCourses);
  //   });
    
  // });

  // Matches with "/api/books"
router.route("/")
.get(coursesController.findAll)
.post(coursesController.create);



  // Find one Author with the id in req.params.id and return them to the user with res.json
  // app.get("/api/courses/:id", function(req, res) {
  //   db.Courses.findOne({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbCourses) {
  //     res.json(dbCourses);
  //   });
  // });

  // Create an Author with the data available to us in req.body
  // app.post("/api/courses/", function(req, res) {
  //   console.log(req.body);
  //   db.Courses.create(req.body).then(function(dbCourses) {
  //     res.json(dbCourses);
  //   });
  // });

  // Delete the Author with the id available to us in req.params.id
//   app.delete("/api/courses/:id", function(req, res) {
//     db.Courses.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(dbCourses) {
//       res.json(dbCourses);
//     });
//   });


// };
module.exports = router;


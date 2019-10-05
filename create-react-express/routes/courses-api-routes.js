var db = require("../models");

module.exports = function(app) {
  // Find all Authors and return them to the user with res.json
  app.get("/api/courses/", function(req, res) {
    db.Courses.findAll({}).then(function(dbCourses) {
        res.json(dbCourses);
    });
    
  });

  app.get("/api/courses/:id", function(req, res) {
    // Find one Author with the id in req.params.id and return them to the user with res.json
    db.Courses.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbCourses) {
      res.json(dbCourses);
    });
  });

  app.post("/api/courses/", function(req, res) {
    // Create an Author with the data available to us in req.body
    console.log(req.body);
    db.Courses.create(req.body).then(function(dbCourses) {
      res.json(dbCourses);
    });
  });

  app.delete("/api/courses/:id", function(req, res) {
    // Delete the Author with the id available to us in req.params.id
    db.Courses.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbCourses) {
      res.json(dbCourses);
    });
  });

};

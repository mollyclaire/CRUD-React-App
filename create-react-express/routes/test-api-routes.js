var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/test", function(req, res) {
    var query = {};
    if (req.query.courses_id) {
      query.CoursesId = req.query.courses_id;
    }
    db.Test.findAll({
      where: query
    }).then(function(dbTest) {
      res.json(dbTest);
    });
  });

  // POST route for saving a new post
  app.post("/api/test", function(req, res) {
    db.Test.create(req.body).then(function(dbTest) {
      res.json(dbTest);
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/test/:id", function(req, res) {
    db.Test.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbTest) {
      res.json(dbTest);
    });
  });

  // PUT route for updating posts
  app.put("/api/test", function(req, res) {
    db.Test.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbTest) {
      res.json(dbTest);
    });
  });
};

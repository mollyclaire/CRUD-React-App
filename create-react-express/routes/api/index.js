const router = require("express").Router();
const courseRoutes = require("./courses-api-routes");

// Book routes
router.use("/courses", courseRoutes);

module.exports = router;
module.exports = app => {
  const rating = require("../controllers/rating.controller.js");

  var router = require("express").Router();

  router.post("/", rating.create);

  router.post("/eventratings", rating.EventRating);

  router.get("/userratings", rating.UserRatings);

  router.post("/update", rating.update);

  router.delete("/delete", rating.delete);

  app.use('/api/rating', router);
};
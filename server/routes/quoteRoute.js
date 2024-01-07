const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const quoteRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
const router = express.Router();
// This section will help you get a list of all the records.
quoteRoutes.route("/get-quote").get(async function (req, res) {
  let db_connect = dbo.getDb();
  try {
    var reviews = await db_connect.collection("rates").find({}).toArray();
    res.json(reviews);
  } catch (e) {
    console.log("An error occured pulling the records." + e);
  }
});

// This section will help you get a single record by field

quoteRoutes.route("/get-quote/mash").get(async function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { region: "western" };
  try {
    var projectCost = await db_connect
      .collection("rates")
      .find(myquery)
      .toArray();
    res.json(projectCost);
  } catch (e) {
    console.log("An error occured pulling the records." + e);
  }
});
/*
// This section will help you create a new record.
practiceRoutes.route("/Areas/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    name: req.body.name,
    position: req.body.position,
    level: req.body.level,
  };
  db_connect.collection("PracticeAreas").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a record by id.
practiceRoutes.route("Areas/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      name: req.body.name,
      position: req.body.position,
      level: req.body.level,
    },
  };
  db_connect
    .collection("PracticeAreas")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you delete a record
practiceRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("PracticeAreas").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});
*/
module.exports = quoteRoutes;

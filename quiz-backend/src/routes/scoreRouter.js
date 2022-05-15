const mongoose = require("mongoose");
const express = require("express");
const { request } = require("express");
const { Score } = require("../models/Score");
const router = express.Router();

router.get("/", async(req, res) => {
 const rest = await Score.find({})
 res.send(rest)
});
router.get("/:userID", async(req, res) => {
  console.log(req.params.userID)
  const rest = await Score.find({ userID: req.params.userID })
  console.log(rest);
  res.send(rest)
 });

// router.get("/:userID", async(req, res) => {
//   await Score.find({ userID: req.params.userID }, (err, docs) => {
//     res.send(docs);
//   })
//     .sort({ score: -1 })
//     .limit(10)
//     .catch((err) => {
//       console.log("There was an error", err);
//       res.status(500).send(err);
//     });
// });
router.post('/:userId',async(req,res)=>{
  const scores = req.body;
  const uscore = await new Score({username:scores.username,score:scores.score,userID:req.params.userId})
  uscore.save();
  res.send(uscore);
})
router.post("/", (req, res) => {
  const newScore = req.body;
  console.log(newScore);
  Score.create(newScore)
    .then((obj) => {
      console.log("New score is created", obj);
      res.status(200).send({ message: "You're score is saved" });
    })
    .catch((err) => {
      console.log("There was an error", err);
      res.status(500).send(err);
    });
});

module.exports = router;

const mongoose = require("mongoose");
const express = require("express");
const { Question } = require("../models/Question");
const router = express.Router();

const QUESTIONS_RETURNED = 20;

router.get("/", (req, res) => {
    console.log("called");  
  Question.find({}, (err, docs) => {
    const questionList = [];
    const indexList = [];
    console.log("called");  
    while (indexList.length < QUESTIONS_RETURNED) {
      let randomNumber = Math.floor(Math.random() * docs.length);
       
      if (!indexList.includes(randomNumber)) {
        questionList.push(docs[randomNumber]);
        indexList.push(randomNumber);
      }

    }
    console.log(questionList);
    res.send(questionList);
  });
});

module.exports = router;

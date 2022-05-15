require('./models/Question');
require('./models/Score');
require('./models/User');
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const bodyparse = require('body-parser');
const fetch = require("node-fetch");
const { Question } = require("./models/Question");
// const { connect } = require("./db/connection");
const questionRouter = require("./routes/questionRouter");
const scoreRouter = require("./routes/scoreRouter");
const userRouter = require("./routes/user");







app.use(cors());


app.use(bodyparse.json());
app.use(bodyparse.urlencoded({ extended: true }))


app.use("/user", userRouter);
app.use("/score", scoreRouter);
app.use("/questions", questionRouter);

const dbUri = 'mongodb+srv://archit01:archit08@cluster0.tnmwr.mongodb.net/quiz-management?retryWrites=true&w=majority'
mongoose.connect(dbUri);
// app.get('/',(req,res)=>{
//     console.log("/");
//     res.send("c");
// })
const connect=()=>{
    mongoose.connect(dbUri);
}
app.listen(5000,()=>{
    console.log("server started at port 5000");
})
// const populateDB = async () => {
//     const data = await fetch("https://opentdb.com/api.php?amount=50")
//       .then((res) => res.json())
//       .then((json) => json.results)
//       .catch((err) => console.log("failed to fetch API data", err));
//     console.log(`received ${data.length} questions`);
//     Question.insertMany(data, (err, obj) => {
//       if (!err) {
//         console.log(`added ${obj.length} to the database`);
//       } else {
//         console.log("error writing to database", err);
//       }
//     });
//   };

//   populateDB();

mongoose.connection.on('connected',()=>{
    console.log("connected to mongo");
})

mongoose.connection.on('disconnected',()=>{
    console.log("dissssssssssssssssssssssssconnected to mongo");
})

mongoose.connection.on('error',(err)=>{
    console.error(err);
})

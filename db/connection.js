if (process.env.NODE_ENV === "dev") {
  require("dotenv").config();
}
const mongoose = require("mongoose");
DB_URI = 'mongodb+srv://archit01:archit011@cluster0.aevgq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const connect = () => {
  mongoose.connect(
    DB_URI,
    // process.env.DB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
  
    // (err) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     console.log("connection successful");
    //   }
    // }
    //   .then(() => {console.log("connection to database successful")})
    //   .catch((err) => console.log("connection to the database failed", err))
  );
};

module.exports = { connect };

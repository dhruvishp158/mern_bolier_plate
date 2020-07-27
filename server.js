const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const secret = require("./config/secret");
// const connectDB = require("./config/db");
// connectDB();
app.use(cors());
//Init middleware i.e=BodyParser
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello Dhruvish");
});

app.listen(secret.port, function (err) {
  if (err) throw err;
  console.log("server is running on port " + secret.port);
});

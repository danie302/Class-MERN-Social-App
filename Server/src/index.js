// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");

// Initialize
const app = express();
const users = require("./routes/users.js");
const posts = require("./routes/posts.js");
const profile = require("./routes/profile.js");

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(cors());

// Passport Config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("/api/profile", profile);

// DB Initialize
const db = require("./config/database").mongoURI;
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log(`Connected to the database`))
  .catch(err => console.log(err));

// Start Server
const port = process.env.Port || 8000;
app.listen(port, () => console.log(`Server start in port ${port}`));

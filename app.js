const connectDb = require("./database");
const express = require("express");
const app = express();
const urlRoutes = require("./api/urls/urls.routes");
const userRoutes = require("./api/users/users.routes");
const notFound = require("./middelewares/notFoundHandler");
const errorHandler = require("./middelewares/errorHandler");
const passport = require("passport");
const config = require("./config/keys");
const {
  localStrategy,

  jwtStrategy,
} = require("./middelewares/passport");

connectDb();
app.use(express.json());
app.use(passport.initialize());
passport.use(localStrategy);

passport.use(jwtStrategy);

app.use("/urls", urlRoutes);
app.use(userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(8001, () => {
  console.log("The application is running on localhost:8001");
});

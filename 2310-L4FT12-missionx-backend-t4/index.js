// MODULES IMPORT
const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

// MIDDLEWARES
app.use(cors());
app.use(express.json());

// ROUTES IMPORT
// Home page
const authenticationRouter = require("./routes/authenticationRoutes");

// Profile Viewer
const profileViewerRouter = require("./routes/profileViewerRoutes");

// Student dashboard
const studentDashboardRouter = require("./routes/studentDashboardRoutes")

// Teacher Dashboard
const teacherDashboardRouter = require("./routes/teacherDashboardRoutes")


// ROUTES
// Home page
app.use("/api/authentication", authenticationRouter);

// Profile Viewer
app.use(profileViewerRouter);

// Student dashboard
app.use(studentDashboardRouter);

// Teacher Dashboard
app.use(teacherDashboardRouter);

// Default root route

app.get("/", (req, res) => {
  res.send("Connection established");
});

module.exports = app;
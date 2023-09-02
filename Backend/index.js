const express = require("express");
const { sequelize } = require("./configs/db");
const { Student } = require("./model/student.model");
const jwt = require("jsonwebtoken");
const { Department } = require("./model/department.model");
const { Course } = require("./model/course.model");
const { Enrollment } = require("./model/enrollment.model");
const { Instructor } = require("./model/instructor.model");
const { Assignment } = require("./model/assignment.model");
const { Submission } = require("./model/submissions.model");
const { Sequelize } = require("sequelize");
const { studentRouter } = require("./routes/student.route");
const { assignmentRouter } = require("./routes/assignment.route");
const { courseRouter } = require("./routes/course.route");
const { departmentRouter } = require("./routes/department.route");
const { enrollmentRouter } = require("./routes/enrollment.route");
const { instructorRouter } = require("./routes/instructor.route");
const { submissionRouter } = require("./routes/submission.route");

const app = express();

app.use(express.json());
app.use(require("cors")());

app.get("/", async (req, res) => {
  try {
    res.json({ message: "Server is Working" });
  } catch (err) {
    console.error(err);
    res.send({ error: err.message });
  }
});

app.use("", studentRouter);
app.use("", courseRouter);
app.use("", departmentRouter);
app.use("", enrollmentRouter);
app.use("", instructorRouter);
app.use("", submissionRouter);
app.use("", assignmentRouter);

sequelize
  .sync()
  .then(() => {
    app.listen(1400, async () => {
      console.log("Connected to DB");
      console.log("Server is running at 1400");
    });
  })
  .catch((err) => {
    console.log(err);
  });

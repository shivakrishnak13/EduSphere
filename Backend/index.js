const express = require("express");
const app = express();
const cors = require("cors");
const { sequelize } = require("./configs/db");
const { studentRouter } = require("./routes/student.route");
const { assignmentRouter } = require("./routes/assignment.route");
const { courseRouter } = require("./routes/course.route");
const { departmentRouter } = require("./routes/department.route");
const { enrollmentRouter } = require("./routes/enrollment.route");
const { instructorRouter } = require("./routes/instructor.route");
const { submissionRouter } = require("./routes/submission.route");
const { announcementRouter } = require("./routes/announcement.route");
const { chatRouter } = require("./routes/chat.route");

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    res.json({ message: "Server is Working" });
  } catch (err) {
    console.error(err);
    res.send({ error: err.message });
  }
});

app.use("", chatRouter);
app.use("", studentRouter);
app.use("", courseRouter);
app.use("", departmentRouter);
app.use("", enrollmentRouter);
app.use("", instructorRouter);
app.use("", submissionRouter);
app.use("", announcementRouter);
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



module.exports = app;

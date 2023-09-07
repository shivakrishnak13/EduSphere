const express = require("express");
const { Assignment } = require("../model/assignment.model");
const { Course } = require("../model/course.model");
const { Enrollment } = require("../model/enrollment.model");
const { Student } = require("../model/student.model");
const { Submission } = require("../model/submissions.model");
const { sequelize } = require("../configs/db");
const { Sequelize } = require("sequelize");
const { Instructor } = require("../model/instructor.model");
const { Department } = require("../model/department.model");
const submissionRouter = express.Router();
const { authentication } = require("../middlewares/authentication.middleware");
const { authorize } = require("../middlewares/authorization.middleware");

submissionRouter.get(
  "/api/submission",
  authentication,
  authorize(["admin"]),
  async (req, res) => {
    try {
      const submissionsData = await Submission.findAll({});
      res.json(submissionsData);
    } catch (err) {
      console.error("Error fetching submissions:", err);
      res.send({ error: err.message });
    }
  }
);

submissionRouter.post(
  "/api/submission",
  authentication,
  authorize(["student", "instructor"]),
  async (req, res) => {
    try {
      const {
        submission_date,
        status,
        assignment_id,
        student_id,
        submittedData,
      } = req.body;
      const submissions = await Submission.create({
        submission_date,
        status,
        assignment_id,
        student_id,
        submittedData,
      });
      res.json(submissions);
    } catch (err) {
      console.error(err);
      res.send({ error: err.message });
    }
  }
);

// get student submissions.
submissionRouter.get("/api/submission/student", async (req, res) => {
  try {
    Submission.belongsTo(Student, { foreignKey: "student_id" });
    Submission.belongsTo(Assignment, { foreignKey: "assignment_id" });

    Student.hasMany(Submission, { foreignKey: "student_id" });
    Assignment.hasMany(Submission, { foreignKey: "assignment_id" });

    const submissionData = await Submission.findAll({
      attributes: [
        [sequelize.col("Student.name"), "student_name"],
        [sequelize.col("Assignment.id"), "assignment_id"],
        [sequelize.col("Assignment.title"), "assignment_name"],
        [sequelize.col("Assignment.due_date"), "due_date"],
        "submission_date",
        "status",
      ],
      include: [
        {
          model: Student,
          attributes: [],
        },
        {
          model: Assignment,
          attributes: [],
        },
      ],
    });
    res.json(submissionData);
  } catch (err) {
    console.error("Error fetching submissions:", err);
    res.send({ error: err.message });
  }
});

// -- get the submissions based on course(id)
submissionRouter.get(
  "/api/submission/course/:id",
  authentication,
  authorize(["admin", "instructor"]),
  async (req, res) => {
    try {
      Assignment.hasMany(Submission, { foreignKey: "assignment_id" });
      Submission.belongsTo(Student, { foreignKey: "assignment_id" });

      Student.hasMany(Enrollment, { foreignKey: "student_id" });
      Enrollment.belongsTo(Student, { foreignKey: "student_id" });

      Course.hasMany(Enrollment, { foreignKey: "course_id" });
      Enrollment.belongsTo(Course, { foreignKey: "course_id" });

      Course.hasMany(Assignment, { foreignKey: "course_id" });
      Assignment.belongsTo(Course, { foreignKey: "course_id" });

      const query = `
            SELECT s.name, sb.*
            FROM submissions sb
            JOIN assignments a ON sb.assignment_id = a.id
            JOIN courses c ON a.course_id = c.id
            JOIN enrollments e ON c.id = e.course_id
            JOIN students s ON e.student_id = s.id
            WHERE c.id = :studentId
            ORDER BY sb.submission_date DESC;
        `;

      const submissionsOfACourse = await sequelize.query(query, {
        type: Sequelize.QueryTypes.SELECT,
        replacements: { studentId: req.params.id }, // Replace with the actual student ID
      });

      if (submissionsOfACourse.length === 0)
        return res.json({
          message: "No submissions available.",
        });

      res.json(submissionsOfACourse);
    } catch (err) {
      console.error("Error fetching submissions:", err);
      res.send({ error: err.message });
    }
  }
);

module.exports = {
  submissionRouter,
};

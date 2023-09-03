const express = require("express");
const { Assignment } = require("../model/assignment.model");
const { Course } = require("../model/course.model");
const { Enrollment } = require("../model/enrollment.model");
const { Student } = require("../model/student.model");
const { Submission } = require("../model/submissions.model");
const { sequelize } = require("../configs/db");
const { Sequelize } = require("sequelize");
const assignmentRouter = express.Router();
const { authentication } = require("../middlewares/authentication.middleware");
const { authorize } = require("../middlewares/authorization.middleware");

assignmentRouter.use(authentication);

assignmentRouter.get(
  "/api/assignment",
  authorize(["admin", "instructor"]),
  async (req, res) => {
    try {
      const assignmentsData = await Assignment.findAll({});
      res.json(assignmentsData);
    } catch (err) {
      console.error("Error fetching assignments:", err);
      res.send({ error: err.message });
    }
  }
);

assignmentRouter.post(
  "/api/assignment",
  authorize(["instructor"]),
  async (req, res) => {
    try {
      const { title, description, due_date, course_id } = req.body;
      const assignment = await Assignment.create({
        title,
        description,
        due_date,
        course_id,
      });
      res.json(assignment);
    } catch (err) {
      console.error(err);
      res.send({ error: err.message });
    }
  }
);

// get assignments and associated courses(all)
assignmentRouter.get(
  "/api/assignment/course",
  authorize(["admin"]),
  async (req, res) => {
    try {
      Course.hasMany(Assignment, { foreignKey: "course_id" });
      Assignment.belongsTo(Course, { foreignKey: "course_id" });

      const assignmentsData = await Assignment.findAll({
        attributes: ["id", "title", "description", "due_date"],
        include: [
          {
            model: Course,
            attributes: ["name"],
            as: "course",
          },
        ],
      });
      res.json(assignmentsData);
    } catch (err) {
      console.error("Error fetching assignment:", err);
      res.send({ error: err.message });
    }
  }
);

// -- get the assignments of a specific course(id)
assignmentRouter.get(
  "/api/assignment/course/:id",
  authorize(["student", "instructor", "admin"]),
  async (req, res) => {
    try {
      Course.hasMany(Assignment, { foreignKey: "course_id" });
      Assignment.belongsTo(Course, { foreignKey: "course_id" });

      const assignmentsData = await Assignment.findAll({
        attributes: ["id", "title", "description", "due_date"],
        include: [
          {
            model: Course,
            attributes: ["name"],
            as: "course",
            where: {
              id: req.params.id,
            },
          },
        ],
      });

      if (!assignmentsData.length)
        return res.json({ message: "No assignments available" });

      res.json(assignmentsData);
    } catch (err) {
      console.error("Error fetching assignment:", err);
      res.send({ error: err.message });
    }
  }
);

// -- get all the assignments and submissions of a specific student(id)
assignmentRouter.get(
  "/api/assignment/student/:id",
  authorize(["student", "instructor", "admin"]),
  async (req, res) => {
    try {
      Student.hasMany(Enrollment, { foreignKey: "student_id" });
      Enrollment.belongsTo(Student, { foreignKey: "student_id" });

      Student.hasMany(Submission, { foreignKey: "student_id" });
      Submission.belongsTo(Student, { foreignKey: "student_id" });

      Course.hasMany(Enrollment, { foreignKey: "course_id" });
      Enrollment.belongsTo(Course, { foreignKey: "course_id" });

      Course.hasMany(Assignment, { foreignKey: "course_id" });
      Assignment.belongsTo(Course, { foreignKey: "course_id" });

      const query = `
            SELECT a.*, c.name, sb.submission_date, sb.status
            FROM assignments a
            JOIN courses c ON a.course_id = c.id
            JOIN enrollments e ON c.id = e.course_id
            JOIN students s ON e.student_id = s.id
            JOIN submissions sb ON s.id = sb.student_id
            WHERE s.id = :studentId
        `;

      const studentAssignmentData = await sequelize.query(query, {
        type: Sequelize.QueryTypes.SELECT,
        replacements: { studentId: req.params.id }, // Replace with the actual student ID
      });

      if (studentAssignmentData.length === 0)
        return res.json({
          message: "You did not have any assignments!",
        });

      res.json(studentAssignmentData);
    } catch (err) {
      console.error("Error fetching assignments:", err);
      res.send({ error: err.message });
    }
  }
);

// delete an assignment
assignmentRouter.delete(
  "/api/assignment/:id",
  authorize(["instructor", "admin"]),
  async (req, res) => {
    try {
      await Assignment.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.json({ message: "Assignment Deleted." });
    } catch (err) {
      console.error("Error fetching assignments:", err);
      res.send({ error: err.message });
    }
  }
);

// update an assignment
assignmentRouter.patch(
  "/api/assignment/:id",
  authorize(["instructor", "admin"]),
  async (req, res) => {
    try {
      const updatedAssignment = req.body;

      if (updatedAssignment.id)
        return res.json({ message: "Exclude the assignment id!" });

      await Assignment.update(updatedAssignment, {
        where: {
          id: req.params.id,
        },
      });
      res.json({ message: "Assignment Updated." });
    } catch (err) {
      console.error("Error fetching assignments:", err);
      res.send({ error: err.message });
    }
  }
);

module.exports = {
  assignmentRouter,
};

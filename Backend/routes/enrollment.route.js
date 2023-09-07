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
const { authentication } = require("../middlewares/authentication.middleware");
const { authorize } = require("../middlewares/authorization.middleware");
const enrollmentRouter = express.Router();

enrollmentRouter.get(
  "/api/enrollment",
  authentication,
  authorize(["admin"]),
  async (req, res) => {
    try {
      const enrollmentData = await Enrollment.findAll({});
      res.json(enrollmentData);
    } catch (err) {
      console.error("Error fetching enrollments:", err);
      res.send({ error: err.message });
    }
  }
);

// get all students all enrolled courses with enroll_date
enrollmentRouter.get(
  "/api/enrollment/student/course",
  authentication,
  authorize(["admin"]),
  async (req, res) => {
    try {
      Enrollment.belongsTo(Student, { foreignKey: "student_id" });
      Enrollment.belongsTo(Course, { foreignKey: "course_id" });

      Student.hasMany(Enrollment, { foreignKey: "student_id" });
      Course.hasMany(Enrollment, { foreignKey: "course_id" });

      const enrollmentData = await Enrollment.findAll({
        attributes: [
          [sequelize.col("Student.name"), "student_name"],
          [sequelize.col("Course.name"), "course_name"],
          "enroll_date",
        ],
        include: [
          {
            model: Student,
            attributes: [],
          },
          {
            model: Course,
            attributes: [],
          },
        ],
      });
      res.json(enrollmentData);
    } catch (err) {
      console.error("Error fetching enrollments:", err);
      res.send({ error: err.message });
    }
  }
);

// enrollments
enrollmentRouter.post(
  "/api/enrollment",
  authentication,
  authorize(["student"]),
  async (req, res) => {
    try {
      const { enroll_date, student_id, course_id } = req.body;

      const isEnrolled = await Enrollment.findOne({
        where: {
          student_id: student_id,
          course_id: course_id,
        },
      });

      if (isEnrolled) return res.json({ message: "Already enrolled!" });

      const enrollMents = await Enrollment.create({
        enroll_date,
        student_id,
        course_id,
      });
      res.json(enrollMents);
    } catch (err) {
      console.error(err);
      res.send({ error: err.message });
    }
  }
);

module.exports = {
  enrollmentRouter,
};

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
const departmentRouter = express.Router();

departmentRouter.get("/api/department", async (req, res) => {
  try {
    const departmentsData = await Department.findAll({});

    res.json(departmentsData);
  } catch (err) {
    console.error("Error fetching departments:", err);
    res.send({ error: err.message });
  }
});

departmentRouter.post(
  "/api/department",
  authentication,
  authorize(["admin"]),
  async (req, res) => {
    try {
      const { name } = req.body;
      const deptData = await Department.create({
        name,
      });
      res.json({ "Department Created": deptData });
    } catch (err) {
      console.error("Error fetching departments:", err);
      res.send({ error: err.message });
    }
  }
);

// get courses along with depts
departmentRouter.get("/api/department/courses", async (req, res) => {
  try {
    Department.hasMany(Course, { foreignKey: "dept_id" });
    Course.belongsTo(Department, { foreignKey: "dept_id" });

    const departmentCourses = await Department.findAll({
      attributes: ["name"],
      include: {
        model: Course,
        as: "courses",
        attributes: ["id", "name", "description"], // Select the attributes you want
      },
    });

    res.json(departmentCourses);
  } catch (err) {
    console.error("Error fetching courses:", err);
    res.send({ error: err.message });
  }
});

module.exports = {
  departmentRouter,
};

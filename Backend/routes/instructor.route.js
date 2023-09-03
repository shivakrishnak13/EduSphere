const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Assignment } = require("../model/assignment.model");
const { Course } = require("../model/course.model");
const { Enrollment } = require("../model/enrollment.model");
const { Student } = require("../model/student.model");
const { Submission } = require("../model/submissions.model");
const { sequelize } = require("../configs/db");
const { Sequelize } = require("sequelize");
const { Instructor } = require("../model/instructor.model");
const { Department } = require("../model/department.model");
const instructorRouter = express.Router();

instructorRouter.get("/api/instructor", async (req, res) => {
  try {
    const instructorData = await Instructor.findAll({});
    res.json(instructorData);
  } catch (err) {
    console.error("Error fetching instructors:", err);
    res.send({ error: err.message });
  }
});

instructorRouter.post("/api/instructor/signup", async (req, res) => {
  try {
    const { name, gender, email, contact_number, course_id, password } =
      req.body;

    const instructorExist = await Instructor.findOne({
      where: { email: email },
    });
    if (instructorExist)
      return res.json({ message: "Already Registered. Please login!" });

    const hashedPassword = bcrypt.hashSync(password, 5);

    const instructorInfo = await Instructor.create({
      name,
      gender,
      email,
      contact_number,
      course_id,
      password: hashedPassword,
    });

    res.json({ message: "Successfully Registered", instructorInfo });
  } catch (err) {
    console.error("Error fetching instructors:", err);
    res.send({ error: err.message });
  }
});

instructorRouter.post("/api/instructor/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const instructorExist = await Instructor.findOne({
      where: { email: email },
    });
    if (!instructorExist)
      return res.json({ message: "User does not exist, Please Register!" });

    const passwordMatch = bcrypt.compareSync(
      password,
      instructorExist.password
    );

    if (!passwordMatch)
      return res.json({ message: "Invalid credentials, Please try again!" });

    const payload = {
      role: instructorExist.role,
      id: instructorExist.id,
      email: instructorExist.email,
    };
    const token = jwt.sign(payload, process.env.INSTRUCTOR_SECRET, {
      expiresIn: "1H",
    });

    res.json({
      message: "Login Success",
      token: token,
      name: instructorExist.name,
      id: instructorExist.id,
    });
  } catch (err) {
    console.error("Error fetching instructors:", err);
    res.send({ error: err.message });
  }
});

// get instructor and associated courses
instructorRouter.get("/api/instructor/course", async (req, res) => {
  try {
    Course.hasOne(Instructor, { foreignKey: "course_id" });
    Instructor.belongsTo(Course, { foreignKey: "course_id" });

    const instructorData = await Instructor.findAll({
      attributes: [
        ["name", "instructor_name"],
        [sequelize.col("Course.name"), "course_name"],
      ],
      include: [
        {
          model: Course,
          attributes: [],
        },
      ],
    });
    res.json(instructorData);
  } catch (err) {
    console.error("Error fetching instructors:", err);
    res.send({ error: err.message });
  }
});

module.exports = {
  instructorRouter,
};

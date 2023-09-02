const express = require("express");
const { Student } = require("../model/student.model");
const studentRouter = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

// get all students
studentRouter.get("/api/student", async (req, res) => {
  try {
    const studentsData = await Student.findAll({});

    res.json(studentsData);
  } catch (err) {
    console.error("Error fetching students:", err);
    res.send({ error: err.message });
  }
});

studentRouter.post("/api/student/signup", async (req, res) => {
  try {
    const { name, dob, major, gender, contact_number, email, password } =
      req.body;

    const studentExist = await Student.findOne({ where: { email: email } });
    if (studentExist)
      return res.json({ message: "Already Registered. Please login" });

    const hashedPassword = bcrypt.hashSync(password, 5);

    const studentsData = await Student.create({
      name,
      gender,
      dob,
      major,
      email,
      contact_number,
      password: hashedPassword,
    });

    res.json({ "Student Created": studentsData });
  } catch (err) {
    console.error("Error fetching students:", err);
    res.send({ error: err.message });
  }
});

studentRouter.post("/api/student/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const studentExist = await Student.findOne({ where: { email: email } });
    if (!studentExist)
      return res.json({ message: "User does not exist, Please Register!" });

    const passwordMatch = bcrypt.compareSync(password, studentExist.password);

    if (!passwordMatch)
      return res.json({ message: "Invalid credentials, Please try again!" });

    const payload = {
      role: studentExist.role,
      id: studentExist.id,
      email: studentExist.email,
    };
    const token = jwt.sign(payload, process.env.STUDENT_SECRET, {
      expiresIn: "1H",
    });

    res.json({
      message: "Login Success",
      token: token,
      name: studentExist.name,
      id: studentExist.id,
    });
  } catch (err) {
    console.error("Error fetching students:", err);
    res.send({ error: err.message });
  }
});

module.exports = {
  studentRouter,
};

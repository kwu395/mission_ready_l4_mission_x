const pool = require("../model/db");
const bcrypt = require("bcrypt");

// Student LOGIN ENDPOINT
exports.studentLogin = (req, res) => {
  console.log(req.body);
  const email = req.body.email;
  const password = req.body.password;
  const query =
    "SELECT student_id, name, email, password FROM `missio20_2310-L4FT12-team4`.student WHERE email = ?";
  pool.execute(query, [email], (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
    if (result.length === 0) {
      return res.sendStatus(404);
    }

    // Check if the user's password matches the hashed password in the database

    bcrypt.compare(password, result[0].password, function (err, validPass) {
      // instead of result result, validPass - its the same just different name

      if (validPass) {
        return res.status(200).send({
          message: "Logged in successfully",
          name: result[0].name,
          id: result[0].student_id,
        });
      }

      if (!validPass) {
        return res.sendStatus(401);
      }
    });
  });
};

// Teacher LOGIN ENDPOINT
exports.teacherLogin = (req, res) => {
  console.log(req.body);
  const email = req.body.email;
  const password = req.body.password;
  const query =
    "SELECT teacher_id, name, email, password FROM `missio20_2310-L4FT12-team4`.teacher WHERE email = ?";
  pool.execute(query, [email], (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
    if (result.length === 0) {
      return res.sendStatus(404); // Not found
    }
    bcrypt.compare(password, result[0].password, function (err, validPass) {  // instead of result result, validPass - its the same just different name
      

      if (validPass) {
        return res.status(200).send({
          message: "Logged in successfully",
          name: result[0].name,
          id: result[0].teacher_id,
        });
      }

      if (!validPass) {
        return res.sendStatus(401);
      }
    });

    // Check if the user's password matches the hashed password in the database
  });
};

// Student REGISTER ENDPOINT
exports.signup = (req, res) => {
  console.log(req.body);
  let query;
  if (req.body.type === "student") {
    query = "INSERT INTO student (name, email, password) VALUE (?, ?, ?)";
  }
  if (req.body.type === "teacher") {
    query = "INSERT INTO teacher (name, email, password) VALUE (?, ?, ?)";
  }
  bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
    pool.execute(
      query,
      [req.body.name, req.body.email, hashedPass],
      (err, result) => {
        if (err) {
          console.log(err);
          return res.status(400).send(err);
        }
        res.sendStatus(200);
      }
    );
  });
};

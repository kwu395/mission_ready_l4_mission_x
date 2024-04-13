const pool = require('../model/db')

// getProjects;
// getLearningObjectives;
// getInstructions;
// getVideo;

// Projects endpoint
module.exports.getProjects = (req, res) => {
  const query = `SELECT * FROM project;`;
  pool.query(query, [req.params.project_id], (error, result) => {
    if (error) return console.log(error);
    // console.log(result);
    res.send(result);
  });
};

// Learning Objectives endpoint
module.exports.getLearningObjectives = (req, res) => {
  const query = `SELECT project_id, name, learning_objectives FROM project WHERE project_id = ?;`;
  pool.query(query, [req.params.project_id], (error, result) => {
    if (error) {
      console.log("Database error:", error);
      return res.status(500);
    } else {
      res.send(result);
    }
  });
};

// Instructions endpoint
module.exports.getInstructions = (req, res) => {
  const query = `SELECT project_id, name, instructions FROM project WHERE project_id = ?;`;
  pool.query(query, [req.params.project_id], (error, result) => {
    if (error) {
      console.log("Database error:", error);
      return res.status(500);
    } else {
      res.send(result);
    }
  });
};

// Video tutorial endpoint
module.exports.getVideo = (req, res) => {
  const query = `SELECT project_id, name, video FROM project WHERE project_id = ?;`;
  pool.query(query, [req.params.project_id], (error, result) => {
    if (error) {
      console.log("Database error:", error);
      return res.status(500);
    } else {
      res.send(result);
    }
  });
};

// == SD_SubmitProject == //
module.exports.submitProject = (req, res) =>{
    console.log('submit-project post endpoint hit!');
    console.log(req.body);
    const student_id = req.params.student_id;
    const project_id = req.params.project_id;
    const submit_date = req.body.submit_date;
    const imageUrl = req.body.imageUrl || null; // Handle potentially undefined imgURL
    console.log(imageUrl);
    console.log(submit_date);
    // Check for required parameters
    if (!submit_date) {
        return res.status(400).send("Missing required parameter: submit_date");
    }
    const insertQuery = `INSERT INTO student_projects (student_id, project_id, date_submitted, submission)
      VALUES (?, ?, ?, ?)`;
    const updateQuery = `UPDATE student_projects SET date_submitted=?, submission=? WHERE student_id = ? AND project_id = ?;`

    // pool.execute(insertQuery, [student_id, project_id, submit_date, imageUrl], (err, result) => {
    //     if (err) {
    //         console.log(err);
    //         res.status(500).send("Error inserting project");
    //     } else {
    //         console.log(result);
    //         res.status(201).send("Project submitted successfully");
    //     }
    // })

    pool.execute(updateQuery, [submit_date, imageUrl, student_id, project_id], (err, result) => {
        if (err) {
            console.log(err);
            pool.execute(insertQuery, [student_id, project_id, submit_date, imageUrl], (err, result) => {
                    if (err) {
                        console.log(err);
                        res.status(500).send("Error inserting project");
                    } else {
                        console.log(result);
                        res.status(201).send("Project submitted successfully");
                    }
                })
            res.status(500).send("Error inserting project");
        } else {
            console.log(result);
            res.status(201).send("Project submitted successfully");
        }
    })
}
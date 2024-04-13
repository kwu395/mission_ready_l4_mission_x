const pool = require('../model/db')

// Help Requests

module.exports.getRequests = (req, res) => {
    const query = `SELECT * FROM help_request LEFT JOIN student ON help_request.student_id = student.student_id;`
    pool.execute(query, (err, result) => {
        res.send(result);
    }); 
};

// Help Requests "Mark As Done" post endpoint 

module.exports.postMarkAsDone = (req, res) => {
    const requestsDone = req.body.requests;
    for (const requestID in requestsDone) {
        const done = requestsDone[requestID];

        console.log(requestID);
        console.log(done);
        const query = `UPDATE help_request SET done = ? WHERE request_id = ?;`
        pool.execute(query, [done, requestID], (err, result) => {
            res.send(result);
        }); 
    }
};

// == TD_ProjectSubmissions - GET data == //
module.exports.projectSubmissions = (req, res) => {
    const teacher_id = req.params.teacher_id;
    const getQuery = `SELECT student.student_id, student.profile_pic, student.name, student.gender, student_projects.project_id, student_projects.date_started, student_projects.date_submitted, student_projects.date_completed, student_projects.submission FROM student 
        RIGHT JOIN student_projects ON student.student_id = student_projects.student_id
        WHERE teacher_id = ?`
    pool.execute(getQuery, [teacher_id], (error, result) => {
        if (error) console.log(error);
        console.log(result)
        res.send(result);
    });
};

// == TD_ProjectSubmissions - POST data == //
// module.exports.projectSubmissionsCompleted = (req, res) => {
//     const teacher_id = req.params.teacher_id;
//     const student_id = req.body.student_id;
//     const project_id = req.body.project_id;
//     const markCompletedDate = req.body.markCompletedDate
//     const postQuery = `INSERT INTO student_projects (student_id, project_id, date_completed) VALUES
//     (?,?,?)`
//     pool.execute(postQuery, [student_id, project_id, markCompletedDate], (err, result) => {
//         if (err) {
//             console.log(err);
//             res.status(500).send("Error inserting Mark as Completed Date");
//         } else {
//             console.log(result);
//             res.status(201).send("Mark as Completed Date submitted successfully");
//         }
//     })
// };
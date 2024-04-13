const pool = require('../model/db')

// Teacher Profile endpoint 

module.exports.getTeachers = (req, res) => {
    const teacherID = req.params.id;
    pool.execute(`SELECT * FROM teacher WHERE teacher_id = ?`, [teacherID], (err, result) => {
        res.send(result);
    }); 
};
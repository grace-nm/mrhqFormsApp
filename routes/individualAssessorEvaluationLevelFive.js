const express = require('express')
const router = express.Router();
const mysql = require('mysql');

router.get('/msg', (err, res)=>{
    console.log('this msg from user page');
    res.end()
})

router.post('/individualAssessorEvaluationLevelFive', (req, res)=>{
    console.log('Trying to submit form')
    const fname = req.body.fname;
    const attend = req.body.attend;
    const evidenceOne = req.body.evidenceOne;
    const deliver = req.body.deliver;
    const evidenceTwo = req.body.evidenceTwo;
    const respect = req.body.respect;
    const evidenceThree = req.body.evidenceThree;
    const communicate = req.body.communicate;
    const evidenceFour = req.body.evidenceFour;
    const allowExpress = req.body.allowExpress;
    const evidenceFive = req.body.evidenceFive;
    const comments = req.body.comments;

    // console.log(fname + ' ' + email + ' ' + quali + ' ' + gender + ' ' + city + ' ' + dob);
    const sql = "INSERT INTO individualTeamMemberEvaluationByAssessorLevelFive VALUES ?";
    const values =[[null, fname, attend, evidenceOne, deliver, evidenceTwo, respect, evidenceThree, communicate, evidenceFour, allowExpress, evidenceFive, comments]];
    console.log(values);
    getConn().query(sql, [values], (err, results, fields)=>{
        if(err){
            console.log('failed to submit your form : ', err);
            res.sendStatus(500)
            return;
        }
        console.log('Submitted New Form : ', results.insertId)
        res.end();
    })
    res.redirect('/next.html');
    // res.end();
})

function getConn(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'guest1',
        database: 'NodeMysql',
        port: 3306
    });
}

module.exports = router
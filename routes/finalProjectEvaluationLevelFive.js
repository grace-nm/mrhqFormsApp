const express = require('express')
const router = express.Router();
const mysql = require('mysql');

router.get('/msg', (err, res)=>{
    console.log('this msg from user page');
    res.end()
})

router.post('/finalProjectEvaluationLevelFive', (req, res)=>{
    console.log('Trying to submit self reflection L4 form')
    const fname = req.body.fname;
    const questionOne = req.body.questionOne;
    const questionTwo = req.body.questionTwo;
    const questionThree = req.body.questionThree;
    const questionFour = req.body.questionFour;

    // console.log(fname + ' ' + email + ' ' + quali + ' ' + gender + ' ' + city + ' ' + dob);
    const sql = "INSERT INTO finalProjectEvaluationLevelFive VALUES ?";
    const values =[[null, fname, questionOne, questionTwo, questionThree, questionFour]];
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
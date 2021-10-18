const express = require('express')
const router = express.Router();
const mysql = require('mysql');

router.get('/msg', (err, res)=>{
    console.log('this msg from user page');
    res.end()
})

router.post('/peerReviewLevelFive', (req, res)=>{
    console.log('Trying to submit mid course completeion form')
    const yourName = req.body.yourName;
    const teamMembersName = req.body.teamMembersName;
    const attend = req.body.attend;
    const deliver = req.body.deliver;
    const respect = req.body.respect;
    const communicate = req.body.communicate;
    const allowExpress = req.body.allowExpress;
    const comments = req.body.comments;

    // console.log(fname + ' ' + email + ' ' + quali + ' ' + gender + ' ' + city + ' ' + dob);
    const sql = "INSERT INTO peerReviewLevelFive VALUES ?";
    const values =[[null, yourName, teamMembersName, attend, deliver, respect, communicate, allowExpress, comments]];
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
    res.redirect('../levelFiveForms/peerReviewFormLevelFive.html?submitted=yes');
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
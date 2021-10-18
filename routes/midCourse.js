const express = require('express')
const router = express.Router();
const mysql = require('mysql');

router.get('/msg', (err, res)=>{
    console.log('this msg from user page');
    res.end()
})

router.post('/userReg', (req, res)=>{
    console.log('Trying to submit mid course completeion form')
    const fname = req.body.fname;
    const accelerator = req.body.accelerator;
    const threeEnjoy = req.body.threeEnjoy;
    const threeImprove = req.body.threeImprove;
    const quali = req.body.quali;
    const explain1 = req.body.explain1;
    const supportGuide = req.body.supportGuide;
    const tellUs = req.body.tellUs;
    const additionalComments = req.body.additionalComments;

    // console.log(fname + ' ' + email + ' ' + quali + ' ' + gender + ' ' + city + ' ' + dob);
    const sql = "INSERT INTO midcoursefeedbackform VALUES ?";
    const values =[[null, fname, accelerator,threeEnjoy, threeImprove, quali, explain1, supportGuide, tellUs, additionalComments]];
    console.log(values);
    getConn().query(sql, [values], (err, results, fields)=>{
        if(err){
            console.log('failed to submit your form : ', err);
            res.sendStatus(500)
            return;
        }
        console.log('Inserted new user : ', results.insertId)
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
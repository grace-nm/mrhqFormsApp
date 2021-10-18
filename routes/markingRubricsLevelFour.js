const express = require('express')
const router = express.Router();
const mysql = require('mysql');

router.get('/msg', (err, res)=>{
    console.log('this msg from user page');
    res.end()
})

router.post('/markingRubricsLevelFour', (req, res)=>{
    console.log('Trying to submit form')
    let studentsL4 = [];
    ///student1
    let learner = [];
    learner[0] = null;
    //comments
    learner[1] = req.body.student1name;
    learner[2] = req.body.student1comment1;
    learner[3] = req.body.student1comment2;
    learner[4] = req.body.student1comment3;
    learner[5] = req.body.student1comment4;
    learner[6] = req.body.student1comment5;
    //criteria (15)
    learner[7] = req.body.student1criteria1;
    learner[8] = req.body.student1criteria2;
    learner[9] = req.body.student1criteria3;
    learner[10] = req.body.student1criteria4;
    learner[11] = req.body.student1criteria5;
    learner[12] = req.body.student1criteria6;
    learner[13] = req.body.student1criteria7;
    learner[14] = req.body.student1criteria8;
    learner[15] = req.body.student1criteria9;
    learner[16] = req.body.student1criteria10;
    learner[17] = req.body.student1criteria11;
    learner[18] = req.body.student1criteria12;
    learner[19] = req.body.student1criteria13;
    learner[20] = req.body.student1criteria14;
    studentsL4[0] = learner;

    ///student2
    if (req.body.student2name != '') 
    {
    let learner2 = [];
    learner2[0] = null;
    //comments
    learner2[1] = req.body.student2name;
    learner2[2] = req.body.student2comment1;
    learner2[3] = req.body.student2comment2;
    learner2[4] = req.body.student2comment3;
    learner2[5] = req.body.student2comment4;
    learner2[6] = req.body.student2comment5;
    //criteria (15)
    learner2[7] = req.body.student2criteria1;
    learner2[8] = req.body.student2criteria2;
    learner2[9] = req.body.student2criteria3;
    learner2[10] = req.body.student2criteria4;
    learner2[11] = req.body.student2criteria5;
    learner2[12] = req.body.student2criteria6;
    learner2[13] = req.body.student2criteria7;
    learner2[14] = req.body.student2criteria8;
    learner2[15] = req.body.student2criteria9;
    learner2[16] = req.body.student2criteria10;
    learner2[17] = req.body.student2criteria11;
    learner2[18] = req.body.student2criteria12;
    learner2[19] = req.body.student2criteria13;
    learner2[20] = req.body.student2criteria14;
    studentsL4[1] = learner2;
    }

    ///student3
    if (req.body.student3name != '') 
    {
    let learner3 = [];
    learner3[0] = null;
    //comments
    learner3[1] = req.body.student3name;
    learner3[2] = req.body.student3comment1;
    learner3[3] = req.body.student3comment2;
    learner3[4] = req.body.student3comment3;
    learner3[5] = req.body.student3comment4;
    learner3[6] = req.body.student3comment5;
    //criteria (15)
    learner3[7] = req.body.student3criteria1;
    learner3[8] = req.body.student3criteria2;
    learner3[9] = req.body.student3criteria3;
    learner3[10] = req.body.student3criteria4;
    learner3[11] = req.body.student3criteria5;
    learner3[12] = req.body.student3criteria6;
    learner3[13] = req.body.student3criteria7;
    learner3[14] = req.body.student3criteria8;
    learner3[15] = req.body.student3criteria9;
    learner3[16] = req.body.student3criteria10;
    learner3[17] = req.body.student3criteria11;
    learner3[18] = req.body.student3criteria12;
    learner3[19] = req.body.student3criteria13;
    learner3[20] = req.body.student3criteria14;
    studentsL4[2] = learner3;
    }

    ///student4
    if (req.body.student4name != '') 
    {
    let learner4 = [];
    learner4[0] = null;
    //comments
    learner4[1] = req.body.student4name;
    learner4[2] = req.body.student4comment1;
    learner4[3] = req.body.student4comment2;
    learner4[4] = req.body.student4comment3;
    learner4[5] = req.body.student4comment4;
    learner4[6] = req.body.student4comment5;
    //criteria (15)
    learner4[7] = req.body.student4criteria1;
    learner4[8] = req.body.student4criteria2;
    learner4[9] = req.body.student4criteria3;
    learner4[10] = req.body.student4criteria4;
    learner4[11] = req.body.student4criteria5;
    learner4[12] = req.body.student4criteria6;
    learner4[13] = req.body.student4criteria7;
    learner4[14] = req.body.student4criteria8;
    learner4[15] = req.body.student4criteria9;
    learner4[16] = req.body.student4criteria10;
    learner4[17] = req.body.student4criteria11;
    learner4[18] = req.body.student4criteria12;
    learner4[19] = req.body.student4criteria13;
    learner4[20] = req.body.student4criteria14;
    studentsL4[3] = learner4;
    }
   
    ///student5
    if (req.body.student5name != '') 
    {
    let learner5 = [];
    learner5[0] = null;
    //comments
    learner5[1] = req.body.student5name;
    learner5[2] = req.body.student5comment1;
    learner5[3] = req.body.student5comment2;
    learner5[4] = req.body.student5comment3;
    learner5[5] = req.body.student5comment4;
    learner5[6] = req.body.student5comment5;
    //criteria (15)
    learner5[7] = req.body.student5criteria1;
    learner5[8] = req.body.student5criteria2;
    learner5[9] = req.body.student5criteria3;
    learner5[10] = req.body.student5criteria4;
    learner5[11] = req.body.student5criteria5;
    learner5[12] = req.body.student5criteria6;
    learner5[13] = req.body.student5criteria7;
    learner5[14] = req.body.student5criteria8;
    learner5[15] = req.body.student5criteria9;
    learner5[16] = req.body.student5criteria10;
    learner5[17] = req.body.student5criteria11;
    learner5[18] = req.body.student5criteria12;
    learner5[19] = req.body.student5criteria13;
    learner5[20] = req.body.student5criteria14;
    studentsL4[4] = learner5;
    }

    ///student6
    if (req.body.student6name != '') 
    {
    let learner6 = [];
    learner6[0] = null;
    //comments
    learner6[1] = req.body.student6name;
    learner6[2] = req.body.student6comment1;
    learner6[3] = req.body.student6comment2;
    learner6[4] = req.body.student6comment3;
    learner6[5] = req.body.student6comment4;
    learner6[6] = req.body.student6comment5;
    //criteria (15)
    learner6[7] = req.body.student6criteria1;
    learner6[8] = req.body.student6criteria2;
    learner6[9] = req.body.student6criteria3;
    learner6[10] = req.body.student6criteria4;
    learner6[11] = req.body.student6criteria5;
    learner6[12] = req.body.student6criteria6;
    learner6[13] = req.body.student6criteria7;
    learner6[14] = req.body.student6criteria8;
    learner6[15] = req.body.student6criteria9;
    learner6[16] = req.body.student6criteria10;
    learner6[17] = req.body.student6criteria11;
    learner6[18] = req.body.student6criteria12;
    learner6[19] = req.body.student6criteria13;
    learner6[20] = req.body.student6criteria14;
    studentsL4[5] = learner6;
    }

    const sql = "INSERT INTO markingRubricsLevelFour VALUES ?";
    console.log (studentsL4);

    for (let i=0; i<studentsL4.length; i++) {
        let values = [studentsL4[i]];

        console.log("values: " + values);
        getConn().query(sql, [values], (err, results, fields)=>{
            if(err){
                console.log('failed to submit your form : ', err);
                res.sendStatus(500)
                return;
            }
            console.log('Submitted New Form : ', results.insertId)
            res.end();
        })
    }
    res.redirect('/next.html');
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
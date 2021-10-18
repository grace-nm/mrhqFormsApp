const express = require('express')
const router = express.Router();
const mysql = require('mysql');

router.get('/msg', (err, res)=>{
    console.log('this msg from user page');
    res.end()
})

router.post('/markingRubricsLevelFive', (req, res)=>{
    console.log('Trying to submit form')
    ///students
    let students = [];

    //student1
    let temp = [];
    temp[0] = null;
    temp[1] = req.body.student1name;
    temp[2] = req.body.student1comment1;
    temp[3] = req.body.student1comment2;
    temp[4] = req.body.student1comment3;
    temp[5] = req.body.student1criteria1;
    temp[6] = req.body.student1criteria2;
    temp[7] = req.body.student1criteria3;
    temp[8] = req.body.student1criteria4;
    temp[9] = req.body.student1criteria5;
    temp[10] = req.body.student1criteria6;
    students[0] = temp;
    
    ///student2
    if (req.body.student2name != '') 
    {
        let temp2 = [];
        temp2[0] = null;
        temp2[1] = req.body.student2name;
        temp2[2] = req.body.student2comment1;
        temp2[3] = req.body.student2comment2;
        temp2[4] = req.body.student2comment3;
        temp2[5] = req.body.student2criteria1;
        temp2[6] = req.body.student2criteria2;
        temp2[7] = req.body.student2criteria3;
        temp2[8] = req.body.student2criteria4;
        temp2[9] = req.body.student2criteria5;
        temp2[10] = req.body.student2criteria6;
        students[1] = temp2;
    }        
    ///student3
    if (req.body.student3name != '') 
    {
        let temp3 = [];
        temp3[0] = null;
        temp3[1] = req.body.student3name;
        temp3[2] = req.body.student3comment1;
        temp3[3] = req.body.student3comment2;
        temp3[4] = req.body.student3comment3;
        temp3[5] = req.body.student3criteria1;
        temp3[6] = req.body.student3criteria2;
        temp3[7] = req.body.student3criteria3;
        temp3[8] = req.body.student3criteria4;
        temp3[9] = req.body.student3criteria5;
        temp3[10] = req.body.student3criteria6;
        students[2] = temp3;
    }   
    ///student4
    if (req.body.student4name != '') 
    {
        let temp4 = [];
        temp4[0] = null;
        temp4[1] = req.body.student4name;
        temp4[2] = req.body.student4comment1;
        temp4[3] = req.body.student4comment2;
        temp4[4] = req.body.student4comment3;
        temp4[5] = req.body.student4criteria1;
        temp4[6] = req.body.student4criteria2;
        temp4[7] = req.body.student4criteria3;
        temp4[8] = req.body.student4criteria4;
        temp4[9] = req.body.student4criteria5;
        temp4[10] = req.body.student4criteria6;
        students[3] = temp4;
    }  
    
    ///student5
    if (req.body.student5name != '') 
    {
        let temp5 = [];
        temp5[0] = null;
        temp5[1] = req.body.student5name;
        temp5[2] = req.body.student5comment1;
        temp5[3] = req.body.student5comment2;
        temp5[4] = req.body.student5comment3;
        temp5[5] = req.body.student5criteria1;
        temp5[6] = req.body.student5criteria2;
        temp5[7] = req.body.student5criteria3;
        temp5[8] = req.body.student5criteria4;
        temp5[9] = req.body.student5criteria5;
        temp5[10] = req.body.student5criteria6;
        students[4] = temp5;
    }  
    
    ///student6
    if (req.body.student6name != '') 
    {
        let temp6 = [];
        temp6[0] = null;
        temp6[1] = req.body.student6name;
        temp6[2] = req.body.student6comment1;
        temp6[3] = req.body.student6comment2;
        temp6[4] = req.body.student6comment3;
        temp6[5] = req.body.student6criteria1;
        temp6[6] = req.body.student6criteria2;
        temp6[7] = req.body.student6criteria3;
        temp6[8] = req.body.student6criteria4;
        temp6[9] = req.body.student6criteria5;
        temp6[10] = req.body.student6criteria6;
        students[5] = temp6;
    }   

    const sql = "INSERT INTO markingRubricsLevelFive VALUES ?";
    console.log (students);
   
    for (let i=0; i<students.length; i++) {
        let values = [students[i]];

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
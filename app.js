const express = require('express')
const app = express();
// const bodyParser = require('body-parser');
const mysql = require('mysql');

app.use(express.static('./public'));
app.use(express.urlencoded({extended:false}))

function getConn(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'guest1',
        database: 'NodeMysql',
        port: 3306
    });
}
//Creating DB (dataBase):
// getConn().connect((err)=>{
//     if(err) throw err
//     console.log('Connected');
//     //create database:
//     const db = 'CREATE DATABASE NodeMysql'
//     getConn().query(db,(err, res)=>{
//         if(err) throw err;
//         console.log('DATABASE Created')
//     })
// })
//Inserting DATA:
// getConn().connect((err)=>{
//     if(err) throw err
//     console.log('Connected');
//     //create table:
//     const sql = 'INSERT INTO user VALUES ?';
//     const values = [
//         [null, 'jee', 'jee@gmail.com', 'primary', 'female', 'LA', '1990-6-6'],
//         [null, 'mark', 'mark@gmail.com', 'primary', 'male', 'LV', '1990-7-7']
//     ]
//     getConn().query(sql, [values], (err, results)=>{
//         if(err) throw err;
//         console.log('DATA inserted', results.affectedRows)
//     })
// })
//Creating table
// getConn().connect((err)=>{
//     if(err) throw err
//     console.log('Connected');
//     //create table:
//     let db = `CREATE TABLE midCourseFeedbackForm (id INT AUTO_INCREMENT PRIMARY KEY, fname VARCHAR(50), accelerator VARCHAR(100), threeEnjoy VARCHAR(150), threeImprove VARCHAR(200),quali VARCHAR(50), explain1 VARCHAR(50), supportGuide VARCHAR(20), tellUs VARCHAR(200), additionalComments VARCHAR(150))`;
//     getConn().query(db,(err, res)=>{
//         if(err) throw err;
//         console.log('TABLE Created')
//     })
// })
//creating 2nd table - post course feedback form.
// getConn().connect((err)=>{
//     if(err) throw err
//     console.log('Connected');
//     //create table:
//     let db = `CREATE TABLE postCourseFeedbackForm (id INT AUTO_INCREMENT PRIMARY KEY, fname VARCHAR(50), accelerator VARCHAR(100), threeEnjoy VARCHAR(150), threeImprove VARCHAR(200),quali VARCHAR(50), explain1 VARCHAR(50), supportGuide VARCHAR(20), tellUs VARCHAR(200), additionalComments VARCHAR(150))`;
//     getConn().query(db,(err, res)=>{
//         if(err) throw err;
//         console.log('TABLE Created')
//     })
// })

//Creating table for peer review level four
// getConn().connect((err)=>{
//     if(err) throw err
//     console.log('Connected');
//     //create table:
//     let db = `CREATE TABLE peerReviewLevelFour (id INT AUTO_INCREMENT PRIMARY KEY, yourName VARCHAR(50), teamMembersName VARCHAR(100), attend VARCHAR(150), deliver VARCHAR(200),respect VARCHAR(50), communicate VARCHAR(50), allowExpress VARCHAR(20), comments VARCHAR(200))`;
//     getConn().query(db,(err, res)=>{
//         if(err) throw err;
//         console.log('TABLE Created')
//     })
// })

// Creating table for self reflection level four
// getConn().connect((err)=>{
//     if(err) throw err
//     console.log('Connected');
//     //create table:
//     let db = `CREATE TABLE selfReflectionLevelFour (id INT AUTO_INCREMENT PRIMARY KEY, fname VARCHAR(50), responsible VARCHAR(200), experience VARCHAR(200), learn VARCHAR(200), well VARCHAR(200), challenge VARCHAR(200), improve VARCHAR(200))`;
//     getConn().query(db,(err, res)=>{
//         if(err) throw err;
//         console.log('TABLE Created')
//     })
// })
// Creating table for mission x evaluation level four
// getConn().connect((err)=>{
//     if(err) throw err
//     console.log('Connected');
//     //create table:
//     let db = `CREATE TABLE missionxEvaluationLevelFour (id INT AUTO_INCREMENT PRIMARY KEY, fname VARCHAR(50), tech VARCHAR(200), libraries VARCHAR(200), extra VARCHAR(200), upcoming VARCHAR(200))`;
//     getConn().query(db,(err, res)=>{
//         if(err) throw err;
//         console.log('TABLE Created')
//     })
// })

// Creating table for individual assessor evaluation level four
// getConn().connect((err)=>{
//     if(err) throw err
//     console.log('Connected');
//     //create table:
//     let db = `CREATE TABLE individualTeamMemberEvaluationByAssessorLevelFour (id INT AUTO_INCREMENT PRIMARY KEY, fname VARCHAR(50), attend VARCHAR(200), evidenceOne VARCHAR(200), deliver VARCHAR(200), evidenceTwo VARCHAR(200), respect VARCHAR(50), evidenceThree VARCHAR(200), commmunicate VARCHAR(200), evidenceFour VARCHAR(200), allowExpress VARCHAR(200), evidenceFive VARCHAR(200), comments VARCHAR(200))`;
//     getConn().query(db,(err, res)=>{
//         if(err) throw err;
//         console.log('TABLE Created')
//     })
// })

// Creating table for individual assessor evaluation level five
// getConn().connect((err)=>{
//     if(err) throw err
//     console.log('Connected');
//     //create table:
//     let db = `CREATE TABLE individualTeamMemberEvaluationByAssessorLevelFive (id INT AUTO_INCREMENT PRIMARY KEY, fname VARCHAR(50), attend VARCHAR(200), evidenceOne VARCHAR(200), deliver VARCHAR(200), evidenceTwo VARCHAR(200), respect VARCHAR(50), evidenceThree VARCHAR(200), commmunicate VARCHAR(200), evidenceFour VARCHAR(200), allowExpress VARCHAR(200), evidenceFive VARCHAR(200), comments VARCHAR(200))`;
//     getConn().query(db,(err, res)=>{
//         if(err) throw err;
//         console.log('TABLE Created')
//     })
// })
//Creating table for peer review level five
// getConn().connect((err)=>{
//     if(err) throw err
//     console.log('Connected');
//     //create table:
//     let db = `CREATE TABLE peerReviewLevelFive (id INT AUTO_INCREMENT PRIMARY KEY, yourName VARCHAR(50), teamMembersName VARCHAR(100), attend VARCHAR(150), deliver VARCHAR(200),respect VARCHAR(50), communicate VARCHAR(50), allowExpress VARCHAR(20), comments VARCHAR(200))`;
//     getConn().query(db,(err, res)=>{
//         if(err) throw err;
//         console.log('TABLE Created')
//     })
// })

//Creating table for final project evalu level five
// getConn().connect((err)=>{
//     if(err) throw err
//     console.log('Connected');
//     //create table:
//     let db = `CREATE TABLE finalProjectEvaluationLevelFive (id INT AUTO_INCREMENT PRIMARY KEY, fname VARCHAR(50), questionOne VARCHAR(250), questionTwo VARCHAR(250), questionThree VARCHAR(250), questionFour VARCHAR(250))`;
//     getConn().query(db,(err, res)=>{
//         if(err) throw err;
//         console.log('TABLE Created')
//     })
// })

// Creating table for  level four
// getConn().connect((err)=>{
//     if(err) throw err
//     console.log('Connected');
//     //create table:
//     let db = `CREATE TABLE markingRubricsLevelFour (id INT AUTO_INCREMENT PRIMARY KEY, student1name VARCHAR(50), student1comment1 VARCHAR(300), student1comment2 VARCHAR(300), student1comment3 VARCHAR(300), student1comment4 VARCHAR(300), student1comment5 VARCHAR(300), student2name VARCHAR(50), student2comment1 VARCHAR(300), student2comment2 VARCHAR(300), student2comment3 VARCHAR(300), student2comment4 VARCHAR(300), student2comment5 VARCHAR(300), student3name VARCHAR(50), student3comment1 VARCHAR(300), student3comment2 VARCHAR(300), student3comment3 VARCHAR(300), student3comment4 VARCHAR(300), student3comment5 VARCHAR(300), student4name VARCHAR(50), student4comment1 VARCHAR(300), student4comment2 VARCHAR(300), student4comment3 VARCHAR(300), student4comment4 VARCHAR(300), student4comment5 VARCHAR(300), student5name VARCHAR(50), student5comment1 VARCHAR(300), student5comment2 VARCHAR(300), student5comment3 VARCHAR(300), student5comment4 VARCHAR(300), student5comment5 VARCHAR(300), student6name VARCHAR(50), student6comment1 VARCHAR(300), student6comment2 VARCHAR(300), student6comment3 VARCHAR(300), student6comment4 VARCHAR(300), student6comment5 VARCHAR(300))`;
//     getConn().query(db,(err, res)=>{
//         if(err) throw err;
//         console.log('TABLE Created')
//     })
// })
//Creating table for  level five
// getConn().connect((err)=>{
//     if(err) throw err
//     console.log('Connected');
//     //create table:
//     let db = `CREATE TABLE markingRubricsLevelFive (id INT AUTO_INCREMENT PRIMARY KEY, student1name VARCHAR(50), student1comment1 VARCHAR(300), student1comment2 VARCHAR(300), student1comment3 VARCHAR(300), student2name VARCHAR(50), student2comment1 VARCHAR(300), student2comment2 VARCHAR(300), student2comment3 VARCHAR(300), student3name VARCHAR(50), student3comment1 VARCHAR(300), student3comment2 VARCHAR(300), student3comment3 VARCHAR(300), student4name VARCHAR(50), student4comment1 VARCHAR(300), student4comment2 VARCHAR(300), student4comment3 VARCHAR(300), student5name VARCHAR(50), student5comment1 VARCHAR(300), student5comment2 VARCHAR(300), student5comment3 VARCHAR(300), student6name VARCHAR(50), student6comment1 VARCHAR(300), student6comment2 VARCHAR(300), student6comment3 VARCHAR(300))`;
//     getConn().query(db,(err, res)=>{
//         if(err) throw err;
//         console.log('TABLE Created')
//     })
// })


//(id INT AUTO_INCREMENT PRIMARY KEY, student1name VARCHAR(50), student1comment1 VARCHAR(300), student1comment2 VARCHAR(300), student1comment3 VARCHAR(300), student1comment4 VARCHAR(300), student1comment5 VARCHAR(300), student2comment1 VARCHAR(300), student2comment2 VARCHAR(300), student2comment3 VARCHAR(300), student2comment4 VARCHAR(300), student2comment5 VARCHAR(300), student3comment1 VARCHAR(300), student3comment2 VARCHAR(300), student3comment3 VARCHAR(300), student3comment4 VARCHAR(300), student3comment5 VARCHAR(300), student4comment1 VARCHAR(300), student4comment2 VARCHAR(300), student4comment3 VARCHAR(300), student4comment4 VARCHAR(300), student4comment5 VARCHAR(300), student5comment1 VARCHAR(300), student5comment2 VARCHAR(300), student5comment3 VARCHAR(300), student5comment4 VARCHAR(300), student5comment5 VARCHAR(300), student6comment1 VARCHAR(300), student6comment2 VARCHAR(300), student6comment3 VARCHAR(300), student6comment4 VARCHAR(300), student6comment5 VARCHAR(300))`;
//(id INT AUTO_INCREMENT PRIMARY KEY, student1name VARCHAR(50), student1comment1 VARCHAR(300), student1comment2 VARCHAR(300), student1comment3 VARCHAR(300), student2comment1 VARCHAR(300), student2comment2 VARCHAR(300), student2comment3 VARCHAR(300), student3comment1 VARCHAR(300), student3comment2 VARCHAR(300), student3comment3 VARCHAR(300), student4comment1 VARCHAR(300), student4comment2 VARCHAR(300), student4comment3 VARCHAR(300), student5comment1 VARCHAR(300), student5comment2 VARCHAR(300), student5comment3 VARCHAR(300), student6comment1 VARCHAR(300), student6comment2 VARCHAR(300), student6comment3 VARCHAR(300))`;

    // let db = `CREATE TABLE markingRubricsLevelFive (id INT AUTO_INCREMENT PRIMARY KEY, student1name VARCHAR(50), student1comment1 VARCHAR(300), student1comment2 VARCHAR(300), student1comment3 VARCHAR(300), student2name VARCHAR(50), student2comment1 VARCHAR(300), student2comment2 VARCHAR(300), student2comment3 VARCHAR(300), student3name VARCHAR(50), student3comment1 VARCHAR(300), student3comment2 VARCHAR(300), student3comment3 VARCHAR(300), student4name VARCHAR(50), student4comment1 VARCHAR(300), student4comment2 VARCHAR(300), student4comment3 VARCHAR(300), student5name VARCHAR(50), student5comment1 VARCHAR(300), student5comment2 VARCHAR(300), student5comment3 VARCHAR(300), student6name VARCHAR(50), student6comment1 VARCHAR(300), student6comment2 VARCHAR(300), student6comment3 VARCHAR(300))`;

// Creating table for  level four
// getConn().connect((err)=>{
//     if(err) throw err
//     console.log('Connected');
//     //create table:
//     let db = `CREATE TABLE markingRubricsLevelFour (id INT AUTO_INCREMENT PRIMARY KEY, student1name VARCHAR(50), student1comment1 VARCHAR(300), student1comment2 VARCHAR(300), student1comment3 VARCHAR(300), student1comment4 VARCHAR(300), student1comment5 VARCHAR(300), student2name VARCHAR(50), student2comment1 VARCHAR(300), student2comment2 VARCHAR(300), student2comment3 VARCHAR(300), student2comment4 VARCHAR(300), student2comment5 VARCHAR(300), student3name VARCHAR(50), student3comment1 VARCHAR(300), student3comment2 VARCHAR(300), student3comment3 VARCHAR(300), student3comment4 VARCHAR(300), student3comment5 VARCHAR(300), student4name VARCHAR(50), student4comment1 VARCHAR(300), student4comment2 VARCHAR(300), student4comment3 VARCHAR(300), student4comment4 VARCHAR(300), student4comment5 VARCHAR(300), student5name VARCHAR(50), student5comment1 VARCHAR(300), student5comment2 VARCHAR(300), student5comment3 VARCHAR(300), student5comment4 VARCHAR(300), student5comment5 VARCHAR(300), student6name VARCHAR(50), student6comment1 VARCHAR(300), student6comment2 VARCHAR(300), student6comment3 VARCHAR(300), student6comment4 VARCHAR(300), student6comment5 VARCHAR(300))`;
//     getConn().query(db,(err, res)=>{
//         if(err) throw err;
//         console.log('TABLE Created')
//     })
// })

// Creating table for  level five
// getConn().connect((err)=>{
//     if(err) throw err
//     console.log('Connected');
//     //create table:
//         let db = 'CREATE TABLE markingRubricsLevelFive (id INT AUTO_INCREMENT PRIMARY KEY, ';
//             db += 'studentName VARCHAR(50), ';
//             db += 'comment1 VARCHAR(250), comment2 VARCHAR(250), comment3 VARCHAR(250), ';
//             db += 'criteria1 BOOLEAN, criteria2 BOOLEAN, criteria3 BOOLEAN, criteria4 BOOLEAN, criteria5 BOOLEAN, criteria6 BOOLEAN)'

//      getConn().query(db,(err, res)=>{
//         if(err) throw err;
//         console.log('TABLE Created')
//     })
// })

// Creating table for  level four
// getConn().connect((err)=>{
//     if(err) throw err
//     console.log('Connected');
//     //create table:
//         let db = 'CREATE TABLE markingRubricsLevelFour (id INT AUTO_INCREMENT PRIMARY KEY, ';
//             db += 'studentName VARCHAR(50), ';
//             db += 'comment1 VARCHAR(250), comment2 VARCHAR(250), comment3 VARCHAR(250), comment4 VARCHAR(250), comment5 VARCHAR(250), ';
//             db += 'criteria1 BOOLEAN, criteria2 BOOLEAN, criteria3 BOOLEAN, criteria4 BOOLEAN, criteria5 BOOLEAN, criteria6 BOOLEAN, criteria7 BOOLEAN, criteria8 BOOLEAN, criteria9 BOOLEAN, criteria10 BOOLEAN, criteria11 BOOLEAN, criteria12 BOOLEAN, criteria13 BOOLEAN, criteria14 BOOLEAN)'

//      getConn().query(db,(err, res)=>{
//         if(err) throw err;
//         console.log('TABLE Created')
//     })
// })

const router = require('./routes/midCourse');
const postCourseRouter = require('./routes/postCourse');
const peerReviewLevelFour = require('./routes/peerReviewLevelFour');
const selfReflectionLevelFour = require('./routes/selfReflectionLevelFour');
const missionxEvaluationLevelFour= require('./routes/missionxEvaluation');
const individualAssessorEvaluationLevelFour= require('./routes/individualAssessorEvaluationLevelFour');
const individualAssessorEvaluationLevelFive= require('./routes/individualAssessorEvaluationLevelFive');
const peerReviewLevelFive = require('./routes/peerReviewLevelFive');
const finalProjectEvaluationLevelFive = require('./routes/finalProjectEvaluationLevelFive');
const markingRubricsLevelFive = require('./routes/markingRubricsLevelFive');
const markingRubricsLevelFour = require('./routes/markingRubricsLevelFour'); //need to include in below statement!!

//include marking rubrics ones
app.use(router, postCourseRouter, peerReviewLevelFour, selfReflectionLevelFour, missionxEvaluationLevelFour, individualAssessorEvaluationLevelFour, individualAssessorEvaluationLevelFive, peerReviewLevelFive, finalProjectEvaluationLevelFive, markingRubricsLevelFive, markingRubricsLevelFour)

app.get('/midcoursefeedbackform', (req,res)=>{
    console.log('fetching all user');
    const sql = "SELECT * FROM midcoursefeedbackform";
    getConn().query(sql, (err, rows, results)=>{
if(err){
    console.log('failed to fetch all user data.');
    res.sendStatus(500);
    res.end();
    return
}
console.log('I think we fetched user successfully')
res.json(rows);
    })
})

app.get('/midcoursefeedbackform/:id', (req, res)=>{
    console.log('fetching user with id : ', req.params.id);
    const sql = 'SELECT * FROM midcoursefeedbackform WHERE id = ?';
    const value = req.params.id;
    getConn().query(sql, [value], (err, rows, fields)=>{
        if(err){
            console.log('Failed to fetch user with user id : ', err);
            res.sendStatus(500)
            res.end()
            return
        }
        console.log('I think we fetched user with id');
        res.json(rows)
    })
})

app.get('/',(req, res) => {
    console.log('responding to root route')
    res.send('Your nodeJS is successfully setup')
})

app.listen(3333, () =>{
    console.log('server running port is 3333');
})


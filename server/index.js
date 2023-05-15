const express = require("express");
var mysql = require('mysql');
var cors = require('cors')
let app = express()
app.use(express.json())
app.use(cors())

var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'RaGuL@08',
  database: 'portfolio'
});
connection.connect();

app.post('/insert',(req,res)=>{
    console.log(req.body)
    connection.query(`insert into contactform (name,email,phonenumber,subject,message)values (?,?,?,?,?)`,[req.body.name,req.body.email,req.body.phonenumber,req.body.subject,req.body.message], function (error, results) {

      if (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
        else{
        // res.end(JSON.stringify(results));

        res.json(results);
        }

      });
    })
    app.listen(3000, () => {
        console.log("listening on  port 3000")
      })
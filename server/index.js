const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool ({
    host: '127.0.0.1',
    user:'root',
    password: '',
    database: 'bvr',
})

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.send("1 tstss");
});

app.get("/api/drivers", (req, res) => {

    res.send("Olá");
    const sqlData = "SELECT * FROM pilotos_pil";
    db.query(sqlData, (err, result)=> {

        console.log(result);
        console.log(err);
    })

});

app.get("/api/insert", (req, res) => {

    /*const tituloNot = req.body.tituloNot
    const dataNot = req.body.dataNot
    const textoNot = req.body.textoNot
    const imgNot = req.body.imgNot
    const urlNot  = req.body.urlNot*/

    const sqlInsert = "INSERT INTO noticias_not VALUES (?,?,?,?,?);";
    db.query(sqlInsert, ["Teste post", 
                         "07/11/2022", 
                         "Hoje foi dia de corrida sdalksajfl asdal asç", 
                         "p_0001.png", 
                         "www.google.com"], (err, result)=> {
        res.send("Insert OK");
        console.log(sqlInsert);
    })
});

app.listen(3001, ()=>{
    console.log("running on port 3001");
});

/*
app.use(cors());
app.use(express.json())

// Route to get all posts
app.get("/api/get", (req,res)=>{
db.query("SELECT * FROM pilotos_pil", (err,result)=>{
    if(err) {
    console.log(err)
    } 
res.send(result)
});   });

// Route to get one post
app.get("/api/getFromId/:id", (req,res)=>{

const id = req.params.id;
 db.query("SELECT * FROM pilotos_pil WHERE pil_IdPiloto_int = ?", id, 
 (err,result)=>{
    if(err) {
    console.log(err)
    } 
    res.send(result)
    });   });

// Route for creating the post
app.post('/api/create', (req,res)=> {

const username = req.body.userName;
const title = req.body.title;
const text = req.body.text;

db.query("INSERT INTO posts (title, post_text, user_name) VALUES (?,?,?)",[title,text,username], (err,result)=>{
   if(err) {
   console.log(err)
   } 
   console.log(result)
});   })

// Route to like a post
app.post('/api/like/:id',(req,res)=>{

const id = req.params.id;
db.query("UPDATE posts SET likes = likes + 1 WHERE id = ?",id, (err,result)=>{
    if(err) {
   console.log(err)   } 
   console.log(result)
    });    
});

// Route to delete a post

app.delete('/api/delete/:id',(req,res)=>{
const id = req.params.id;

db.query("DELETE FROM posts WHERE id= ?", id, (err,result)=>{
if(err) {
console.log(err)
        } }) })

app.listen(PORT, ()=>{
    console.log(`Server is running on ＄{PORT}`)
})*/
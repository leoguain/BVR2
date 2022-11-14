const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const bodyParser = require("body-parser");



const db = mysql.createPool ({
    host: '127.0.0.1',
    user:'root',
    password: '',
    database: 'bvr',
})

app.use(cors());
app.use(express.json());
//app.use(bodyParser.urlencoded({extended: true}))

/*app.get("/", (req, res) => {
    res.send("Ei vc");
});*/

app.post("/newspost", (req, res) => {

    const {title} =req.body.tituloNot;
    const {date} =req.body.dataNot;
    const {text} =req.body.textoNot;
    const {image} =req.body.imageNot;
    const {url} =req.body.urlNot;

    let SQL = 
        "INSERT INTO noticias_not VALUES (null,?,?,?,?,?)";

        db.query(SQL, [title, date, text, image, url], (err, result) => {
            console.log(err);
        })
});

app.get("/getnews", (req, res) => {

    let SQL = 
        "SELECT * FROM noticias_not ORDER BY not_IdNoticia_int DESC"

        db.query(SQL, (err, result) => {
            if (err) console.log(err);
            else res.send(result);
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
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

    const {title, date, text, image, url} = req.body;

    let SQL = 
        "INSERT INTO noticias_not VALUES (null,?,?,?,?,?);";

        db.query(SQL, [title, date, text, image, url], (err, result) => {
            console.log(err);

            res.send(result);
        })
});

app.get("/getnews", (req, res) => {

    let SQL = 
        "SELECT * FROM noticias_not ORDER BY not_IdNoticia_int DESC;"

        db.query(SQL, (err, result) => {
            if (err) console.log(err);
            else res.send(result);
        })
});

app.get("/getdrivers", (req, res) => {

    let SQL = 
        "SELECT * FROM get_drivers_data;"

        db.query(SQL, (err, result) => {
            if (err) console.log(err);
            else res.send(result);
        })
});

app.get("/getdocs", (req, res) => {

    let SQL = 
        "SELECT * FROM documentos_doc ORDER BY doc_TipoDocumento_str, doc_IdDocumento_int DESC;"

        db.query(SQL, (err, result) => {
            if (err) console.log(err);
            else res.send(result);
        })
});

app.get("/getrecordsc", (req, res) => {

    let SQL = 
        "SELECT * FROM get_records_c;"

        db.query(SQL, (err, result) => {
            if (err) console.log(err);
            else res.send(result);
        })
});

app.get("/getrecordst", (req, res) => {

    let SQL = 
        "SELECT * FROM get_records_t;"

        db.query(SQL, (err, result) => {
            if (err) console.log(err);
            else res.send(result);
        })
});

app.get("/getlastgerald", (req, res) => {

    let SQL = 
        "SELECT * FROM get_last_results_geral_d;"

        db.query(SQL, (err, result) => {
            if (err) console.log(err);
            else res.send(result);
        })
});

app.get("/getlastgeral", (req, res) => {

    let SQL = 
        "SELECT * FROM get_last_results_geral;"

        db.query(SQL, (err, result) => {
            if (err) console.log(err);
            else res.send(result);
        })
});

app.get("/getlastrace", (req, res) => {

    let SQL = 
        "SELECT * FROM get_last_results_race;"

        db.query(SQL, (err, result) => {
            if (err) console.log(err);
            else res.send(result);
        })
});

app.get("/getlicenses", (req, res) => {

    let SQL = 
        "SELECT * FROM get_drivers_licenses;"

        db.query(SQL, (err, result) => {
            if (err) console.log(err);
            else res.send(result);
        })
});

app.get("/getchampions", (req, res) => {

    let SQL = 
        "SELECT * FROM get_champions;"

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
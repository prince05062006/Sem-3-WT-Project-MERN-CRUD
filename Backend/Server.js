//2. Create a restful CRUD API using NodeJS, Express and MongoDB for student. (B)

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Student = require('./FacultyBack');//local module relative path 
const FacultyBack = require('./FacultyBack');
const connectString = "mongodb+srv://prince:shreya@cluster0.6edjq.mongodb.net/Prince";
const port = 4000;

mongoose.connect(connectString).then(()=>{
    console.log("Connected Succesfully!");

    const app = express();
    app.use(bodyParser.json());
    app.use(cors());
    
    //getAll
    app.get('/faculty',async (req,res)=>{
        try{
            const ans = await FacultyBack.find();
            res.send(ans);
        }catch(error){
            console.log(error);
        }
    });
    //getByid
    app.get('/faculty/:id',async (req,res)=>{
        try {
            const ans = await FacultyBack.findOne({id : req.params.id});
            if(!ans){
                res.status(404).send({message : "Student Not Found"});
            }
            res.send(ans);
        } catch (error) {
            console.log(error);
        }
    });

    //create
    app.post('/faculty',async (req,res)=>{
        try{
            let stu = new FacultyBack({...req.body});
            const ans = await stu.save();
            res.send(ans);
            console.log("faculty Added Succesfully.");
        }catch(error){
            console.log(error);
        }
    });

    //update
    app.patch('/faculty/:id',async (req,res)=>{
        try{
            const fac = await FacultyBack.findOne({id : req.params.id});
            if(!fac){
                res.status(404).send({message : "Student Not Found"});
            }
            fac.FacultyId = req.body.FacultyId;
            fac.name = req.body.name;
            fac.Department = req.body.Department;
            fac.City = req.body.City;
            fac.img = req.body.img;
            const ans = await fac.save();
            res.send(ans);
            console.log("faculty Updated Succesfully.");
        }catch(error){
            console.log(error);
        }
    });
    //delete
    app.delete('/faculty/:id',async (req,res)=>{
        try{
            const ans = await FacultyBack.deleteOne({id : req.params.id});
            if(!ans){
                res.status(404).send({message : "Student Not Found"});
            }
            res.send(ans);
            console.log("faculty Deleted Succesfully.");
        }catch(error){
            console.log(error);
        }
    });

    app.listen(port,() => {
        console.log(`Server Started At ${port}...`);
    });
});
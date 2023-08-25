"use strict"
import UserData from "../../models/user"
import { Router } from "express";
import express from 'express'
import UserValidatorSchema from "../../validator/userValidationSchemas"
//import UserValidatorSchema from "@/validator/userValidationSchemas";
import Joi  from 'joi'
import validate from "../../validator/validate";

let router = Router();
//http://localhost:8000/api/user/new
router.post('/api/user/new' , validate(UserValidatorSchema), async (req : any, res) => {
 // const usernameValidation = UserSchedulerSchema.validate({username : req.body.username})
 // console.log(usernameValidation)
  await UserData.create({ username: req.body.username, password: req.body.password,
    role: req.body.role, deletedAt : req.body.deleteddAt 
  }).then(function(data : unknown){res.json({payload : data, message: "user added", error: ""}).status(200);})
})
// http://localhost:3050/api/user/getWithid?id=15  
router.get('/api/user/get/', async (req : any , res : any ) => {
  const id : unknown = req.query.id;
  const user : unknown = await UserData.findOne({ where : { id : id } })
  console.log(user)
  res.sendStatus(200).send(UserData)
  })
//  http://localhost:3050/api/user/getAll
router.get('/api/user/all', async (req, res) => {
  const user = await UserData.findAll();  
  console.log(user)
  res.sendStatus(200)


  })    
router.delete('/api/user/delete', async (req, res) => {
  try {
      await UserData.destroy
      ({
           where: {
            id: Number(req.query.id)
        }
      });
      res.send('deleted');
    } catch (err) {
      res.send(err.message);
    }
  })
  //http://localhost:8000/api/user/updateWithid?id=17
  router.patch('/api/user/update', async (req, res) => {
      await UserData.update(
      {
        username: "Sebhastian",
      },
      {
        where: { id: Number(req.query.id) },
      }
    ).then(function(data){res.json(data)})
  })

export default router





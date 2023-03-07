const express = require('express')

const Router=express.Router();
const {login, adminhome ,about,viewUser,approveitems,adminviewlost,adminhistory,adminfeedback, usersignup,submitlost,submitfound,userhome,usereditprofile,userfeedback,userhistory} = require("../controllers/index.controller");



//Admin URLs
Router.get('/login', (req, res) => {

  login(req,res)

})

Router.get('/admin/home', (req, res) => {

  admin(req,res)

})

Router.get('/aboutus', (req, res) => {

  about(req,res)

})
Router.get('/admin/viewuser', (req, res) => {

  viewUser(req,res)

})

Router.get('/admin/ApproveItems', (req, res) => {

  approveitems(req,res)

})

Router.get('/admin/viewlost', (req, res) => {

  adminviewlost(req,res)

})

Router.get('/admin/adminhistory', (req, res) => {

  adminhistory(req,res)

})


Router.get('/admin/adminfeedback', (req, res) => {

  adminfeedback(req,res)

})


//User URLs


Router.get('/signup', (req, res) => {

  usersignup(req,res)

})

Router.get('/user/submitlost', (req, res) => {

  submitlost(req,res)

})


module.exports=Router;
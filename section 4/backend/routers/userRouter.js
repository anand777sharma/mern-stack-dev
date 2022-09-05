// to process user request only
const express = require('express');//req ---short-cut
const Model = require('../models/userModel');

const router = express.Router();

router.post('/add', (req, res) => {
    console.log(req.body);//print requested data
    new Model(req.body);
    new Model(req.body).save()
        .then((result) => {
            console.log(result);
            res.json(result)//send data in jason form
        }).catch((err) => {
            console.log(err);
            res.json(err);
        });
})
router.get('/getall', (req, res) => {
    Model.find({})//data dudndne ke liye
        .then((result) => {
            console.log(result);
            res.json(result);
        }).catch((err) => {
            console.log(err);
            res.json(err);
        });

})
router.get('/getbyemail/:email', (req, res) => {
    console.log(req.params.email);//send email

    //send respond
    Model.findOne({ email: req.params.email })
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            res.json(err);
        })

})

router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.status(500).json(err)
        });
})
module.exports = router;//model is like a container
//mongo db pe ja ke check kr lo
//error 200--succesfull(200 ke variation bhi hote hai jese 201 202 or bhi)
// 400-clint side error
//500--SERVER SIDE ERROR